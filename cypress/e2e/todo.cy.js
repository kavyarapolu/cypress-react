describe("Registration spec", () => {
  it("should show validation error while leaving all fields blank", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="submit"]').click();
  });
  it("should redirect user to success page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="userinput"]').type("bob");
    cy.get('[data-cy="emailinput"]').type("bob@gmail.com");
    cy.get('[data-cy="passwordinput"]').type("bob");
    cy.get('[data-cy="submit"]').click();
  });
});
