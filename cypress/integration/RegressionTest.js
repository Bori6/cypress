/// <reference types='cypress' />

import TopSet from "../pageObjects/topSetLoginPage.cy.js"
const email="qa.analyst@email.com"
const password="Password123!"

describe(" web application test suite", () => {
  beforeEach(function () {
    //navigate to the Login page
    cy.visit("https://topset-dev.vercel.app/login");
    //assert that login page opened successfully
    cy.url().should("include", "login");
  });

  it("Validate that user can login with valid credentials into web application successfully", () => {
    const Login = new TopSet();

    //input Valid user email
    Login.getEmail().clear().type(email);
    //input valid user corresponding password
    Login.getPassword().clear().type(password);
    //click on Login button
    Login.getSubmitButton().click();
    //assert that Login was successful
    cy.url().should("not.include", "login");
  });

  it("Validate that user cannot login with invalid email credentials", () => {
    const Login = new TopSet();

    //input invalid email
    Login.getEmail().clear().type("qaaa.analyst@email.com");
    //input valid user password
    Login.getPassword().clear().type(password);
    //click on Login button
    Login.getSubmitButton().click();
    //assert error message
    Login.getWrongLogin().should("contain.text", "Invalid login details");
  });

  it("Validate that user cannot login with invalid password", () => {
    const Login = new TopSet();

    //input valid email
    Login.getEmail().clear().type(email);
    //input invalid user password
    Login.getPassword().clear().type("Password1234!");
    //click on Login button
    Login.getSubmitButton().click();
    //assert error message
    Login.getWrongLogin().should("contain.text", "Invalid login details");
  });

  it("Validate error message is displayed when the required fields are left blank", () => {
    const Login = new TopSet();

    //click on Login button
    Login.getSubmitButton().click();
    //assert email error message
    Login.getEmailBlankField().should("contain.text", "Email is required");
    //assert password error message
    Login.getPasswordError().should("contain.text", "Password is required");
  });

  it("Validate error message is displayed when password length does not meet minimum requirements", () => {
    const Login = new TopSet();

    //input Valid user email
    Login.getEmail().clear().type(email);
    //input password with length less than minimum requirements
    Login.getPassword().clear().type("Pass");
    //click on Login button
    Login.getSubmitButton().click();
    //assert password error message
    Login.getPasswordError().should(
      "contain.text",
      "password must be at least 8 characters"
    );
  });
});