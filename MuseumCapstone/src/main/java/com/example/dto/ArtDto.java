package com.example.dto;


import com.example.model.Medium;
import com.example.model.Style;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
@NoArgsConstructor
public class ArtDto {

    private Long id;
    private String name;

    private String type;

    private ArtistDto artist;

    @Enumerated(value = EnumType.STRING)
    private Medium medium;

    private MuseumDto museum;

    private int yearCompleted;
    private String backStory;

    @Enumerated(value = EnumType.STRING)
    private Style style;

    private String url;

    public ArtDto(Long id, String name, Medium medium, MuseumDto museum, int yearCompleted, String backStory, String type, String url) {
        this.id = id;
        this.name = name;
        this.medium = medium;
        this.museum = museum;
        this.yearCompleted = yearCompleted;
        this.backStory = backStory;
        this.type = type;
        this.url = url;
    }

    public ArtDto(Long id, String name, ArtistDto artist, Medium medium, MuseumDto museum, int yearCompleted, String backStory, String type, String url) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.medium = medium;
        this.museum = museum;
        this.yearCompleted = yearCompleted;
        this.backStory = backStory;
        this.type = type;
        this.url = url;
    }

    public ArtDto(Long id, String name, ArtistDto artist, Medium medium, MuseumDto museum, int yearCompleted, Style style, String backStory, String url) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.medium = medium;
        this.museum = museum;
        this.yearCompleted = yearCompleted;
        this.backStory = backStory;
        this.style = style;
        this.type = "Painting";
        this.url = url;
    }
}
