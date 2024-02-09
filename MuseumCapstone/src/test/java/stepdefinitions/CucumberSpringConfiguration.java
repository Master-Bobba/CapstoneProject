package stepdefinitions;

import com.example.MuseumCapstoneApplication;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@CucumberContextConfiguration
@SpringBootTest(classes = MuseumCapstoneApplication.class, webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class CucumberSpringConfiguration {
}
