const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 2 // A resposta correta é "const myVar;"
    },
    {
      pergunta: "Qual método é utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0 // A resposta correta é "push()"
    },
    {
      pergunta: "Qual operador é utilizado para verificar igualdade de valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1 // A resposta correta é "==="
    },
    {
      pergunta: "Qual método é utilizado para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "toFixed()",
        "parseFloat()",
      ],
      correta: 0 // A resposta correta é "parseInt()"
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        "Verifica se dois valores são iguais",
        "Verifica se pelo menos um dos valores é verdadeiro",
        "Verifica se ambos os valores são verdadeiros",
      ],
      correta: 2 // A resposta correta é "Verifica se ambos os valores são verdadeiros"
    },
    {
      pergunta: "Qual método é usado para encontrar o tamanho de um objeto em JavaScript?",
      respostas: [
        "size()",
        "length()",
        "Object.keys().length",
      ],
      correta: 2 // A resposta correta é "Object.keys().length"
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0 // A resposta correta é "// Este é um comentário"
    },
    {
      pergunta: "Qual é o valor de 'x' após a execução deste código: var x = 10; x += 5;?",
      respostas: [
        "10",
        "15",
        "20",
      ],
      correta: 1 // A resposta correta é "15"
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "delete()",
      ],
      correta: 0 // A resposta correta é "pop()"
    },
    {
      pergunta: "Qual função é utilizada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "print()",
        "console.log()",
      ],
      correta: 2 // A resposta correta é "console.log()"
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

  for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) =>{
        const estaCorreta = event.target.value == item.correta
        if(estaCorreta){
        corretas.add(item)
        }
          mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

      }

      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }