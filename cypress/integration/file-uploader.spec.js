describe('Work with file', () => {

  afterEach('Screenshots', () => {
    if (error) {
      browser.takeScreenshot();
    }
  })
  
  it('File Uploader', () => {
    cy.visit('http://the-internet.herokuapp.com/upload');
    cy.reload();
    cy.get('#file-upload')
      .attachFile('picture.png', {subjectType: 'drag-n-drop'});
    cy.get('#file-submit').click();
    cy.get('div.example')
      .should('contain', 'File Uploaded!')
      .should('contain', 'picture.png');
  })
})