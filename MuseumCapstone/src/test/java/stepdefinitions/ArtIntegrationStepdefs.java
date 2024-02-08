package stepdefinitions;

import com.example.controller.ArtController;
import com.example.dto.ArtDto;
import com.example.model.Artist;
import com.example.model.Museum;
import com.example.model.Painting;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ArtIntegrationStepdefs {

    @Autowired
    ArtController artController;

    List<ArtDto> artList;

    ArtDto art;

    @Given("I have a Spring Endpoint")
    public void iHaveASpringEndpoint() {
        Assertions.assertNotNull(artController);
    }

    @When("I call the endpoint by name to return all art")
    public void iCallTheEndpointByNameToReturnAllArt() {
        artList = artController.getAllArt();
    }

    @Then("a list of art shall be returned")
    public void aListOfArtShallBeReturned() {
        Assertions.assertNotNull(artList);
    }

    @When("I call the endpoint to return art by {string}")
    public void iCallTheEndpointToReturnArtByName(String name) {
        artList = artController.searchByName(name);
    }

    @Then("an art object with name: {string} shall be returned")
    public void anArtObjectWithNameNameShallBeReturned(String name) {
        for (ArtDto art : artList
        ) {
            Assertions.assertTrue(art.getName().toLowerCase().contains(name.toLowerCase()));
        }
    }

    @When("I call the endpoint to add a painting with name: {string}")
    public void iCallTheEndpointToAddAPaintingWithNameName(String name) {
        Painting painting = new Painting();
        painting.setName(name);
        painting.setMuseum(new Museum());
        painting.setArtist(new Artist());

        artController.createArt(painting);

    }

    @Then("an art object with name: {string} shall be present in the database")
    public void anArtObjectWithNameNameShallBePresentInTheDatabase(String name) {
        artList = artController.getAllArt();
        boolean isPresent = false;

        for (ArtDto art : artList
        ) {
            if (art.getName().equals(name)) {
                isPresent = true;
                break;
            }
        }
        Assertions.assertTrue(isPresent);
    }
}
