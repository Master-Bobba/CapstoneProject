package com.example.service;

import com.example.model.*;
import com.example.repository.MuseumRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Slf4j
@AllArgsConstructor
public class MuseumServiceImpl implements MuseumService {

    private MuseumRepository museumRepository;

    private ArtistService artistService;

    @Override
    public List<Museum> findAll() {
        List<Museum> museums = new ArrayList<>();
        Iterable<Museum> museumIterable = museumRepository.findAll();
        museumIterable.forEach(museums::add);
        return museums;
    }

    @Override
    public Museum findById(Long id) {
        Optional<Museum> museum = museumRepository.findById(id);
        return museum.orElseThrow();
    }

    @Override
    public Museum findByMostStyle(String style) {

        Style styleEnum = null;
        for (Style s : Style.values()) {
            if (s.toString().equalsIgnoreCase(style)) {
                styleEnum = s;
            }
        }
        if (styleEnum == null) {
            log.debug("style not found. Throwing null pointer exception");
            throw new NullPointerException("Style not found");
        }

        List<Museum> museums = findAll();

        Style finalStyleEnum = styleEnum;
        Optional<Museum> museumMostByStyle = museums.stream().max(Comparator.comparingLong(museum -> countArtOfStyle(museum, finalStyleEnum)));
        return museumMostByStyle.orElse(null);
    }

    @Override
    public Museum findByMostArtist(long artistID) {

        List<Artist> artists = artistService.findAll();
        boolean matchFound = false;
        for (Artist artist : artists) {
            if (artist.getId() == artistID) {
                matchFound = true;
                break;
            }
        }

        if (!matchFound){
            throw new NullPointerException("No artist found matching ID: " + artistID);
        }

        List<Museum> museums = findAll();

        Optional<Museum> museumMostByArtist = museums.stream().max(Comparator.comparingLong(museum -> countArtOfArtist(museum, artistID)));
        return museumMostByArtist.orElse(null);
    }

    @Override
    public void deleteById(Long id) {
        museumRepository.deleteById(id);
    }

    @Override
    public Museum save(Museum museum) {
        return museumRepository.save(museum);
    }


    private long countArtOfStyle(Museum museum, Style style) {
        List<Painting> paintingList = new ArrayList<>();
        for (Art art : museum.getArtList()) {
            if (art instanceof Painting painting) {
                paintingList.add(painting);
            }
        }
        return paintingList.stream().filter(painting -> painting.getStyle() == style).count();
    }


    private long countArtOfArtist(Museum museum, Long artistID) {
        List<Art> artList = new ArrayList<>();
        for (Art art : museum.getArtList()) {
            if (Objects.equals(art.getArtist().getId(), artistID)) {
                artList.add(art);
            }
        }
        return artList.size();
    }
}
