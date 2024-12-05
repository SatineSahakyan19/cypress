describe('Login Tests', () => {
	const validUsername = 'tomsmith';
	const validPassword = 'SuperSecretPassword!';
	before(() => {
		cy.log('testing started');
	});
	beforeEach(() => {
		cy.visit('https://the-internet.herokuapp.com/login');
	});
	afterEach(() => {
		cy.log('test complected');
	});
	after(() => {
		cy.log('testing ended');
	});
	it('sucssesed login',() =>{
		 cy.get('#username').type(validUsername);
        cy.get('#password').type(validPassword);
        cy.get('button[type="submit"]').click();
		cy.get('.flash.success').should('contain.text', 'You logged sucsessfull');
    });
});
