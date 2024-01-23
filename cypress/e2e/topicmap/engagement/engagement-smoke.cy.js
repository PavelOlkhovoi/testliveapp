describe("Smoke test for engagement topic", () => {
  it("Map loads with key controls", () => {
    cy.visit("https://wunda-geoportal.cismet.de/#/ehrenamt");

    cy.get(".leaflet-control-zoom-out").should("be.exist");
    cy.get(".leaflet-control-zoom-out").click();
    cy.url().should("include", "&zoom=7");
    cy.get(".leaflet-control-zoom-in").click();
    cy.url().should("include", "&zoom=8");

    cy.get(".leaflet-marker-icon").should("have.length.greaterThan", 9);
    cy.get("input.rbt-input-main.form-control.rbt-input").should("be.exist");

    cy.get("#cmdShowModalApplicationMenu").should("be.exist");

    cy.get("h5").should("be.visible");
  });
});
