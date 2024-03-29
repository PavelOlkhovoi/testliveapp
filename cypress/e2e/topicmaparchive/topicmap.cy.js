describe("Smoke test with problems", () => {
  // it("The application is ready for user", () => {
  //   cy.visit(
  //     "https://topicmaps-wuppertal.github.io/stadtplan/#/?lat=51.25597263790461&lng=7.191198646368561&zoom=8"
  //   );

  //   cy.get("#cmdShowModalApplicationMenu").should("be.visible").click();

  //   cy.get(".modal-content", { timeout: 10000 }).should("be.visible");

  //   console.log("xxx screenshot 1");

  //   cy.get("#cmdCloseModalApplicationMenu").click({ force: true });
  //   console.log("xxx screenshot 1");

  //   cy.get(".leaflet-marker-icon", { timeout: 250000 }).should(
  //     "have.length.greaterThan",
  //     100
  //   );

  //   cy.get(".leaflet-marker-icon").first().click();

  //   cy.url().should("include", "&zoom=9");
  // });

  it("Loading", () => {
    cy.visit(
      "https://topicmaps-wuppertal.github.io/stadtplan/#/?lat=51.25597263790461&lng=7.191198646368561&zoom=8"
    );

    cy.get(".leaflet-marker-icon", { timeout: 250000 }).should(
      "have.length.greaterThan",
      100
    );

    cy.get(".leaflet-marker-icon").first().click();

    cy.url().should("include", "&zoom=9");

    cy.get(".leaflet-control-zoom-out").click();
    cy.url().should("include", "&zoom=8");

    cy.get(".leaflet-control-zoom-in").click();
    cy.url().should("include", "&zoom=9");

    cy.get(".modal-content", { timeout: 10000 }).should("not.not.exist");

    cy.get("#cmdShowModalApplicationMenu").should("be.visible").click();

    cy.get(".modal-content", { timeout: 10000 }).should("be.visible");

    cy.get("#cmdCloseModalApplicationMenu").click({ force: true });

    cy.get(".modal-content", { timeout: 10000 }).should("not.not.exist");
  });

  it.only("Contain instructions", () => {
    cy.visit(
      "https://topicmaps-wuppertal.github.io/stadtplan/#/?lat=51.25597263790461&lng=7.191198646368561&zoom=8"
    );

    cy.contains(
      "Für mehr POI Ansicht mit verkleinern. Um nach Themenfeldern zu filtern, das Menü öffnen."
    ).should("be.visible");

    cy.get(".leaflet-marker-icon", { timeout: 300000 }).should(
      "have.length.greaterThan",
      100
    );

    cy.get(".leaflet-marker-icon").first().click();

    cy.url().should("include", "&zoom=9");

    cy.get(".leaflet-control-zoom-out").click();
    cy.url().should("include", "&zoom=8");

    cy.get(".leaflet-control-zoom-in").click();
    cy.url().should("include", "&zoom=9");

    cy.contains("Abraxas e.V").should("be.visible");

    cy.get('[title="vorheriger Treffer"] > .renderAsProperLink').click();
    cy.contains("Abraxas e.V").should("not.not.exist");

    cy.contains("Knipskiste (Knipex)").should("be.visible");

    cy.get('[title="nächster Treffer"] > .renderAsProperLink').click();
    cy.contains("Knipskiste (Knipex)").should("not.not.exist");
    cy.contains("Abraxas e.V").should("be.visible");

    cy.get(".modal-content", { timeout: 10000 }).should("not.not.exist");

    cy.get("#cmdShowModalApplicationMenu").should("be.visible").click();

    cy.get(".modal-content", { timeout: 10000 }).should("be.visible");

    cy.get("#cmdCloseModalApplicationMenu").click({ force: true });

    cy.get(".modal-content", { timeout: 10000 }).should("not.not.exist");
  });
});
