

describe('Locating Elements', ()=>{
    it('Verify types of locators', ()=>{
        cy.visit('https://demo.nopcommerce.com/') //Opens URL

        cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch') //searchbox

        cy.get("[type='submit']").click()     //click on search button

        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()

        cy.get("#product_enteredQuantity_4").clear().type("2")  //Quantity
        cy.wait(3000)

        cy.get("#add-to-cart-button-4").click()   //After providing quantity

        cy.wait(5000)
        
        cy.get("#topcartlink > a > span.cart-label").click()  //Shopping cart link
        cy.wait(3000)
        
        cy.get(".product-unit-price").contains("$1,800.00")   //Validation point

    })
})