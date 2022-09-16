describe("My Test", () => {
  it("First test", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });

    cy.visit("https://adamkula.sk");
    
  });
});