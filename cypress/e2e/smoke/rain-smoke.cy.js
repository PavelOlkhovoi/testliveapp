describe("Smoke test for heavy rain topic", () => {
  it("Map loads with key controls", () => {
    cy.visit(
      "https://topicmaps-wuppertal.github.io/starkregen/#/hoehen?bg=0&lat=51.2726&lng=7.199504971504212&zoom=18"
    );

    cy.get(".leaflet-control-zoom-out").should("be.visible");

    cy.get("input.rbt-input-main.form-control.rbt-input").should("be.visible");

    cy.get("#cmdShowModalApplicationMenu").should("be.visible");

    cy.get(".leaflet-bottom.leaflet-right").should("be.visible");
  });
});
