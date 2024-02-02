package com.example.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id",
        scope = Museum.class)
public class Museum {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @OneToOne(cascade = CascadeType.PERSIST)
    private Curator curator;

    @OneToMany(mappedBy = "museum")
    //@JsonManagedReference
    private List<Art> artList;

    @OneToOne(cascade = CascadeType.PERSIST)
   // @JsonBackReference
    private Location location;

}
