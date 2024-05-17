import generalActions from "../pages/generalActions";
import LoginPage from "../pages/loginPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe("A User Try to Login",()=>{
    beforeEach("check main things",()=>{
        generalActions.goPage('/en-int/account/login');
        cy.wait(5000);
        generalActions.clickLocation();
        LoginPage.elements.loginTitle().should('have.text','Login to my account');
        LoginPage.elements.inputEmail().should('exist');
        LoginPage.elements.inputPassword().should('exist');
        LoginPage.elements.loginBtnSubmit().should('exist');
    });

   it("inputs errors ",()=>{
      LoginPage.clickLogin();
       LoginPage.elements.emailEmptyMessage().should('have.text','Please fill out this field.');
       //email format
        LoginPage.typeEmail('omar');
       LoginPage.clickLogin();
       LoginPage.elements.emailEmptyMessage().should('have.text',"Please include an '@' in the email adress. 'pmad' is missing an '@'");
    });

    it.only("Login  error ",()=>{
        LoginPage.typeEmail('omar@omar.com');
        LoginPage.typePassword('password');
        LoginPage.clickLogin();
        cy.wait(3000);
        LoginPage.elements.loginUserError().should('have.text','Incorrect email or password.');
     });

});