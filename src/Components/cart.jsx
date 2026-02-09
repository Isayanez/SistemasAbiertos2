export default function Cart({ cart, setCart }) {

  const isEmpty = () => cart.length === 0
  const cartTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const incrementarItem = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ))
  }

  const disminuirItem = (id) => {
  setCart(
    cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  )
}

  const eliminarItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const clearCart = () => setCart([])

  return (
    <div id="carrito" className="bg-white p-3">

      {isEmpty() ? (
        <p className="text-center">El carrito está vacío</p>
      ) : (
        <>
          <table className="w-100 table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>
                    <img
                      className="img-fluid"
                      src={`/img/${item.image}.jpg`}
                      alt={item.name}
                      width="60"
                    />
                  </td>

                  <td>{item.name}</td>
                  <td className="fw-bold">${item.price}</td>

                  <td className="d-flex gap-2 align-items-center">
                    <button
                      className="btn btn-dark"
                      onClick={() => disminuirItem(item.id)}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      className="btn btn-dark"
                      onClick={() => incrementarItem(item.id)}
                    >
                      +
                    </button>
                  </td>

                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarItem(item.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-end">
            Total a pagar: <span className="fw-bold">${cartTotal()}</span>
          </p>

          <button
            className="btn btn-dark w-100 mt-3"
            onClick={clearCart}
          >
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  )
}