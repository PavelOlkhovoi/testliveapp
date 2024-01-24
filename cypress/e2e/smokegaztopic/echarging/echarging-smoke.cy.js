describe("Smoke test for topic maps with electric car charging stations", () => {
  it("Map loads with interactive markers and key controls such as zoom in, zoom out, menu, info block, address entry fields", () => {
    cy.visit("https://wunda-geoportal.cismet.de/#/elektromobilitaet?title");

    cy.get(".leaflet-control-zoom-out").should("be.visible");

    cy.get("input.rbt-input-main.form-control.rbt-input").should("be.visible");

    cy.get("#cmdShowModalApplicationMenu").should("be.visible");

    cy.get(".leaflet-bottom.leaflet-right").should("be.visible");
  });
});
