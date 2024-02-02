package com.example.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@DiscriminatorValue("Painting")
public class Painting extends Art {

    @Enumerated(value = EnumType.STRING)
    private Style style;

}
