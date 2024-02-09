package stepdefinitions;

import com.example.controller.MuseumController;
import com.example.dto.ArtDto;
import com.example.dto.MuseumDto;
import com.example.model.Museum;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public class MuseumIntegrationStepdefs {

    @Autowired
    MuseumController museumController;

    List<MuseumDto> museumList;

    MuseumDto museum;

    @Given("I have a Museum Spring Endpoint")
    public void iHaveAMuseumSpringEndpoint(){
        Assertions.assertNotNull(museumController);
    }

    @When("I call the endpoint by name to return all museums")
    @Transactional
    public void iCallTheEndpointByNameToReturnAllMuseums() {
        museumList = museumController.getAllMuseum();
    }

    @Then("a list of museums shall be returned")
    public void aListOfMuseumsShallBeReturned() {
        Assertions.assertNotNull(museumList);
    }

    @When("I call the endpoint to return museums by {long}")
    @Transactional
    public void iCallTheEndpointToReturnMuseumsByID(Long id) {
        museum = museumController.findByID(id);
    }

    @Then("a museum object with ID: {long} shall be returned")
    public void aMuseumObjectWithIDIDShallBeReturned(Long id) {
        Assertions.assertEquals(museum.getId(), id);
    }

    @When("I call the endpoint to add a museum with name: {string}")
    public void iCallTheEndpointToAddAMuseumWithNameName(String name) {
        Museum museum1 = new Museum();
        museum1.setName(name);
        museumController.createMuseum(museum1);
    }

    @Then("a museum object with name: {string} shall be present in the database")
    @Transactional
    public void aMuseumObjectWithNameNameShallBePresentInTheDatabase(String name) {
        museumList = museumController.getAllMuseum();
        boolean isPresent = false;

        for (MuseumDto museum: museumList){
            if (museum.getName().equals(name)){
                isPresent = true;
                break;
            }
        }
        Assertions.assertTrue(isPresent);
    }
}
