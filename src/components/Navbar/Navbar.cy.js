import React from "react";
import Navbar from "./Navbar";

describe("<Navbar />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Navbar />);
    cy.get("[data-testid=customer-care]")
      .should("exist")
      .should("contain.text", "01310202026")
      .then(($btn) => {
        if ($btn.is(":disabled")) {
          cy.log("Button exists and is disabled!");
          return;
        } else {
          cy.log("Button exists and is enabled!");
        }
      });
    cy.get("[data-testid=main-logo]")
      .should("exist")
      .find("img")
      .should("have.attr", "src");
  });
});

/* 
describe("Test Suit for archive property", () => {
  before(() => {
    cy.login("60177230711", "1112");
    cy.visit("/dashboard");
  });
  beforeEach(() => {
    Cypress.Cookies.preserveOnce("authToken");
    Cypress.Cookies.preserveOnce("id");
    cy.get("#Archived").click({ force: true });
    cy.wait(2000);
    cy.get("body").then(($body) => {
      if ($body.find("#long-button").length > 0) {
        cy.get("#long-button").first().click({ force: true });
        cy.get("#Archive").click({ force: true });
      }
    });
  });

  it("Should open rented outside popup and archive property on selecting first option", () => {});

  it("Should open Disagree with ZD popup and archive property on selecting fourth option", () => {
    cy.get("body").then(($body) => {
      if ($body.find("#reason-4").length > 0) {
        cy.get("#reason-4").click({ force: true });
        cy.get("#continue-btn").click({ force: true });
        cy.get("[data-testid=decline]").click();
        cy.get(".Toastify__toast-body").should("be.visible");
      }
    });
  });

  it("Should open cannot find tenant popup and archive property on selecting fifth option", () => {
    cy.get("body").then(($body) => {
      if ($body.find("#reason-5").length > 0) {
        cy.get("#reason-5").click({ force: true });
        cy.get("#continue-btn").click({ force: true });
        cy.get("[data-testid=decline]").click();
        cy.get(".Toastify__toast-body").should("be.visible");
      }
    });
  });

  it("Should open under renovation popup and archive property on selecting sixth option", () => {
    cy.get("body").then(($body) => {
      if ($body.find("#reason-5").length > 0) {
        cy.get("#reason-6").click({ force: true });
        cy.get("#continue-btn").click({ force: true });
        cy.get("[data-testid=decline]").click();
        cy.get(".Toastify__toast-body").should("be.visible");
      }
    });
  });

  it("Should open not satisfied popup and archive property on selecting ninth option", () => {
    cy.get("body").then(($body) => {
      if ($body.find("#reason-5").length > 0) {
        cy.get("#reason-9").click({ force: true });
        cy.get("#continue-btn").click({ force: true });
        cy.get("[data-testid=continue]").click();
        cy.get(".Toastify__toast-body").should("be.visible");
      }
    });
  });
});

cy.login("60196484491", "1234");

cy.get("[data-testid=chat__list-item__menu]").first().click();

cy.get("[data-testid=chat__list-item__delete]").click();

cy.get("[data-testid=chat__list-item__delete-confirm]").click();

cy.url().should("be.equal", `${Cypress.config("baseUrl")}dashboard/chat`);

cy.get("[data-testid=landlordfaq_tab]")
  .click({ force: true })
  .get("[data-testid=faq_what_to_do_at_viewing_appointment]")
  .click({ force: true })
  .siblings("img")
  .should("have.attr", "src", viewingAppointmentImages[index]);

it("should contain source_type, source_ref and ssid in headers in chat request api", () => {
  cy.login("60196484491", "1234");
  cy.visit("rent/kl/?q=kl");
  cy.get("[data-testid=propertyListItemWrapper]")
    .last()
    .should("have.attr", "href")
    .then((link) => {
      cy.visit(link);
      cy.get("[data-testid=propertyListItemWrapper]")
        .first()
        .should("have.attr", "href")
        .then((href) => {
          cy.visit(href);
          cy.getCookie("searchSessionId")
            .should("exist")
            .then((cookie) => {
              const searchSessionId = cookie.value;
              const ref = href.split("?").pop().split("&").pop().split("=")[1];
              cy.get("#btnChatWithOwner2").click({ force: true });
              cy.get("#moveInDate").type(dayjs().add(10, "days").calendar());
              cy.get("#occupation").type("Web developer at speedhome");
              cy.get("#nationality")
                .click()
                .focused()
                .type("{enter}", { force: true });
              cy.get("#budget").type(200000);
              cy.get("#tenance_duration")
                .click()
                .focused()
                .type("{enter}", { force: true });
              cy.get("#btnSubmitChatRequest").click();
              cy.wait("@chatRequest").then((interception) => {
                expect(
                  interception.request.headers["x-search-session-id"]
                ).to.be.equal(searchSessionId);
                expect(
                  interception.request.headers["x-source-type"]
                ).to.be.equal("recommendation_listing_page");
                expect(
                  interception.request.headers["x-source-ref"]
                ).to.be.equal(ref);
              });
            });
        });
    });
});
 */
