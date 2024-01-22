describe("Test of info box for electric car charging stations map", () => {
  beforeEach(() => {
    cy.visit("https://wunda-geoportal.cismet.de/#/elektromobilitaet?title");
  });

  it("Contains information label with number of charging stations and title", () => {
    cy.contains("Ladestation für E-Autos (online)").should("be.visible");
    cy.contains("71 Ladestationen in Wuppertal").should("be.visible");
  });

  it("Contains station title, description, address, website link and photo", () => {
    cy.get(".well").then(($infobox) => {
      cy.wrap($infobox).get("h5").should("be.visible");
      cy.wrap($infobox).get("h6").should("be.visible");
      cy.wrap($infobox).get("p").should("be.visible");
    });
    cy.get("a > img").should("be.visible");
  });

  it("The slider changes information when you click on the arrows", () => {
    let stationTitle;
    let secondStationTitle;
    cy.get("h5")
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        stationTitle = text;
        cy.get('[title="vorheriger Treffer"] > a').click();
        cy.contains(stationTitle).should("not.not.exist");

        cy.get("h5")
          .should("be.visible")
          .invoke("text")
          .then((title) => {
            secondStationTitle = title;
            expect(stationTitle).not.to.equal(secondStationTitle);
            cy.get('[title="nächster Treffer"]').click();
            cy.contains(secondStationTitle).should("not.exist");
            cy.contains(stationTitle).should("be.visible");
          });
      });
  });

  it("When you click on the down arrow, the info box opens and closes", () => {
    cy.get(".well")
      .should("be.exist")
      .invoke("height")
      .then((height) => {
        console.log("xxx h6Element", height);
        if (height < 46) {
          cy.get("h6").should("not.exist");
          cy.get('[rowspan="2"] > div').click();
          cy.get("h6").should("be.visible");
          cy.get('[rowspan="2"] > div').click();
          cy.get("h6").should("not.exist");
        } else {
          cy.get("h6").should("be.visible");
          cy.get('[rowspan="2"] > div').click();
          cy.get("h6").should("not.exist");
          cy.get('[rowspan="2"] > div').click();
          cy.get("h6").should("be.visible");
        }
      });
  });
  it("Clicking on the zoom icon changes the value of lat, lng, zoom, in the url", () => {
    cy.get('[title="Auf Ladestation zoomen"]').click();
    cy.url().should("include", "zoom=14");
  });
  it(" Clicking on the show data icon opens a modal window c with title, address, operating hours, charging points, payment", () => {
    cy.get('[title="Datenblatt anzeigen"]').click();
    cy.get(".modal-lg").should("be.visible");
    cy.contains("Datenblatt").should("be.visible");
    cy.contains("Adresse").should("be.visible");
    cy.contains("Lademöglichkeit verfügbar (online)").should("be.exist");
    cy.contains("Bezahlen").should("be.exist");
    cy.contains("Betreiber").should("be.exist");
    cy.get("#cmdCloseModalApplicationMenu").should("be.visible").click();
    cy.get(".modal-lg").should("not.exist");
  });
  it("Click on 71 Ladestationen zooms out to the whole city", () => {
    cy.get('[style="text-align: center;"] > a').click();
    cy.url().should("include", "zoom=8");
  });
  it.only("Clicking on the phone icon opens a modal browser window", () => {
    cy.on("window:confirm", (str) => {
      return false;
    });
    cy.get('[title="Betreiber anrufen"]').click();
  });
  it("Clicking on the website icon opens a new tab", () => {
    cy.get('[title="Betreiberwebseite"]')
      .should("be.visible")
      .invoke("attr", "href")
      .then((externalLink) => {
        cy.get('[title="Betreiberwebseite"]').then(($a) => {
          expect($a).to.have.attr("target", "_blank");
          expect($a).to.have.attr("href", externalLink);
        });
      });
  });
});
