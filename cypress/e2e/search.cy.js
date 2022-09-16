describe("First part", () => {
  beforeEach(() => {
    cy.visit("https://www.kiwi.com");
    cy.getByData("CookiesPopup-Accept").click();
  });

  it(
    "Search",
    () => {
      cy.getByData("PlacePickerInputPlace-close").click();
      cy.getByData("PlacePickerInput-origin").type("Bratislava");
      cy.wait(1000);
      cy.getByData("PlacePickerRow-city")
        .should("be.visible")
        .contains("Bratislava, Slovakia")
        .click();

      cy.getByData("PlacePickerInput-destination").type("Dublin");
      cy.wait(1000);
      cy.getByData("PlacePickerRow-city")
        .should("be.visible")
        .contains("Dublin, Ireland")
        .click();

      cy.getByData("PassengersField-note-1").contains("1");

      cy.get(".Checkbox__Label-sc-1xqef2c-5 ").click();
      cy.get("[data-state='ok']").should("not.be.checked");

      cy.getByData("LandingSearchButton").click();
      cy.wait(4000);
      cy.getByData("SortBy-price").click();
      cy.getByData("ActiveSorter-price").should("exist");

      cy.wait(4000);
      cy.getByData("BookingButton").first().click();
      //   cy.getByData("MagicLogin-GuestTextLink").click();
    }
  );
});
