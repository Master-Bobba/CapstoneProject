package com.example.utils;

import com.example.dto.ArtDto;
import com.example.model.Art;
import com.example.model.Painting;

public class ArtDtoConverter {

    public static ArtDto convert(Art art) {
        return new ArtDto(art.getId(), art.getName(), ArtistDtoConverter.convert(art.getArtist()),
                art.getMedium(), MuseumDtoConverter.convertOnlyName(art.getMuseum()),
                art.getYearCompleted(), art.getBackStory());
    }

    public static ArtDto convertWithoutArtist(Art art) {
        return new ArtDto(art.getId(), art.getName(),
                art.getMedium(), MuseumDtoConverter.convertOnlyName(art.getMuseum()),
                art.getYearCompleted(), art.getBackStory());
    }


    public static ArtDto convert(Painting painting) {
        return new ArtDto(painting.getId(), painting.getName(), ArtistDtoConverter.convert(painting.getArtist()),
                painting.getMedium(), MuseumDtoConverter.convertOnlyName(painting.getMuseum()),
                painting.getYearCompleted(), painting.getBackStory(),painting.getStyle());
    }


}
