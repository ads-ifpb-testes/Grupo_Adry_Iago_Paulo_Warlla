describe('Trying make login with success', () => {
  it('Must redirect for home', () => {
    cy.visit('http://localhost:8080')
    cy.get('#email').type('joao@gmail.com');
    cy.get('#password').type('teste1234');
    cy.get("#btn").click();
    cy.url().should('eq', 'http://localhost:8080/inicio');
  })
})
describe('Trying make login passing an invalid E-mail success', () => {

  /*
    Um email inválido seria um email que nãos segue o padrão com 
    '@algumaCoisa.com'. Um e-mail inválido gera um erro diferente de um e-mail errado,
  */
  it('Must show an alert with an error message', () => {
    cy.visit('http://localhost:8080')
    cy.get('#email').type('invalidEmail');
    cy.get('#password').type('teste1234');

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.include('E-mail ou senha em formato inválido');
    });

    cy.get("#btn").click();

    cy.wait(500);

  })
})
describe('Trying make login passing an invalid password', () => {
  /*Um senha inválida seria uma senha com menos de 8 caracteres 
  e acarretaria em erro diferente de um senha que
  tenha 8 caracteres porém não corresponda a uma conta*/
  it('Must show an alert with an error message', () => {
    cy.visit('http://localhost:8080')
    cy.get('#email').type('joao@gmail.com');
    cy.get('#password').type('wrong');

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.include('E-mail ou senha em formato inválido');
    });

    cy.get("#btn").click();

    cy.wait(500);

  })
})
describe('Trying make login passing an wrong password', () => {
  it('Must show an alert with an error message', () => {
    cy.visit('http://localhost:8080')
    cy.get('#email').type('joao@gmail.com');
    cy.get('#password').type('teste123456');

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.include('E-mail ou senha inválidos');
    });

    cy.get("#btn").click();

    cy.wait(500);

  })
})
describe('Trying make login passing an wrong E-mail', () => {
  it('Must show an alert with an error message', () => {
    cy.visit('http://localhost:8080')
    cy.get('#email').type('wrongEmail@gmail.com');
    cy.get('#password').type('teste123456');

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.include('E-mail ou senha inválidos');
    });

    cy.get("#btn").click();

    cy.wait(500);

  })
})