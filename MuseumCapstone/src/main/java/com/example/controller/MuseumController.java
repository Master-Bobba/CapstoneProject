package com.example.controller;

import com.example.dto.ArtDto;
import com.example.dto.MuseumDto;
import com.example.model.*;
import com.example.service.ArtistService;
import com.example.service.MuseumService;
import com.example.utils.ArtDtoConverter;
import com.example.utils.MuseumDtoConverter;
import io.micrometer.common.util.StringUtils;
import jakarta.websocket.server.PathParam;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@Slf4j
@AllArgsConstructor
@CrossOrigin
public class MuseumController {

    private final MuseumService museumService;

    @GetMapping("/museum")
    public List<MuseumDto> getAllMuseum() {

        List<MuseumDto> museumDtos = new ArrayList<>();

        for (Museum m: museumService.findAll()) {
         museumDtos.add(MuseumDtoConverter.convert(m));
        }

        log.debug("Fetching all museums");
        return museumDtos;
    }

    @GetMapping("/museum/{id}")
    public MuseumDto findByID(@PathVariable Long id) {
        log.debug("Fetching museum by ID: " + id);
        return MuseumDtoConverter.convert(museumService.findById(id));
    }


    @GetMapping("/museum/most")
    public MuseumDto findByMostFilter(@PathParam("style") String style, @PathParam("artistID") Long artistID){

        MuseumDto museumByMost;

        if (StringUtils.isNotBlank(style) && artistID == null){
            log.debug("Fetching museum with most art of style: " + style);
            museumByMost = MuseumDtoConverter.convert(museumService.findByMostStyle(style));
        } else if (StringUtils.isNotBlank(String.valueOf(artistID)) && style == null) {
            log.debug("Fetching museum with most art of from Artist ID: " + artistID);
            museumByMost = MuseumDtoConverter.convert(museumService.findByMostArtist(artistID));
        } else{
            throw new IllegalArgumentException("invalid endpoint");
        }
        return museumByMost;
    }

    @DeleteMapping("/museum/{id}")
    public void deleteMuseum(@PathVariable Long id){
        Museum museum = museumService.findById(id);

        List<Art> artList = museum.getArtList();
        for (Art a:artList) {
            a.setMuseum(null);
        }

        museumService.deleteById(id);
        log.debug("Museum object with id = " + id + " has been deleted.");
    }

    @PostMapping("/museum")
    public Museum createMuseum(@RequestBody Museum museum){
        return museumService.save(museum);
    }

    @PutMapping ("/museum")
    public Museum updatingMuseum(@RequestBody Museum museum){
        return museumService.save(museum);
    }


    @GetMapping("/museum/search")
    public List<MuseumDto> searchByName(@PathParam("name") String name) {

        List<Museum> museums = museumService.searchByName(name);

        List<MuseumDto> dtos = new ArrayList<>();

        for (Museum museum:museums
        ) {
            dtos.add(MuseumDtoConverter.convert(museum));
        }
        return dtos;
    }

}
