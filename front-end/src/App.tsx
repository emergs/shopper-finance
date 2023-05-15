import { useState } from 'react';
import './App.css'

function App() {

  const [file, setFile] = useState(null);

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const validatedFile = async () => {
    console.log(file)
    try {
      await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(file),
      })
    } catch (error) {
      console.log(error)
    }
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
