import { useState } from 'react';
import './App.css'

function App() {

  const [file, setFile] = useState(null);

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const validatedFile = () => {
    console.log(file)
  }

  return (
    <main>
      <header>
        <input type="file" onChange={handleFileChange} />
        <button onClick={validatedFile}>Validar </button>
      </header>
      <section>

      </section>
    </main>
  )
}

export default App
