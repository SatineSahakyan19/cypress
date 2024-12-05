describe('Login test suite',() => {
        before(() => {
                cy.log('Testing started');
        });
        beforeEach(() => {
                cy.visit('https://the-internet.herokuapp.com/forgot_password');
        });
        afterEach(() => {
                cy.log('test complected');
        });
        after(() => {
                cy.log('testing ended');
        });
it('should navigate to login page and login successfully', () => {
        cy.get('#email').type('text');
        cy.get('#form_submit').type('submit');
});
});
