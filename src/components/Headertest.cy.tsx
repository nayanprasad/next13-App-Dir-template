import React from "react";
import Headertest from "./Headertest";

describe("<Headertest />", () => {
    it("renders", () => {
    // see: https://on.cypress.io/mounting-react
        cy.mount(<Headertest />);
    });
});
