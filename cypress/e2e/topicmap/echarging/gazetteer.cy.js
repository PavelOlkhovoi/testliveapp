describe("Test of Gazetteer", () => {
  beforeEach(() => {
    cy.visit("https://wunda-geoportal.cismet.de/#/elektromobilitaet?title");
  });

  it("A tooltip with addresses appears when the address is correct", () => {
    cy.get('input[placeholder*="Ladestation"]')
      .should("be.visible")
      .type("Fertighauswelt 1");
    cy.get(".rbt-menu").should("be.visible");
  });

  it("Clicking on the tooltip changes the value of lat, lng, zoom, in the url", () => {
    cy.get('input[placeholder*="Ladestation"]')
      .should("be.visible")
      .type("Fertighauswelt 1");
    cy.get(".rbt-menu").should("be.visible");
    cy.get('.rbt-menu li[aria-label="Fertighauswelt 1"]').should("be.visible");
    cy.get('.rbt-menu li[aria-label="Fertighauswelt 1"]').click();
    cy.url().should("include", "lat");
    cy.url().should("include", "lng");
    cy.url().should("include", "zoom=14");
  });
  it("Tooltip contains a district", () => {
    cy.get('input[placeholder*="Ladestation"]')
      .should("be.visible")
      .type("FertighausWelt Wuppertal");
    cy.get(".rbt-menu").should("be.visible");
    cy.get('.rbt-menu li[aria-label="FertighausWelt Wuppertal"]').should(
      "be.visible"
    );
  });
  it("Tooltip contains charging station name", () => {
    cy.get('input[placeholder*="Ladestation"]')
      .should("be.visible")
      .type("Barmen");
    cy.get(".rbt-menu").should("be.visible");
    cy.get(".rbt-menu")
      .should("be.visible")
      .find("li")
      .should("have.length.greaterThan", 10);
  });
  it("Tooltip contains POI", () => {
    cy.get('input[placeholder*="Ladestation"]')
      .should("be.visible")
      .type("parkhaus");
    cy.get(".rbt-menu").should("be.visible");
    cy.get(".rbt-menu")
      .should("be.visible")
      .find("li")
      .should("have.length.greaterThan", 3);
  });
  it("No matches found notification appears when entering a non-existent address", () => {
    cy.get('input[placeholder*="Ladestation"]')
      .should("be.visible")
      .type("burgeramt");
    cy.get(".rbt-menu").should("be.visible");
    cy.contains(".rbt-menu", "Keine Treffer gefunden").should("be.visible");
  });
  it("After clicking the Clear button, the input field will be empty", () => {
    cy.get("form").within(() => {
      cy.get('input[placeholder*="Ladestation"]').type("parkhaus");
      cy.get("button").should("be.visible").click({ force: true });
      cy.get('input[placeholder*="Ladestation"]').should("have.value", "");
    });
  });
});
