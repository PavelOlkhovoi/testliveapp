let middleIconHeight;
describe("When you change Symbol, the size of icons on the map changes", () => {
  beforeEach(() => {
    cy.visit("https://wunda-geoportal.cismet.de/#/elektromobilitaet?title");
    cy.get("#cmdShowModalApplicationMenu").click({ force: true });
    cy.get(".modal-content").should("be.visible");
    cy.get('[name="settings"]').should("be.exist").click();
    cy.get('[name="symbolSizeMid"]').should("be.exist").click();
    cy.get(".leaflet-marker-icon")
      .should("be.exist")
      .first()
      .invoke("height")
      .then((iconHeight) => {
        middleIconHeight = iconHeight;
        console.log("yyy value", iconHeight);
      });
  });

  afterEach(() => {
    cy.get("#cmdCloseModalApplicationMenu").should("be.exist").click();
  });

  it("When the small icons radio box is selected, the height of the icons is smaller", () => {
    cy.get('[name="symbolSizeSmall"]').should("be.exist").click();
    cy.get(".leaflet-marker-icon")
      .should("be.exist")
      .first()
      .invoke("height")
      .then((smallIconSize) => {
        cy.expect(smallIconSize).to.be.lessThan(middleIconHeight);
      });
  });
  it("If the Large Icons radio button is selected, the height of the icons will be larger", () => {
    cy.get('[name="symbolSizeLarge"]').should("be.exist").click();
    cy.get(".leaflet-marker-icon")
      .should("be.exist")
      .first()
      .invoke("height")
      .then((largeIconSize) => {
        cy.expect(largeIconSize).to.be.greaterThan(middleIconHeight);
      });
  });
});
