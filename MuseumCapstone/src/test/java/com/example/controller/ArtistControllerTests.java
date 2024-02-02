package com.example.controller;


import com.example.dto.ArtDto;
import com.example.dto.ArtistDto;
import com.example.model.Artist;
import com.example.model.Painting;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.assertEquals;

@Sql("classpath:test-data.sql")
@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@TestPropertySource(properties = {"spring.sql.init.mode=never"})
public class ArtistControllerTests {

    @Autowired
    MockMvc mockMvc;
    ObjectMapper mapper;

    @BeforeEach
    public void setUp(){
        mapper = new ObjectMapper();
    }

    @Test
    public void testGettingAllArtists() throws Exception {
        int expectedLength = 4;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/artists")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        ArtistDto[] arts = mapper.readValue(contentAsString, ArtistDto[].class);

        System.out.println("Expected length: " + expectedLength);
        System.out.println("actual length: " + arts.length);

        assertEquals(expectedLength, arts.length);
    }

    @Test
    public void testGettingOneArtist() throws Exception{
        String expectedName = "Leonardo da Vinci";
        int id = 10;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/artist/"+id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        ArtistDto artist = mapper.readValue(contentAsString, ArtistDto.class);

        System.out.println("Expected name: " + expectedName);
        System.out.println("actual name: " + artist.getName());

        assertEquals(expectedName, artist.getName());
    }

    @Test
    public void testSearchOneArtist() throws Exception{
        String expectedName = "Leonardo da Vinci";
        String searchWord = "Leo";

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/artist/search?name="+ searchWord)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        ArtistDto[] artists = mapper.readValue(contentAsString, ArtistDto[].class);

        System.out.println("Expected name: " + expectedName);
        System.out.println("actual name: " + artists[0].getName());

        assertEquals(expectedName, artists[0].getName());
    }

    @Test
    public void testSortedListArtists() throws Exception{

        String expectedName = "Vincent van Gogh";

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/sortedartists")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        ArtistDto[] artists = mapper.readValue(contentAsString, ArtistDto[].class);

        System.out.println("Expected name: " + expectedName);
        System.out.println("actual name: " + artists[0].getName());

        assertEquals(expectedName, artists[0].getName());
    }


    @Test
    public void testDeleteOneArtist() throws Exception {
        int id = 10;
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.delete("/artist/"+id))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }


    @Test
    public void testCreateArtist() throws Exception{

        Artist artist = new Artist();

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.post("/artist")
                        .content(mapper.writeValueAsString(artist))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Artist artistResult = mapper.readValue(contentAsString, Artist.class);

        System.out.println("Expected id: " + 1);
        System.out.println("actual id: " + artistResult.getId());

        assertEquals(1,artistResult.getId());
    }

    @Test
    public void testUpdateArtist() throws Exception{

        Artist artist = new Artist();
        artist.setId(10L);
        artist.setName("Changed artist name");

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.put("/artist")
                        .content(mapper.writeValueAsString(artist))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Artist artistResult = mapper.readValue(contentAsString, Artist.class);

        System.out.println("Expected name: " + artist.getName());
        System.out.println("actual name: " + artistResult.getName());

        assertEquals(artist.getName(),artistResult.getName());
    }

}
