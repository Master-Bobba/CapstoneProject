package com.example.controller;

import com.example.dto.MuseumDto;
import com.example.model.Museum;
import com.example.model.Painting;
import com.fasterxml.jackson.databind.ObjectMapper;
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
import static org.junit.jupiter.api.Assertions.assertTrue;

@Sql("classpath:test-data.sql")
@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@TestPropertySource(properties = {"spring.sql.init.mode=never"})
public class MuseumControllerTests {
    @Autowired
    MockMvc mockMvc;
    ObjectMapper mapper = new ObjectMapper();

    @Test
    public void testGettingAllMuseums() throws Exception {
        int expectedLength = 3;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/museum")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        MuseumDto[] museums = mapper.readValue(contentAsString, MuseumDto[].class);

        assertEquals(expectedLength, museums.length);

    }

    @Test
    public void testGettingOneMuseum() throws Exception {
        String expectedName = "Louvre Museum";
        int id = 10;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/museum/"+id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        MuseumDto museum = mapper.readValue(contentAsString, MuseumDto.class);

        assertEquals(expectedName, museum.getName());

    }

    @Test
    public void testGettingMuseumMostFilterWithStyle() throws Exception {
        String testStyle = "RENAISSANCE";
        String expectedName = "Louvre Museum";

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/museum/most?style="+testStyle)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        MuseumDto museum = mapper.readValue(contentAsString, MuseumDto.class);

        assertEquals(expectedName, museum.getName());

    }

    @Test
    public void testGettingMuseumMostFilterWithId() throws Exception {
        Long testId = 10L;
        String expectedName = "Louvre Museum";

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/museum/most?artistID="+testId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        MuseumDto museum = mapper.readValue(contentAsString, MuseumDto.class);

        assertEquals(expectedName, museum.getName());

    }

    @Test
    public void testDeleteOneMuseum() throws Exception {
        Long id = 10L;
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.delete("/museum/"+id))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void testCreateMuseum() throws Exception{

        Museum museum = new Museum();

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.post("/museum")
                        .content(mapper.writeValueAsString(museum))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Museum museumResult = mapper.readValue(contentAsString, Museum.class);

        assertEquals(1,museumResult.getId());
    }

    @Test
    public void testUpdateMuseum() throws Exception{

        Museum museum = new Museum();
        museum.setId(10L);
        museum.setName("Changed name");

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.put("/museum")
                        .content(mapper.writeValueAsString(museum))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Museum museumResult = mapper.readValue(contentAsString, Museum.class);

        assertEquals(museum.getName(),museumResult.getName());
    }
}
