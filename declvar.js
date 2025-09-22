// Arquivo criado em projeto no www.stackblitz.com denominado declvar.js

var x = 6;
    console.log(x);

    const y = "a";  // definição de variável const
    // y = "b";
    console.log(y);
    // VARIAVEL GLOBAIS E LOCAIS
    {   // bloco de códigos
       let z = 4;
       console.log(x);
       console.log(y);
       console.log(z);  
    }

//console.log(z);  <-- Essa linha, se descomentada, gera erro pois local ao bloco acima 

