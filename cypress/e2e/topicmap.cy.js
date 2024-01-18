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

    cy.url().then((url) => {
      // Используем регулярное выражение для извлечения значения "zoom"
      const zoomMatch = url.match(/&zoom=(\d+)/);

      // Проверяем, было ли совпадение
      if (zoomMatch) {
        // Получаем значение "zoom"
        const zoom = zoomMatch[1];

        // Выводим значение "zoom" в консоль лог
        cy.log("Zoom: " + zoom);

        // Также можно получить отдельную переменную для значения
        const zoomvalue = parseInt(zoom, 10);
        cy.log("Zoom as number: " + zoomvalue);
      } else {
        cy.log("Zoom not found in the URL");
      }
    });
  });
});
