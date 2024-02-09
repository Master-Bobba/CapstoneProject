package stepdefinitions;

import com.example.controller.ArtController;
import com.example.controller.ArtistController;
import com.example.controller.MuseumController;
import com.example.dto.ArtDto;
import com.example.model.Artist;
import com.example.model.Museum;
import com.example.model.Painting;
import com.example.service.ArtistService;
import com.example.service.MuseumService;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import java.util.Objects;

public class ArtIntegrationStepdefs {

    @Autowired
    ArtController artController;

    @Autowired
    ArtistService artistService;

    @Autowired
    MuseumService museumService;

    List<ArtDto> artList;

    ArtDto art;
    
    Painting painting;

    @Given("I have a Spring Endpoint for Art")
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
        painting.setArtist(artistService.findById(999L));
        painting.setMuseum(museumService.findById(999L));

        artController.createArt(painting);

    }

    @Then("an art object with name: {string} shall be present in the database")
    public void anArtObjectWithNameNameShallBePresentInTheDatabase(String name) {
        artList = artController.getAllArt();
        boolean isPresent = false;
        
        ArtDto artDto = null;

        for (ArtDto art : artList
        ) {
            if (art.getName().equals(name)) {
                isPresent = true;
                artDto = art;
                break;
            }
        }
        Assertions.assertTrue(isPresent);
        
        artController.deleteArt(artDto.getId());
    }


    @Before("@SetUpTestDataBeforeAndCleanUpAfter")
    public void setUpTestData () throws SQLException {
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/capstone", "springuser","springuser");
        Statement stmt = con.createStatement();

        String sql1 = "INSERT INTO artist (id, name, year_born, year_dead) VALUES (999, 'Test Artist', 0, 0);";
        String sql2 = "INSERT INTO curator (id, name, year_born) VALUES (999, 'Test Curator', 0);";
        String sql3 = "INSERT INTO location (id, city, country) VALUES (999, 'City', 'Country');";
        String sql4 = "INSERT INTO museum (id, name, curator_id, location_id) VALUES (999, 'Test Museum', 999, 999);";

        stmt.executeUpdate(sql1);
        stmt.executeUpdate(sql2);
        stmt.executeUpdate(sql3);
        stmt.executeUpdate(sql4);

        stmt.close();
        con.close();
    }

    @After("@SetUpTestDataBeforeAndCleanUpAfter")
    public void CleanUp (Scenario scenario) throws SQLException {
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/capstone", "springuser","springuser");
        Statement stmt = con.createStatement();

        System.out.println(scenario.getName());
        String sql1 = "DELETE FROM `capstone`.`artist` WHERE (`id` = '999');";
        String sql2 = "DELETE FROM `capstone`.`museum` WHERE (`id` = '999');";
        String sql3 = "DELETE FROM `capstone`.`curator` WHERE (`id` = '999');";
        String sql4 = "DELETE FROM `capstone`.`location` WHERE (`id` = '999');";

        stmt.executeUpdate(sql1);
        stmt.executeUpdate(sql2);
        stmt.executeUpdate(sql3);
        stmt.executeUpdate(sql4);

        stmt.close();
        con.close();
    }


    @Given("I have a painting in my database")
    public void iHaveAPaintingInMyDatabase() {
        painting = new Painting();
        painting.setName("painting");
        artController.createArt(painting);
    }

    @When("I call the endpoint to delete the painting")
    public void iCallTheEndpointToDeleteThePainting() {
        artController.deleteArt(painting.getId());
    }

    @Then("The painting is no longer present in the database")
    public void thePaintingIsNoLongerPresentInTheDatabase() {
        List<ArtDto> artList = artController.getAllArt();
        boolean isPresent = false;

        for (ArtDto art: artList) {
            if(Objects.equals(art.getId(), painting.getId())){
                isPresent = true;
            }


        }
        Assertions.assertFalse(isPresent);
    }
}
