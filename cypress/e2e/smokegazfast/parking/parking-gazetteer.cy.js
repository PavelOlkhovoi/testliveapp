let firstCompanyTitle;
describe("Test of park + ride plan Gazetteer", () => {
  beforeEach(() => {
    cy.visit("https://wunda-geoportal.cismet.de/#/xandride?title");
    // cy.wait(2000);
  });

  it("A tooltip with addresses appears when the address is correct", () => {
    cy.get(".rbt-input-main")
      .should("be.visible")
      .type("Fertighauswelt 1", { force: true });
    cy.get(".rbt-menu").should("be.visible");
  });

  it("Clicking on the tooltip changes the value of lat, lng, zoom, in the url", () => {
    cy.get(".rbt-input-main")
      .should("be.visible")
      .type("Fertighauswelt 1", { force: true });
    cy.get(".rbt-menu").should("be.visible");
    cy.get('.rbt-menu li[aria-label="Fertighauswelt 1"]').should("be.visible");
    cy.get('.rbt-menu li[aria-label="Fertighauswelt 1"]').click();
    cy.url().should("include", "lat");
    cy.url().should("include", "lng");
    cy.url().should("match", /zoom=(14|18)/);
  });

  it("Tooltip contains a district", () => {
    cy.get(".rbt-input-main").should("be.visible").type("Barmen");
    cy.get(".rbt-menu").should("be.visible");
    cy.get(".rbt-menu")
      .should("be.visible")
      .find("li")
      .should("have.length.greaterThan", 2);
  });
  it("Tooltip contains POI", () => {
    cy.get(".rbt-input-main").should("be.visible").type("park");
    cy.get(".rbt-menu").should("be.visible");
    cy.get(".rbt-menu")
      .should("be.visible")
      .find("li")
      .should("have.length.greaterThan", 3);
  });
  it("No matches found notification appears when entering a non-existent address", () => {
    cy.get(".rbt-input-main").should("be.visible").type("burgeramt");
    cy.get(".rbt-menu").should("be.visible");
    cy.contains(".rbt-menu", "Keine Treffer gefunden").should("be.visible");
  });
  it("After clicking the Clear button, the input field will be empty", () => {
    cy.get("form").within(() => {
      cy.get(".rbt-input-main")
        .should("be.visible")
        .type("Fertighauswelt 1", { force: true });
      cy.get("button").should("be.visible").click({ force: true });
      cy.get(".rbt-input-main").should("have.value", "");
    });
  });
});
