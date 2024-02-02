package com.example.repository;

import com.example.model.*;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtRepository extends CrudRepository<Art, Long>{

    @Query("SELECT p FROM Painting p")
    List<Painting> findAllPaintings();

    @Query("SELECT s FROM Sculpture s")
    List<Sculpture> findAllSculptures();

    //List all the sculptures by a given artist in a given museum
    @Query("SELECT s FROM Sculpture s WHERE s.artist = :artist AND s.museum = :museum")
    List<Sculpture> findAllSculpturesByArtistAndMuseum(@Param("artist") Artist artist, @Param("museum") Museum museum);


    //First or last sculpture made by a given artist.
    @Query("SELECT s FROM Sculpture s WHERE s.artist = :artist ORDER BY s.yearCompleted ASC")
    List<Sculpture> findFirstSculptureByArtist(@Param("artist") Artist artist);

    @Query("SELECT s FROM Sculpture s WHERE s.artist = :artist ORDER BY s.yearCompleted DESC")
    List<Sculpture> findLastSculptureByArtist(@Param("artist") Artist artist);

    @Query("SELECT a FROM Art a WHERE a.name LIKE %:name%")
    List<Art> searchByName(@Param("name") String name);

}
