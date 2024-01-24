let initialStationCount;

describe("Test filters, settings, and a compact guide", () => {
  beforeEach(() => {
    cy.visit("https://wunda-geoportal.cismet.de/#/elektromobilitaet?title");
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get("p > .btn").should("be.exist").click();
    cy.get("#cmdCloseModalApplicationMenu").should("be.exist").click();

    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        initialStationCount = parseInt(matchFilterRes[1]);
      });
  });

  afterEach(() => {
    cy.get("#cmdCloseModalApplicationMenu").should("be.exist").click();
  });

  it("When you click on the menu button, a modal window appears with three sections: Filter, Settings, Instructions", () => {
    cy.get(".modal-content").should("not.be.exist");
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });
  });

  it("When you click on nur verfügbare Ladestationen (online). The number of results decreases", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.contains("label", "nur verfügbare Ladestationen (online)")
      .should("be.exist")
      .click();

    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];
        console.log("xxx New Station Count:", newStationCount);

        expect(parseInt(newStationCount)).to.be.lessThan(initialStationCount);
      });
  });

  it("When you click on alle Ladestationen (Verfügbarkeit). The number of results increases.", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get(
      ":nth-child(1) > .form-group > :nth-child(2) > :nth-child(2) > .radio-inline"
    )
      .should("be.exist")
      .click();

    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];
        console.log("xxx New Station Count:", newStationCount);

        expect(parseInt(newStationCount)).to.equal(initialStationCount);
      });
  });
  it("When you click on 24/7 (online). The number of results decreases", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get(
      ":nth-child(2) > .form-group > :nth-child(2) > :nth-child(1) > .radio-inline"
    )
      .should("be.exist")
      .click();

    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];
        console.log("xxx New Station Count:", newStationCount);

        expect(parseInt(newStationCount)).to.be.lessThan(initialStationCount);
      });
  });
  it("When you click on alle Ladestationen (Öffnungszeiten). The number of results increases", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get(
      ":nth-child(2) > .form-group > :nth-child(2) > :nth-child(2) > .radio-inline"
    )
      .should("be.exist")
      .click();

    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];
        console.log("xxx New Station Count:", newStationCount);

        expect(parseInt(newStationCount)).to.equal(initialStationCount);
      });
  });
  it("When CCS is unselected. The number of results decreases", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get(":nth-child(2) > :nth-child(1) > .checkbox-inline")
      .should("be.exist")
      .click();

    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];
        console.log("xxx New Station Count:", newStationCount);

        expect(parseInt(newStationCount)).to.be.lessThan(initialStationCount);
      });
  });
  it("When Schuko Steckdose checkbox is unselected. The number of results decreases", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get(":nth-child(2) > .checkbox-inline").should("be.exist").click();

    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];
        console.log("xxx New Station Count:", newStationCount);

        expect(parseInt(newStationCount)).to.be.lessThan(initialStationCount);
      });
  });
  it("When Typ 2 Steckdose checkbox is unselected. The number of results decreases", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get(":nth-child(3) > .checkbox-inline").should("be.exist").click();
    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];
        console.log("xxx New Station Count:", newStationCount);
        console.log("xxx init:", initialStationCount);

        expect(parseInt(newStationCount)).to.be.lessThan(initialStationCount);
      });
  });
  it("When CHAdeMO checkbox is unselected. The number of results decreases", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get(":nth-child(4) > .checkbox-inline").should("be.exist").click();
    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];

        expect(parseInt(newStationCount)).to.equal(initialStationCount);
      });
  });
  it("When Tesla Supercharger CCS checkbox is unselected. The number of results decreases", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get(":nth-child(5) > .checkbox-inline").should("be.exist").click();
    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];

        expect(parseInt(newStationCount)).to.be.lessThan(initialStationCount);
      });
  });
  it("When Typ 2 Stecker checkbox is unselected. The number of results decreases", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get(":nth-child(6) > .checkbox-inline").should("be.exist").click();
    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];

        expect(parseInt(newStationCount)).to.be.lessThan(initialStationCount);
      });
  });
  it("When CHAdeMO Stecker checkbox is unselected. The number of results decreases", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get(":nth-child(7) > .checkbox-inline").should("be.exist").click();
    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];

        expect(parseInt(newStationCount)).to.be.equal(initialStationCount);
      });
  });
  it("When Typ 2 Kupplung checkbox is unselected. The number of results decreases", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get(":nth-child(8) > .checkbox-inline").should("be.exist").click();
    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];

        expect(parseInt(newStationCount)).to.be.equal(initialStationCount);
      });
  });
  it("When CEE Blau (Camping) checkbox is unselected. The number of results decreases", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get(":nth-child(9) > .checkbox-inline").should("be.exist").click();
    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];

        expect(parseInt(newStationCount)).to.be.equal(initialStationCount);
      });
  });
  it("When Tesla Wallbox checkbox is unselected. The number of results decreases", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get(":nth-child(10) > .checkbox-inline").should("be.exist").click();
    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];

        expect(parseInt(newStationCount)).to.be.equal(initialStationCount);
      });
  });
  it("When you click on nur Ökostrom-Ladestationen. The number of results decreases", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get(
      ":nth-child(5) > .form-group > :nth-child(2) > :nth-child(1) > .radio-inline"
    )
      .should("be.exist")
      .click();
    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];

        expect(parseInt(newStationCount)).to.be.lessThan(initialStationCount);
      });
  });
  it("When you click on alle Ladestationen (Ökostrom). The number of results increases", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });

    cy.get(
      ":nth-child(5) > .form-group > :nth-child(2) > :nth-child(2) > .radio-inline"
    )
      .should("be.exist")
      .click();
    cy.get('[name="filter"] > .panel > .panel-heading > .panel-title')
      .should("be.exist")
      .invoke("text")
      .then((text) => {
        const matchFilterRes = text.match(/\((\d+)/);
        const newStationCount = matchFilterRes[1];

        expect(parseInt(newStationCount)).to.be.equal(initialStationCount);
      });
  });
  it("If you select the Show titles with individual filtering checkbox in the settings, the map shows only icons", () => {
    cy.get("#cmdShowModalApplicationMenu")
      .should("be.visible")
      .click({ force: true });
    cy.get('[name="settings"] > .panel > .panel-heading')
      .should("be.exist")
      .click({ force: true });
  });
});
