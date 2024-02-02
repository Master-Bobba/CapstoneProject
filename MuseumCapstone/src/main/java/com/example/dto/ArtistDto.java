package com.example.dto;


import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
@AllArgsConstructor
@NoArgsConstructor
public class ArtistDto {

    private Long id;
    private String name;
    private int yearBorn;
    private int yearDead;

    private List<ArtDto> artList;


    public ArtistDto(Long id, String name) {
        this.id = id;
        this.name = name;
    }

}
