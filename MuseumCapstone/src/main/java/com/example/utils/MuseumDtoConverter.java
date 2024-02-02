package com.example.utils;

import com.example.dto.ArtDto;
import com.example.dto.MuseumDto;
import com.example.model.Art;
import com.example.model.Museum;

import java.util.ArrayList;
import java.util.List;

public class MuseumDtoConverter {

    public static MuseumDto convertOnlyName(Museum museum) {
        if (museum == null) {
            return null;
        } else {
            return new MuseumDto(museum.getId(), museum.getName());
        }
    }

    public static MuseumDto convert(Museum museum) {
        if (museum == null) {
            return null;
        } else {

            List<ArtDto> artDtoList = new ArrayList<>();

            for (Art art : museum.getArtList()) {
                art.setMuseum(null);
                artDtoList.add(ArtDtoConverter.convert(art));
            }
            return new MuseumDto(museum.getId(), museum.getName(), museum.getCurator(), artDtoList, museum.getLocation());
        }
    }

}
