Feature: I want to able to integration test Spring endpoints for the Artist Controller

  Scenario: Testing get all artists
    Given I have a Spring Endpoint for Artist
    When I call the endpoint by name to return all artists
    Then a list of artists shall be returned


  Scenario Outline: Testing search by name for artist
    Given I have a Spring Endpoint for Artist
    When I call the endpoint to return artist by <Name>
    Then an artist object with name: <Name> shall be returned
    Examples:
      | Name               |
      | "Michelangelo"     |
      | "Vincent van Gogh" |

#  @SetUpTestDataBeforeAndCleanUpAfter
  Scenario Outline: Test post request for artist
    Given I have a Spring Endpoint for Artist
    When I call the endpoint to add an Artist with name: <Name>
    Then an artist object with name: <Name> shall be present in the database
    Examples:
      | Name              |
      | "Test Artist 1" |
      | "Test Artist 2" |
    