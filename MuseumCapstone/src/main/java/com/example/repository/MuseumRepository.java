package com.example.repository;

import com.example.model.Museum;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MuseumRepository extends CrudRepository<Museum, Long>{

}
