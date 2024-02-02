package com.example.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "art_type", discriminatorType = DiscriminatorType.STRING)
@Entity
@Data
@NoArgsConstructor
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id",
        scope = Art.class)
//@JsonTypeInfo( use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = Painting.class, name = "painting"),
        @JsonSubTypes.Type(value = Sculpture.class, name = "sculpture")
})
public abstract class Art {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    public Art(Long id, String name, Artist artist, Medium medium, Museum museum, int yearCompleted, String backStory) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.medium = medium;
        this.museum = museum;
        this.yearCompleted = yearCompleted;
        this.backStory = backStory;
    }

    @ManyToOne
    //@JsonBackReference(value = "art-artist")
    private Artist artist;

    @Enumerated(value = EnumType.STRING)
    private Medium medium;

    //@JsonBackReference
    @ManyToOne
    @Nullable
    private Museum museum;

    private int yearCompleted;
    private String backStory;
}
