package com.example.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.annotation.Nullable;
import jakarta.persistence.CascadeType;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id",
        scope = Artist.class)
public class Artist extends Person{

    private int yearDead;

    public Artist(String name) {
        this.setName(name);
    }

    public Artist(String name, int yearBorn, int yearDead) {
        super(name, yearBorn);
        this.yearDead = yearDead;
    }

    @OneToMany(mappedBy = "artist", cascade = CascadeType.ALL)
    @Nullable
    //  @JsonManagedReference(value = "art-artist")
//    @JsonIgnore
    private List<Art> artList;

}
