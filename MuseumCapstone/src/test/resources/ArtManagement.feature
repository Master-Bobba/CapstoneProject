Feature: Art Management

  Scenario Outline: Get all art
    Given the art database is populated with art pieces
    When I request all art
    Then I should receive a list of all art pieces
    Examples:
      | id | name       | artistId | museumId |
      | 1  | Mona Lisa  | 2        | 3        |
      | 2  | Starry Night | 4      | 5        |


  Scenario Outline: Get all paintings
    Given the art database has paintings
    When I request all paintings
    Then I should receive a list of all paintings

  Scenario Outline: Get all sculptures
    Given the art database has sculptures
    When I request all sculptures
    Then I should receive a list of all sculptures

  Scenario Outline: Find art by ID
    Given the art database has an art piece with ID "<id>"
    When I request art with ID "<id>"
    Then I should receive the art piece details for "<id>"

  Scenario Outline: Create a new painting
    Given I have painting details
    When I create a new painting
    Then the painting should be created and returned

  Scenario Outline: Create a new sculpture
    Given I have sculpture details
    When I create a new sculpture
    Then the sculpture should be created and returned

  Scenario Outline: Update a painting
    Given I have updated painting details for "<id>"
    When I update the painting with ID "<id>"
    Then the painting with ID "<id>" should be updated

  Scenario Outline: Delete art by ID
    Given the art database has an art piece with ID "<id>"
    When I delete the art piece with ID "<id>"
    Then the art piece with ID "<id>" should be deleted

  Scenario Outline: Search art by name
    Given the art database is populated with various art pieces including "<name>"
    When I search for art by name "<name>"
    Then I should receive a list of art pieces matching "<name>"

  Scenario Outline: Find sculptures by museum and artist IDs
    Given the art database has sculptures by artist ID "<artistId>" and museum ID "<museumId>"
    When I request sculptures by artist ID "<artistId>" and museum ID "<museumId>"
    Then I should receive a list of sculptures for artist ID "<artistId>" and museum ID "<museumId>"

    Examples:
      | id | name       | artistId | museumId |
      | 1  | Mona Lisa  | 2        | 3        |
      | 2  | Starry Night | 4      | 5        |
