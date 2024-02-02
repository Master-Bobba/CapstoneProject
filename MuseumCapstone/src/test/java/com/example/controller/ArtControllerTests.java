package com.example.controller;

import com.example.dto.ArtDto;
import com.example.model.Art;
import com.example.model.Location;
import com.example.model.Painting;
import com.example.model.Sculpture;
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

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

@Sql("classpath:test-data.sql")
@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@TestPropertySource(properties = {"spring.sql.init.mode=never"})
public class ArtControllerTests {

        @Autowired
        MockMvc mockMvc;
        ObjectMapper mapper;

        @BeforeEach
    public void setUp(){
           mapper = new ObjectMapper();
        }


    @Test
    public void testGettingAllArt() throws Exception {
        int expectedLength = 6;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/art")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        ArtDto[] arts = mapper.readValue(contentAsString, ArtDto[].class);

        System.out.println("Expected length: " + expectedLength);
        System.out.println("actual length: " + arts.length);

        assertEquals(expectedLength, arts.length);

    }


    @Test
    public void testGettingAllPaintings() throws Exception {
        int expectedLength = 4;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/painting")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        ArtDto[] paintings = mapper.readValue(contentAsString,ArtDto[].class);

        System.out.println("Expected length: " + expectedLength);
        System.out.println("actual length: " + paintings.length);

        assertEquals(expectedLength, paintings.length);
    }

    @Test
    public void testGettingAllSculptures() throws Exception {
        int expectedLength = 2;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/sculpture")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        ArtDto[] sculptures = mapper.readValue(contentAsString, ArtDto[].class);

        System.out.println("Expected length: " + expectedLength);
        System.out.println("actual length: " + sculptures.length);

        assertEquals(expectedLength, sculptures.length);
    }

    @Test
    public void testFirstSculptureByArtist() throws Exception{
        String expectedName = "David";
        int id = 11;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/sculpture/first/" + id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                        .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        ArtDto sculpture = mapper.readValue(contentAsString, ArtDto.class);

        assertEquals(expectedName, sculpture.getName());
    }

    @Test
    public void testLastSculptureByArtist() throws Exception{
        String expectedName = "Dying Slave";
        int id = 11;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/sculpture/last/" + id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        ArtDto sculpture = mapper.readValue(contentAsString, ArtDto.class);

        assertEquals(expectedName, sculpture.getName());
    }

    @Test
    public void testSculptureByMuseumAndArtist() throws Exception{
        String expectedName = "David";

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/sculpture/11/11")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        ArtDto[] sculpture = mapper.readValue(contentAsString, ArtDto[].class);

        assertEquals(expectedName, sculpture[0].getName());
    }


    @Test
    public void testGettingOneArt() throws Exception {
        String expectedName = "Mona Lisa";
        int id = 10;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/art/"+id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        ArtDto art = mapper.readValue(contentAsString, ArtDto.class);

        System.out.println("Expected name: " + expectedName);
        System.out.println("actual name: " + art.getName());

        assertEquals(expectedName, art.getName());
    }




    @Test
    public void testDeleteOneArt() throws Exception {
        int id = 10;
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.delete("/art/"+id))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
    @Test
    public void testCreatePainting() throws Exception{

        Painting painting = new Painting();

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.post("/painting")
                        .content(mapper.writeValueAsString(painting))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Painting paintingResult = mapper.readValue(contentAsString, Painting.class);

        System.out.println("Expected id: " + 1);
        System.out.println("actual id: " + paintingResult.getId());

        assertEquals(1,paintingResult.getId());
    }

    @Test
    public void testCreateSculpture() throws Exception{

        Sculpture sculpture = new Sculpture();

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.post("/sculpture")
                        .content(mapper.writeValueAsString(sculpture))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Sculpture sculptureResult = mapper.readValue(contentAsString, Sculpture.class);

        System.out.println("Expected id: " + 1);
        System.out.println("actual id: " + sculptureResult.getId());

        assertEquals(1,sculptureResult.getId());
    }

    @Test
    public void testUpdatePainting() throws Exception{

        Painting painting = new Painting();
        painting.setId(10L);
        painting.setName("Changed name");

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.put("/painting")
                        .content(mapper.writeValueAsString(painting))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Painting paintingResult = mapper.readValue(contentAsString, Painting.class);

        System.out.println("Expected name: " + painting.getName());
        System.out.println("actual name: " + paintingResult.getName());

        assertEquals(painting.getName(),paintingResult.getName());
    }

    @Test
    public void testUpdateSculpture() throws Exception{

        Sculpture sculpture = new Sculpture();
        sculpture.setId(10L);
        sculpture.setName("Changed name");

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.put("/sculpture")
                        .content(mapper.writeValueAsString(sculpture))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Sculpture sculptureResult = mapper.readValue(contentAsString, Sculpture.class);

        System.out.println("Expected name: " + sculpture.getName());
        System.out.println("actual name: " + sculptureResult.getName());

        assertEquals(sculpture.getName(),sculptureResult.getName());
    }

    @Test
    public void testGetLocations() throws Exception{
        String testName = "Mona Lisa";
        String testCity = "Paris";
        int expectedLength = 1;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/location?name="+testName)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Location[] locations = mapper.readValue(contentAsString, Location[].class);

        System.out.println("Actual city: " + locations[0].getCity());
        System.out.println("Expected city: " + testCity);
        System.out.println(contentAsString);

        assertAll(
                ()-> assertEquals(testCity, locations[0].getCity()),
                ()-> assertEquals(expectedLength, locations.length)
        );

    }

}