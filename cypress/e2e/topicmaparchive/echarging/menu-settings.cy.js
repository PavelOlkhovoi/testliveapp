describe("Settings within the menu", () => {
  beforeEach(() => {
    cy.visit("https://wunda-geoportal.cismet.de/#/elektromobilitaet?title");
    cy.get("#cmdShowModalApplicationMenu").click({ force: true });
    cy.get(".modal-content").should("be.visible");
    cy.get('[name="settings"]').should("be.exist").click();
  });

  afterEach(() => {
    cy.get("#cmdCloseModalApplicationMenu").should("be.exist").click();
  });

  it("When the Summarize charging stations according to scale checkbox is not selected in the settings,  the map shows only icons", () => {
    cy.get(".leaflet-marker-icon").should("have.length.greaterThan", 10);
    cy.contains("label", "Ladestationen maßstabsabhängig zusammenfassen")
      .should("be.exist")
      .click();
    cy.get(".leaflet-marker-icon").should("have.length.greaterThan", 46);
  });
  it("If you unselect the Show titles with individual filtering checkbox in the settings, the title does not exist on the map", () => {
    cy.contains("Meine Ladestationen: passender Stecker | Ökostrom").should(
      "be.visible"
    );
    cy.contains("label", "Titel bei individueller Filterung anzeigen")
      .should("be.exist")
      .click();
    cy.contains("Meine Ladestationen: passender Stecker | Ökostrom").should(
      "not.exist"
    );
  });
  it("When City map (night) is selected, the url contains the mapStyle=night parameter", () => {
    cy.contains("label", "Stadtplan (Nacht)").should("be.exist").click();
    cy.url().should("include", "mapStyle=night");
  });
  it("When City map (day) is selected, the url remains unchanged", () => {
    cy.get('[name="mapBackground"]').should("be.checked");
    cy.url().should("not.include", "mapStyle=night");
  });
  it("When Aerial map is selected, the url remains unchanged", () => {
    cy.contains("label", "Luftbildkarte").should("be.exist").click();
    cy.url().should("not.include", "mapStyle=night");
  });
});
