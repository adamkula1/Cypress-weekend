describe("First part", () => {
  beforeEach(() => {
    cy.visit("https://www.kiwi.com");
    cy.getByData("CookiesPopup-Accept").click();
  });

  it("Search", () => {
    //Clear input place picker
    cy.getByData("PlacePickerInputPlace-close").click();

    //Destination search - From
    cy.getByData("PlacePickerInput-origin").type("Bratislava");
    cy.wait(1000);
    cy.getByData("PlacePickerRow-city")
      .should("be.visible")
      .contains("Bratislava, Slovakia")
      .click();

    //Destination search - To
    cy.getByData("PlacePickerInput-destination").type("Dublin");
    cy.wait(1000);
    cy.getByData("PlacePickerRow-city")
      .should("be.visible")
      .contains("Dublin, Ireland")
      .click();

    //Add one adult passenger
    cy.getByData("PassengersField").click();
    cy.wait(1000);
    cy.getByData("PassengersRow-adults").find('[aria-label="increment"]').click();
    cy.getByData("PassengersFieldFooter-done").click();
    cy.getByData("PassengersField-note-2").contains("2");

    //Set uncheck -> Check accommodation with Booking.com
    cy.get(".Checkbox__Label-sc-1xqef2c-5 ").click();
    cy.get("[data-state='ok']").should("not.be.checked");

    //Confirm selection (Search)
    cy.getByData("LandingSearchButton").click();
    cy.wait(4000);

    //Show results by cheapest
    cy.getByData("SortBy-price").click();
    //Verify that the displayed results match the criteria entered above
    cy.getByData("ActiveSorter-price").should("exist");
    cy.wait(4000);

    //Continue to the reservation form
    cy.getByData("BookingButton").first().click();
  });
});
