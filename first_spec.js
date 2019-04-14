describe('My First Test', function() {
    it('Does not do much!', () => {
      // given
      cy.visit('https://dev.enigmata.pl')
      
      // when
      cy.get('#btn-register-now-top-id').click()

      // then
      cy.get('h2').should('contain','Rejestracja')
    })
  })
  