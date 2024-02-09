package stepdefinitions;

import com.example.controller.MuseumController;
import com.example.dto.MuseumDto;
import com.example.model.Museum;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import java.util.Objects;

public class MuseumIntegrationStepdefs {

    @Autowired
    MuseumController museumController;

    List<MuseumDto> museumList;

    MuseumDto museum;

    Museum testMuseum;

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

        MuseumDto museumDto = null;

        for (MuseumDto museum: museumList){
            if (museum.getName().equals(name)){
                isPresent = true;
                museumDto = museum;
                break;
            }
        }
        Assertions.assertTrue(isPresent);

        museumController.deleteMuseum(museumDto.getId());
    }

    @Before("@SetUpMuseumTestDataBeforeAndCleanUpAfter")
    public void setUpMuseumTestData () throws SQLException {
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


    @Given("I have a Museum in my database")
    public void iHaveAMuseumInMyDatabase() {
        testMuseum = new Museum();
        testMuseum.setName("museum");
        museumController.createMuseum(testMuseum);
    }

    @When("I call the endpoint to delete the Museum")
    @Transactional
    public void iCallTheEndpointToDeleteTheMuseum() {
        museumController.deleteMuseum(testMuseum.getId());
    }

    @Then("The Museum is no longer present in the database")
    @Transactional
    public void theMuseumIsNoLongerPresentInTheDatabase() {
        List<MuseumDto> museumList = museumController.getAllMuseum();
        boolean isPresent = false;

        for (MuseumDto museum: museumList) {
            if(Objects.equals(museum.getId(), testMuseum.getId())){
                isPresent = true;
            }


        }
        Assertions.assertFalse(isPresent);
    }
}
