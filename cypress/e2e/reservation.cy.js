describe("Second part", () => {
  beforeEach(() => {
    let booking_token; //create variable

    cy.request(
      "GET",
      "https://api.skypicker.com/flights?flyFrom=BTS&to=DUB&adults=2&dateFrom=15/10/2022&partner=cypress"
    ).then((res) => {
      expect(res.status).equal(200);
      expect(res.body.data[0]).has.property("booking_token");

      booking_token = res.body.data[0].booking_token;
      cy.visit("https://www.kiwi.com/booking?token=" + booking_token);
    });
  });

  it("Travel insurance", () => {
    //Accept cookies
    cy.getByData("CookiesPopup-Accept").click();

    //Nationality default
    //Travel insurance -> SET Travel Plus
    cy.getByData("ReservationPassengerInsurance-content-insurance-type")
      .eq(0)
      .click();
    cy.getByData("bookingBillInsurance")
      .eq(0)
      .should("contain", "Travel insurance");
    cy.get("input[value=plus]").should("be.checked").and("have.value", "plus");
    //Click change - Travel insurance
    cy.getByData("ReservationPassengerInsurance-content").find("a").click();

    //Travel insurance -> SET Travel Basic
    cy.getByData("ReservationPassengerInsurance-content-insurance-type")
      .eq(1)
      .click();
    cy.getByData("bookingBillInsurance")
      .eq(0)
      .should("contain", "Travel insurance");
    cy.get("input[value=basic]")
      .should("be.checked")
      .and("have.value", "basic");
    //Click change - Travel insurance
    cy.getByData("ReservationPassengerInsurance-content").find("a").click();

    //Travel insurance -> SET No insurance
    cy.getByData("ReservationPassengerInsurance-content-insurance-type")
      .eq(2)
      .click();
    cy.get("input[value=none]").should("be.checked").and("have.value", "none");

    //SET NATIONALITY --> SET US
    cy.getByData("ReservationPassenger-nationality")
      .select("United States")
      .should("have.value", "us");

    //Travel insurance --> SET Travel Plus
    cy.getByData("plus").click({ force: true });
    cy.getByData("bookingBillInsurance")
      .eq(0)
      .should("contain", "Travel insurance");
    cy.get("input[name='axaUS.streetAddress']").type("Test Address");
    cy.get("input[name='axaUS.city']").type("San Diego");
    cy.getByData("us-states-list")
      .select("California")
      .should("have.value", "CA");
    cy.get("input[name='axaUS.zipCode']").type("93102");

    //Click change - Travel insurance
    cy.contains("Change").click();

    // //Travel insurance --> SET No insurance
    cy.getByData("none").click({ force: true });
  });
});
