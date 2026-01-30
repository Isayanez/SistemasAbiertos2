import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import { db } from './Components/db/db'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {


  const [cart, setCart] = useState([])

  
  const addToCart = (guitar) => {
    const itemExists = cart.find(item => item.id === guitar.id)

    if (itemExists) {
    
      const updatedCart = cart.map(item =>
        item.id === guitar.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      setCart(updatedCart)
    } else {
    
      setCart([...cart, { ...guitar, quantity: 1 }])
    }
  }

  return (
    <div>
      {}
      <Header cart={cart} setCart={setCart} />

      {}
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {db.map(guitar => (
            <Card
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      {}
      <Footer />
    </div>
  )
}

export default App