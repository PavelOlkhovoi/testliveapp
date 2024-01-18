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

  it.only("Loading", () => {
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
});
