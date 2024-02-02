package com.example.service;

import com.example.model.Museum;

import java.util.List;

public interface MuseumService {
    List<Museum> findAll();

    Museum findById(Long id);

    Museum findByMostStyle(String style);

    Museum findByMostArtist(long artistID);

    void deleteById(Long id);

    Museum save(Museum museum);
}
