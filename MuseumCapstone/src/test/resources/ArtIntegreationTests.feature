Feature: I want to able to integration test Spring endpoints for the Art Controller

  Scenario:
    Given I have a Spring Endpoint
    When I call the endpoint by name to return all art
    Then a list of art shall be returned

  Scenario Outline:
    Given I have a Spring Endpoint
    When I call the endpoint to return art by <Name>
    Then an art object with name: <Name> shall be returned
    Examples:
      | Name               |
      | "Mona Lisa"        |
      | "David"            |
      | "The Yellow House" |

  Scenario Outline:
    Given I have a Spring Endpoint
    When I call the endpoint to add a painting with name: <Name>
    Then an art object with name: <Name> shall be present in the database
    Examples:
      | Name              |
      | "Test Painting 1" |
      | "Test Painting 2" |