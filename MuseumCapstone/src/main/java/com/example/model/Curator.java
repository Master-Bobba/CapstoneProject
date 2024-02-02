package com.example.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Curator extends Person{

    public Curator(String name, int yearBorn){
        super(name, yearBorn);
    }

    @OneToOne(mappedBy = "curator")
    @JsonBackReference
    @JsonIgnore
    private Museum museum;
}
