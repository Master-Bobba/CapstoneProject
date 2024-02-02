package com.example.utils;

import com.example.dto.ArtDto;
import com.example.dto.ArtistDto;

import com.example.model.Artist;

import java.util.List;

public class ArtistDtoConverter {


    public static ArtistDto convert(Artist artist, List<ArtDto> dtos){
        return new ArtistDto(artist.getId(), artist.getName(),
                artist.getYearBorn(), artist.getYearDead(), dtos);
    }

    public static ArtistDto convert(Artist artist){
        return new ArtistDto(artist.getId(), artist.getName());
    }


}
