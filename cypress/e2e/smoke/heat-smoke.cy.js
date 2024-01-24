describe("Smoke test for heat in the city topic", () => {
  it("Map loads with key controls", () => {
    cy.visit(
      "https://wunda-geoportal.cismet.de/#/hitzeinderstadt?selectedSimulations=%5B0%2C1%2C2%5D"
    );

    cy.get(".leaflet-control-zoom-out").should("be.visible");

    cy.get("input.rbt-input-main.form-control.rbt-input").should("be.visible");

    cy.get("#cmdShowModalApplicationMenu").should("be.visible");

    cy.get(".leaflet-bottom.leaflet-right").should("be.visible");
  });
});
