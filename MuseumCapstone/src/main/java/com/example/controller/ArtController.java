package com.example.controller;

import com.example.dto.ArtDto;
import com.example.model.*;
import com.example.service.ArtService;
import com.example.utils.ArtDtoConverter;
import jakarta.websocket.server.PathParam;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@Slf4j
@AllArgsConstructor
public class ArtController {

    private ArtService artService;

    @GetMapping("/art")
    public List<ArtDto> getAllArt() {


        List<ArtDto> dto = new ArrayList<>();

        for (Art art : artService.findAll()) {
            dto.add(ArtDtoConverter.convert(art));
        }

        log.debug("Fetching all art");
        return dto;
    }

    @GetMapping("/painting")
    public List<ArtDto> getAllPaintings() {

        List<ArtDto> dto = new ArrayList<>();

        for (Painting painting : artService.findAllPaintings()) {
            dto.add(ArtDtoConverter.convert(painting));
        }

        log.debug("Fetching all paintings");
        return dto;
    }

    @GetMapping("/sculpture")
    public List<ArtDto> findAllSculptures() {

        List<ArtDto> dto = new ArrayList<>();

        for (Sculpture sculpture : artService.findAllSculptures()) {
            dto.add(ArtDtoConverter.convert(sculpture));
        }

        log.debug("Find all sculptures called");
        return dto;
    }

    @GetMapping("/art/{id}")
    public ArtDto findById(@PathVariable Long id) {


        log.debug("Fetching art by ID: " + id);

        return ArtDtoConverter.convert(artService.findById(id));
    }

    @GetMapping("/sculpture/first/{id}")
    public ArtDto findFirstSculptureByArtist(@PathVariable Long id) {
        log.debug("Fetching first sculpture by artist with id" + id);

        return ArtDtoConverter.convert(artService.findFirstSculptureByArtist(id));
    }

    @GetMapping("/sculpture/last/{id}")
    public ArtDto findLastSculptureByArtist(@PathVariable Long id) {
        log.debug("Fetching last sculpture by artist with id" + id);
        return ArtDtoConverter.convert(artService.findLastSculptureByArtist(id));
    }

    @GetMapping("/sculpture/{id1}/{id2}")
    public List<ArtDto> findSculptureByMuseumAndArtist(@PathVariable Long id1, @PathVariable Long id2) {

        List<ArtDto> dtos = new ArrayList<>();

        for (Sculpture s : artService.findAllSculpturesByArtistAndMuseum(id1, id2)) {
            dtos.add(ArtDtoConverter.convert(s));
        }

        return dtos;
    }

    @GetMapping("/location")
    public List<Location> findLocationByName(@PathParam("name") String name) {
        List<Art> artList = artService.searchByName(name);
        List<Location> locations = new ArrayList<>();

        artList.forEach(art -> locations.add(art.getMuseum().getLocation()));

        log.debug("lenght of artList is " + artList.size());
        log.debug("Length of locations is " + locations.size());
        return locations;
    }

    @PostMapping("/painting")
    public Painting createArt(@RequestBody Painting painting) {
        return artService.save(painting);
    }

    @PostMapping("/sculpture")
    public Sculpture createArt(@RequestBody Sculpture sculpture) {
        return artService.save(sculpture);
    }

    @PutMapping("/painting")
    public Painting updatingArt(@RequestBody Painting painting) {
        return artService.save(painting);
    }

    @PutMapping("/sculpture")
    public Sculpture updatingArt(@RequestBody Sculpture sculpture) {
        return artService.save(sculpture);
    }

    @DeleteMapping("/art/{id}")
    public void deleteArt(@PathVariable Long id) {
        artService.deleteById(id);
        log.debug("Artist object with id = " + id + " has been deleted.");
    }

}
