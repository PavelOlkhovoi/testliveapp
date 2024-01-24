describe("Smoke test for ebikes topic", () => {
  it("Map loads with key controls", () => {
    cy.visit("https://wunda-geoportal.cismet.de/#/ebikes");

    cy.get(".leaflet-control-zoom-out").should("be.visible");

    cy.get("input.rbt-input-main.form-control.rbt-input").should("be.visible");

    cy.get("#cmdShowModalApplicationMenu").should("be.visible");

    cy.get(".leaflet-bottom.leaflet-right").should("be.visible");
  });
});
