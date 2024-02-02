package com.example.service;

import com.example.model.*;
import com.example.repository.ArtRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@AllArgsConstructor
public class ArtServiceImpl implements ArtService {

    private ArtRepository artRepository;

    @Override
    public List<Art> findAll() {
        List<Art> arts = new ArrayList<>();
        Iterable<Art> artsIts = artRepository.findAll();
        artsIts.forEach(arts::add);
        return arts;
    }

    @Override
    public List<Painting> findAllPaintings() {
        return artRepository.findAllPaintings();
    }

    @Override
    public List<Sculpture> findAllSculptures() {
        return artRepository.findAllSculptures();
    }

    @Override
    public Art findById(Long id) {
        Optional<Art> art = artRepository.findById(id);
        return art.orElseThrow();
    }

    @Override
    public List<Sculpture> findAllSculpturesByArtistAndMuseum(Long artistId, Long museumId) {
        Artist artist = new Artist();
        artist.setId(artistId);
        Museum museum = new Museum();
        museum.setId(museumId);
        return artRepository.findAllSculpturesByArtistAndMuseum(artist, museum);

    }

    @Override
    public Sculpture findFirstSculptureByArtist(Long artistId) {
        Artist artist = new Artist();
        artist.setId(artistId);
        List<Sculpture> sculptures = artRepository.findFirstSculptureByArtist(artist);
        return sculptures.get(0) ;
    }

    @Override
    public Sculpture findLastSculptureByArtist(Long artistId) {
        Artist artist = new Artist();
        artist.setId(artistId);
        List<Sculpture> sculptures = artRepository.findLastSculptureByArtist(artist);
        return sculptures.get(0);
    }

    @Override
    public List<Art> searchByName(String name) {
        return artRepository.searchByName(name);
    }

    @Override
    public Painting save(Painting painting) {
        return artRepository.save(painting);
    }

    @Override
    public Sculpture save(Sculpture sculpture){
        return artRepository.save(sculpture);
    }

    @Override
    public void deleteById(Long id) {
        artRepository.deleteById(id);
    }
}
