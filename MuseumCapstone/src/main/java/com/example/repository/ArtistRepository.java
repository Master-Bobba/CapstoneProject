package com.example.repository;

import com.example.model.Artist;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtistRepository extends CrudRepository<Artist, Long> {

    @Query("SELECT a FROM Artist a WHERE a.name LIKE %:name%")
    List<Artist> searchByName(@Param("name") String name);
    
    @Query("SELECT artist FROM Painting p GROUP BY artist ORDER BY COUNT(artist) DESC")
    List<Artist> findSortedAll();

}
