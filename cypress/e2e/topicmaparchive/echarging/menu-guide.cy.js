describe("Test the menu guide", () => {
  beforeEach(() => {
    cy.visit("https://wunda-geoportal.cismet.de/#/elektromobilitaet?title");
    cy.get("#cmdShowModalApplicationMenu").click({ force: true });
    cy.get(".modal-content").should("be.visible");
    cy.get('[name="help"]').should("be.exist").click({ force: true });
  });

  afterEach(() => {
    cy.get("#cmdCloseModalApplicationMenu").should("be.exist").click();
  });

  it("Anchor links in the Compact instructions section work and scroll to the appropriate heading.", () => {
    cy.contains("Datengrundlage").should("be.visible");

    cy.get("#lnkHelpHeader_styling").should("be.exist").click();
    cy.get("#anchorDivInHelp_styling").should("be.visible");

    cy.get("#lnkHelpHeader_auswahl").should("be.exist").click();
    cy.get("#anchorDivInHelp_auswahl").should("be.visible");

    cy.get("#lnkHelpHeader_positionieren").should("be.exist").click();
    cy.get("#anchorDivInHelp_positionieren").should("be.visible");

    cy.get("#lnkHelpHeader_standort").should("be.exist").click();
    cy.get("#anchorDivInHelp_standort").should("be.visible");

    cy.get("#lnkHelpHeader_settings").should("be.exist").click();
    cy.get("#anchorDivInHelp_settings").should("be.visible");

    cy.get("#lnkHelpHeader_personalisierung").should("be.exist").click();
    cy.get("#anchorDivInHelp_personalisierung").should("be.visible");

    cy.contains("Filtern").click();
    cy.get('[name="MeinThemenstadtplan"').should("be.visible");
  });
  it("Anchor links in the Compact instructions section work and scroll to the appropriate heading.", () => {
    cy.contains("Datengrundlage").should("be.visible");

    cy.get("#lnkHelpHeader_styling").should("be.exist").click();
    cy.get("#anchorDivInHelp_styling").should("be.visible");

    cy.get("#lnkHelpHeader_auswahl").should("be.exist").click();
    cy.get("#anchorDivInHelp_auswahl").should("be.visible");

    cy.get("#lnkHelpHeader_positionieren").should("be.exist").click();
    cy.get("#anchorDivInHelp_positionieren").should("be.visible");

    cy.get("#lnkHelpHeader_standort").should("be.exist").click();
    cy.get("#anchorDivInHelp_standort").should("be.visible");

    cy.get("#lnkHelpHeader_settings").should("be.exist").click();
    cy.get("#anchorDivInHelp_settings").should("be.visible");

    cy.get("#lnkHelpHeader_personalisierung").should("be.exist").click();
    cy.get("#anchorDivInHelp_personalisierung").should("be.visible");

    cy.contains("Filtern").click();
    cy.get('[name="MeinThemenstadtplan"').should("be.visible");
  });
});
