class TopSet
{
    getEmail()
    {
        return cy.get('input[type*="email"]');
    }
    
    getPassword()
    {
        return cy.get('input[type*="password"]');
    }

    getSubmitButton()
    {
        return cy.get('button[type*="submit"]');
    }

    getWrongLogin()
    {
        return cy.get('[class="text-red-600 text-xs mt-2"]');
    }

    getEmailBlankField()
    {
        return cy.get("form div:nth-of-type(1) p");
    }

    getPasswordError()
    {
        return cy.get('[class="mt-4"] p');
    }
}

export default TopSet