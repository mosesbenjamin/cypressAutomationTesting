//node_modules\.bin\cypress open (Use test runner)

// Run tests through the terminal
//node_modules\.bin\cypress run (Run all tests in headless mode)

//node_modules\.bin\cypress run --headed (Run all tests in headed mode(show UI))

//node_modules\.bin\cypress run --spec "path to the prticular file" 
//(Runs a single file)

//node_modules\.bin\cypress run --browser chrome (Will launch the test in chrome browser
//in headed mode)

// ===============================================================================

//Folder Structures
//Fixture folder: is used to maintain test data...XML,JSON..etc (Test Data)
//Integration\example: Cypress locates test cases in this folder (Tests)
//Plugins: Contains eveevent listeners  (Event Listeners)
//Support: Write usable scripts
//Node modules: Where cypress lives.
//cypress.json: cypress configurations.

//==================================================================

//Locating Elements
//1. cy.get(CSS Selector) [.class, #id,[attribute=value], .class[attribute=value]]



describe('Some test', ()=>{
    //Successful Test Case
    it('verifies the title of a page positive', ()=>{
        cy.visit('https://www.linkedin.com/feed/')
        cy.title().should('eq', 'Sign Up | LinkedIn')
    })

    // Failed Test Case
    it('verifies the title of a page negative', ()=>{
        cy.visit('https://www.linkedin.com/feed/')
        cy.title().should('eq', 'Sign Up  LinkedIn')
    })
})
