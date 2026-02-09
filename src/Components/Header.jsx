import Cart from "./Cart"
export default function Header({ cart, setCart  }) {
return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          
          <div className="col-8 col-md-3">
            <a href="/">
              <img 
                className="img-fluid" 
                src="/img/logo.svg" 
                alt="imagen logo" 
              />
            </a>
          </div>

          <nav className="col-md-6 mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img 
                className="img-fluid" 
                src="/img/carrito.png" 
                alt="imagen carrito" 
              />

              <Cart 
                cart={cart}
                setCart={setCart}
              />
            </div>
          </nav>

        </div>
      </div>
    </header>
  )
}