Feature: I want to able to integration test Spring endpoints for the Museum Controller

  Scenario: Testing get all museums
    Given I have a Museum Spring Endpoint
    When I call the endpoint by name to return all museums
    Then a list of museums shall be returned

  Scenario Outline: Testing search
    Given I have a Museum Spring Endpoint
    When I call the endpoint to return museums by <ID>
    Then a museum object with ID: <ID> shall be returned
    Examples:
      | ID |
      | 10 |
      | 11 |
      | 12 |

  @SetUpTestMuseumDataBeforeAndCleanUpAfter
  Scenario Outline:
    Given I have a Museum Spring Endpoint
    When I call the endpoint to add a museum with name: <Name>
    Then a museum object with name: <Name> shall be present in the database
    Examples:
      | Name              |
      | "Test Museum 1" |
      | "Test Museum 2" |

  Scenario: Test delete request for museum
    Given I have a Museum Spring Endpoint
    Given I have a Museum in my database
    When I call the endpoint to delete the Museum
    Then The Museum is no longer present in the database