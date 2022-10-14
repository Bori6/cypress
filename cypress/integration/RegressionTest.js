/// <reference types= "cypress" />

describe(" Quales course management Test suite",  () => {
  
    


  it("Validate that user can login into quales course management successfully",  () => {
cy.visit("http://tawdry-rule.surge.sh")
cy.viewport(1530,750)
cy.get('.css-48p1y4 > .MuiButton-root').click()
cy.get('[data-testid=EmailAddress]').type("ayp@mail.com")
cy.get('[data-testid=Password]').type("pass1234")
cy.get('.css-190uank').click()
cy.get('.MuiButton-contained').click()
cy.get('.MuiGrid-root > .MuiButton-root').click()
cy.get('[data-testid="Title*"]').type("Bori")
cy.get('[data-testid="Description*"]').type("best course 204")
cy.get('#demo-simple-select').click()
cy.get('[data-value="1"]').click()
cy.get('[data-testid=isPremium]').click()
cy.get('[data-testid=ImageURL]').type("https://en.wikipedia.org/wiki/Actor")
cy.get('[data-testid=online]').click()
cy.get('[data-testid="CourseURL*(mustbeyoutube)"]').type("https://www.youtube.com/watch?v=QhWDZe8t7YU")
cy.get('.css-tzsjye > .MuiButton-root').click()





  
  
  });

});
