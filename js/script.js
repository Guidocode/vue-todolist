/*
  **Descrizione:**
  Rifare l’esercizio della to do list.
  Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
  - `text`, una stringa che indica il testo del todo
  - `done`, un booleano (true/false) che indica se il todo è stato 
  fatto oppure no.

  **MILESTONE 1**
  Stampare all’interno di una lista, un item per ogni todo.
  Se la proprietà `done` è uguale a `true`, visualizzare il testo 
  del todo ~~sbarrato~~.
  
  **MILESTONE 2**
  Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, 
  il todo viene rimosso dalla lista.
  
  **MILESTONE 3**
  Predisporre un campo di input testuale e un pulsante “aggiungi”: 
  cliccando sul pulsante, il testo digitato viene letto e utilizzato 
  per creare un nuovo todo, che quindi viene aggiunto alla lista dei 
  todo esistenti.

  **Bonus:**
  1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
  2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se `done` era uguale a `false`, impostare `true` e viceversa) 
*/

const app = new Vue ({

  el: '#app',

  data: {
    todos:[
      {
        text: 'Studiare Vue js',
        done: true
      },
      {
        text: 'Ripassare mega recap',
        done: false
      },
      {
        text: 'Allenamento',
        done: true
      },
      {
        text: 'Fare la spesa',
        done: false
      }
    ],

    textTodo: '',
    indexTodo: 0
  },

  methods: {

    deleteTodo(indice){
      // Prima di cancellare chiedo conferma: se ok lo cancello
      if(confirm(`Sei sicuro di voler eliminare "${this.todos[indice].text}"?`)){
        this.todos.splice(indice, 1);
      };
      
    },

    addTodo(){
      // creo l'oggetto
      const todo = {
        // this.textTodo corrisponde a quello che
        // l'utente scrive nell'input perché textTodo è dentro v-model 
        text: this.textTodo,
        done: false
      };

      //Creo una condizione per la quale pusho o mando un alert all'utente
      if(this.textTodo.length > 1){
        // pusho l'oggetto nell'array todos
        this.todos.push(todo);
      }else if(this.textTodo.length == 1){
        alert('Scrivi una parola più lunga')
      }else{
        alert('Non hai scritto nulla..Scrivi qualcosa')
      }
      
      //resetto il campo di imput
      this.textTodo = '';
    },

    // Bonus 2
    doneNotDone(indice){
      // intercetto l'indice del todo cliccato
      this.todos[indice].done = !this.todos[indice].done;

      
    }
  }
})