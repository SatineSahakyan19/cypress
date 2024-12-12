describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    const validPassword = 'SuperSecretPassword!';
    const validUsername = 'tomsmith';

    it('success', () => {
        cy.login(validUsername, validPassword);
        cy.url().should('include', '/secure');

        cy.get('.flash.success').then((flashMessage) => {
            const messageText = flashMessage.text().trim();
            expect(messageText).to.include('You logged into a secure area!');

            if (messageText === 'You logged into a secure area!') {
                cy.log('Login successful');
                cy.get('a[href="/logout"]').should('be.visible');
            }
        });
    });
});

