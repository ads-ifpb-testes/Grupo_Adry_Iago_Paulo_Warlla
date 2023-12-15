

describe('Trying to add a product without passing the name field', () => {
  it('Must show an alert with an error message', () => {
    cy.visit('http://localhost:8080');

    // Login
    cy.get('#email').type('joao@gmail.com');
    cy.get('#password').type('teste1234');
    cy.get("#btn").click();
    cy.wait(500);
     // Verifique se o botão de login não está mais presente

    // Não estou passando o nome
    cy.get("#btn").click();
    cy.get('#description').type('IDK');
    cy.get('#qtd').type('2');
    cy.get('#unityPrice').type('2');
    cy.get("#btnAdicionar").click();

    // Verifique o alerta
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.include('Um ou mais campos são inválidos!');
    });
  });
});

describe('Trying to add a product without passing the description field', () => {
  it('Must show an alert with an error message', () => {
    cy.visit('http://localhost:8080');

    // Login
    cy.get('#email').type('joao@gmail.com');
    cy.get('#password').type('teste1234');
    cy.get("#btn").click();
    cy.wait(500);
 // Verifique se o botão de login não está mais presente

    // Não estou passando a descrição
    cy.get("#btn").click();
    cy.get('#name').type('newitem1');
    // cy.get('#description').type('IDK'); // Comentei essa linha para simular a falta de descrição
    cy.get('#qtd').type('2');
    cy.get('#unityPrice').type('2');
    cy.get("#btnAdicionar").click();

    // Verifique o alerta
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.include('Um ou mais campos são inválidos!');
    });
  });
});

describe('Trying add a product withou passing the name field', () => {
  it('Must show an alert with an error message', () => {
    cy.visit('http://localhost:8080');

    // Login
    cy.get('#email').type('joao@gmail.com');
    cy.wait(100);
    cy.get('#password').type('teste1234');
    cy.wait(100);
    cy.get("#btn").click();
    cy.wait(500);
    cy.get("#btn").click() // Verifique se o botão de login não está mais presente
    //Não to passando o nome    
    cy.get('#description').type('IDK');
    cy.get('#qtd').type('2');
    cy.get('#unityPrice').type('2');
    cy.get("#btnAdicionar").click();
    cy.wait(500);
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.include('Um ou mais campos são inválidos!');
    });

  });
});

describe('Trying add a product withou passing the description field', () => {
  it('Must show an alert with an error message', () => {
    cy.visit('http://localhost:8080');

    // Login
    cy.get('#email').type('joao@gmail.com');
    cy.wait(100);
    cy.get('#password').type('teste1234');
    cy.wait(100);
    cy.get("#btn").click();
    cy.wait(500);
    cy.get("#btn").click() // Verifique se o botão de login não está mais presente

    //Não to passando o description    
    cy.get('#name').type('newitem1');
    //cy.get('#description').type('IDK');
    cy.get('#qtd').type('2');
    cy.get('#unityPrice').type('2');
    cy.get("#btnAdicionar").click();
    cy.wait(500);
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.include('Um ou mais campos são inválidos!');
    });


  });
});