describe("Smoke test for hydrogen filling station topic", () => {
  it("Map loads with key controls", () => {
    cy.visit(
      "https://wunda-geoportal.cismet.de/#/meine/Wasserstoff-Tankstellenkarte_Wuppertal"
    );

    cy.get(".leaflet-control-zoom-out").should("be.visible");

    cy.get("input.rbt-input-main.form-control.rbt-input").should("be.visible");

    cy.get("#cmdShowModalApplicationMenu").should("be.visible");

    cy.get(".leaflet-bottom.leaflet-right").should("be.visible");
  });
});
