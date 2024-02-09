Feature: I want to able to integration test Spring endpoints for the Art Controller

  Scenario: Testing get all art
    Given I have a Spring Endpoint for Art
    When I call the endpoint by name to return all art
    Then a list of art shall be returned


  Scenario Outline: Testing search by name for art
    Given I have a Spring Endpoint for Art
    When I call the endpoint to return art by <Name>
    Then an art object with name: <Name> shall be returned
    Examples:
      | Name               |
      | "Mona Lisa"        |
      | "David"            |
      | "The Yellow House" |

  @SetUpTestDataBeforeAndCleanUpAfter
  Scenario Outline: Test post request for art
    Given I have a Spring Endpoint for Art
    When I call the endpoint to add a painting with name: <Name>
    Then an art object with name: <Name> shall be present in the database
    Examples:
      | Name              |
      | "Test Painting 1" |
      | "Test Painting 2" |

  Scenario: Test delete request for art
    Given I have a Spring Endpoint for Art
    Given I have a painting in my database
    When I call the endpoint to delete the painting
    Then The painting is no longer present in the database
