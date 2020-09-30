describe('Testing event functionality', () => {
    it('visits the individual event page for first event', () => {
        cy.visit('/event/1');
        cy.get('.home ul li')
            .first()
            .trigger('mouseover')
            .click();
        cy.url().should('include', 'event/0');
    });
});
