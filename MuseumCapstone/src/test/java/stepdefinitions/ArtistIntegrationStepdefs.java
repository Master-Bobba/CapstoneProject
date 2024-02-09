package stepdefinitions;

import com.example.controller.ArtistController;
import com.example.dto.ArtDto;
import com.example.dto.ArtistDto;
import com.example.model.Artist;
import com.example.model.Painting;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public class ArtistIntegrationStepdefs {

    @Autowired
    ArtistController artistController;

    List<ArtistDto> artistList;

    @Given("I have a Spring Endpoint for Artist")
    public void iHaveASpringEndpointForArtist() {
        Assertions.assertNotNull(artistController);
    }

  @Transactional
    @When("I call the endpoint by name to return all artists")
    public void iCallTheEndpointByNameToReturnAllArtists() {
        artistList = artistController.getAllArtists();
    }

    @Then("a list of artists shall be returned")
    public void aListOfArtistsShallBeReturned() {
        Assertions.assertNotNull(artistList);
    }

    @Transactional
    @When("I call the endpoint to return artist by {string}")
    public void iCallTheEndpointToReturnArtistByName(String name) {
        artistList = artistController.searchByName(name);
    }

    @Then("an artist object with name: {string} shall be returned")
    public void anArtistObjectWithNameNameShallBeReturned(String name) {
        for (ArtistDto artist : artistList
        ) {
            Assertions.assertTrue(artist.getName().toLowerCase().contains(name.toLowerCase()));
        }
    }

    @When("I call the endpoint to add an Artist with name: {string}")
    public void iCallTheEndpointToAddAnArtistWithNameName(String name) {
        Artist artist = new Artist();
        artist.setName(name);

        artistController.createArtist(artist);

    }
    @Then("an artist object with name: {string} shall be present in the database")
    public void anArtistObjectWithNameNameShallBePresentInTheDatabase(String name) {
        artistList = artistController.getAllArtists();
        boolean isPresent = false;

        ArtistDto artistDto = null;

        for (ArtistDto artist : artistList
        ) {
            if (artist.getName().equals(name)) {
                isPresent = true;
                artistDto = artist;
                break;
            }
        }
        Assertions.assertTrue(isPresent);

        artistController.deleteArtist(artistDto.getId());
    }


}
