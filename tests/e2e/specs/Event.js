describe('Testing event functionality', () => {
    it('visits the individual event page for first event', () => {
        cy.visit('/');
        cy.get('.home ul li')
            .first()
            .trigger('mouseover')
            .click({ force: true });
        cy.url().should('include', 'event/0');
    });
});
