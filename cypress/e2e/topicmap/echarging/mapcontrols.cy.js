describe("Test of Gazetteer", () => {
  beforeEach(() => {
    cy.visit(
      "https://wunda-geoportal.cismet.de/#/elektromobilitaet?lat=51.273052471337984&lng=7.1031309410371755&title&zoom=8"
    );
  });

  it("Clicking on the zoom out button increases the zoom value by 1 in the url", () => {
    cy.get(".leaflet-control-zoom-in").should("be.visible");
    cy.get(".leaflet-control-zoom-in").click();
    cy.url().should("include", "zoom=9");
  });
  it("When you click on the zoom in button, the zoom value is decreased by 1 in the url", () => {
    cy.get(".leaflet-control-zoom-out").should("be.visible");
    cy.get(".leaflet-control-zoom-out").click();
    cy.url().should("include", "zoom=7");
  });
});
