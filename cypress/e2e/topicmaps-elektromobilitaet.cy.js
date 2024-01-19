describe("Smoke test for topic maps with electric car charging stations", () => {
  it("Map loads with interactive markers and key controls such as zoom in, zoom out, menu, info block, address entry fields", () => {
    cy.visit("https://wunda-geoportal.cismet.de/#/elektromobilitaet?title");

    cy.get(".leaflet-control-zoom-out").should("be.exist");
    cy.get(".leaflet-control-zoom-out").click();
    cy.url().should("include", "&zoom=7");
    cy.get(".leaflet-control-zoom-in").click();
    cy.url().should("include", "&zoom=8");

    cy.get(".leaflet-marker-icon").should("have.length.greaterThan", 30);
    cy.get("input.rbt-input-main.form-control.rbt-input").should("be.exist");

    cy.get("#cmdShowModalApplicationMenu").should("be.exist");

    cy.contains("Ladestation für E-Autos (online)").should("be.visible");
  });
});
