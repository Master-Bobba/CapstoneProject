package com.example.repository;

import com.example.model.Art;
import com.example.model.Museum;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MuseumRepository extends CrudRepository<Museum, Long>{

    @Query("SELECT m FROM Museum m WHERE m.name LIKE %:name%")
    List<Museum> searchByName(@Param("name") String name);
}
