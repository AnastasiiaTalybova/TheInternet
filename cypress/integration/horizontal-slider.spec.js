describe('Work with file', () => {

  it('File Uploader', () => {
    cy.visit('http://the-internet.herokuapp.com/horizontal_slider');
    /*cy.get('[type="range"]').click({ multiple: true, force: true });
    cy.get('[type="range"]').type(2);*/
    cy.get('[type="range"]').invoke('val', '3.5').trigger('change');
    cy.get('#range').should('have.text', '3.5').should('be.visible');
    cy.get('[type="range"]').invoke('val', '1').trigger('change');
    cy.get('#range').should('have.text', '1').should('be.visible');
    cy.get('[type="range"]').invoke('val', '5').trigger('change');
    cy.get('#range').should('have.text', '5').should('be.visible');
  })
})