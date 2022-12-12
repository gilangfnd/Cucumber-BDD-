/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'
Given('I open login page', () => {
   LoginPage.visit()
})
When('I submit login', () => {
    cy.get('h3').should('be.visible')
    LoginPage.fillUsername('username')
    LoginPage.fillPassword('password')
    cy.get('#user_remember_me').click()
    LoginPage.signIn()
})
Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
    cy.get('#account_summary_tab').should('be.visible')
    cy.get('#account_activity_tab > a').click()
    cy.get('.board-header').should('be.visible')
    cy.get('#transfer_funds_tab > a').click()
    cy.get('#pay_bills_tab > a').click()
    cy.get('#money_map_tab > a').click()
    cy.get('#online_statements_tab > a').click()
})
