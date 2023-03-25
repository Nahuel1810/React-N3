import './App.css';

function App() {

  function mostrar(evento) {
    evento.preventDefault();
    const texto = evento.target.texto.value;
    let contador = 0;
    let letra = '';
    for (let i = 0; i < texto.length; i++) {
      letra = texto.charAt(i).toLowerCase();
      switch (letra) {
        case 'a':
          contador++;
          break;

        case 'e':
          contador++;
          break;

        case 'i':
          contador++;
          break;

        case 'o':
          contador++;
          break;

        case 'u':
          contador++;
          break;

        default:
          break;
      }
    }

    alert('Usted escribio: ' + contador + ' vocal/es');
  }


  return (
    <div className="App">
      <form onSubmit={mostrar}>
        <p className="Texto">Ingrese un texto:</p>
        <input className="Form" type="text" name="texto" />
        <br />
        <button className="Boton" type="submit">Mostrar</button>
      </form>
    </div>
  );
}

export default App;
