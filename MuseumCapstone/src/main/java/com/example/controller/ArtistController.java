package com.example.controller;


import com.example.dto.ArtDto;
import com.example.dto.ArtistDto;
import com.example.model.Art;
import com.example.model.Artist;
import com.example.service.ArtistService;
import com.example.utils.ArtDtoConverter;
import com.example.utils.ArtistDtoConverter;
import com.fasterxml.jackson.databind.deser.CreatorProperty;
import jakarta.websocket.server.PathParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Slf4j
@RestController
public class ArtistController {

    private final ArtistService artistService;

    @Autowired
    public ArtistController(ArtistService artistService) {
        this.artistService = artistService;
    }

    @GetMapping("/artists")
    public List<ArtistDto> getAllArtists() {
        List<Artist> artists = Collections.emptyList();
        artists = artistService.findAll();

        List<ArtistDto> dtos = new ArrayList<>();

        for (Artist artist : artists) {

            List<ArtDto> d = new ArrayList<>();
            for (Art art : artist.getArtList()) {

                d.add(ArtDtoConverter.convertWithoutArtist(art));
            }
            dtos.add(ArtistDtoConverter.convert(artist, d));
        }
        return dtos;
    }

    @GetMapping("/artist/{id}")
    public ArtistDto getMessage(@PathVariable Long id) {

        Artist artist = artistService.findById(id);

        List<ArtDto> dtos = new ArrayList<>();
        for (Art art : artist.getArtList()) {
            dtos.add(ArtDtoConverter.convertWithoutArtist(art));
        }
        return ArtistDtoConverter.convert(artist, dtos);

    }

    @GetMapping("/artist/search")
    public List<ArtistDto> searchByName(@PathParam("name") String name) {

        List<Artist> artists = artistService.searchByName(name);

        List<ArtistDto> dtos = new ArrayList<>();

        for (Artist artist : artists) {

            List<ArtDto> d = new ArrayList<>();
            for (Art art : artist.getArtList()) {

                d.add(ArtDtoConverter.convertWithoutArtist(art));
            }
            dtos.add(ArtistDtoConverter.convert(artist, d));
        }
        return dtos;
    }

    @PostMapping("/artist")
    public Artist createArtist(@RequestBody Artist artist) {
        return artistService.save(artist);
    }

    @PutMapping("/artist")
    public Artist updateArtist(@RequestBody Artist artist) {
        return artistService.save(artist);
    }

    @DeleteMapping("/artist/{id}")
    public void deleteArtist(@PathVariable Long id) {
        artistService.deleteById(id);
        log.debug("Artist object with id = " + id + " has been deleted.");
    }

    @GetMapping("/sortedartists")
    public List<ArtistDto> getSortedArtists() {
        List<Artist> artists = artistService.findSortedAll();

        List<ArtistDto> dtos = new ArrayList<>();

        for (Artist artist : artists) {

            List<ArtDto> d = new ArrayList<>();
            for (Art art : artist.getArtList()) {

                d.add(ArtDtoConverter.convertWithoutArtist(art));
            }
            dtos.add(ArtistDtoConverter.convert(artist, d));
        }
        return dtos;
    }

}
