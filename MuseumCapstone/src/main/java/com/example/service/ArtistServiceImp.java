package com.example.service;

import com.example.model.Artist;
import com.example.repository.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ArtistServiceImp implements ArtistService{

    private ArtistRepository artistRepository;

    @Autowired
    public ArtistServiceImp(ArtistRepository artistRepository) {
        this.artistRepository = artistRepository;
    }

    @Override
    public List<Artist> findAll() {
        List<Artist> artists = new ArrayList<>();
        Iterable<Artist> artistsIterable = artistRepository.findAll();
        artistsIterable.forEach(artists::add);
        return artists;
    }

    @Override
    public Artist findById(Long id) {
        Optional<Artist> artistOptional = artistRepository.findById(id);
        return artistOptional.orElseGet(
                () -> new Artist("DEFAULT ARTIST: Artist with id = " + id + " NOT found.")
        );
    }

    @Override
    public List<Artist> searchByName(String name) {
        return artistRepository.searchByName(name);
    }

    @Override
    public Artist save(Artist artist) {
        return artistRepository.save(artist);
    }

    @Override
    public void deleteById(Long id) {
        this.artistRepository.deleteById(id);
    }

    @Override
    public List<Artist> findSortedAll() {
        return artistRepository.findSortedAll();
    }
}
