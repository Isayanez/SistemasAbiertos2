export default function Header({ cart, setCart }) {

const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
)

return (
    <header className="py-5 header">
    <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">

        {}
        <div className="col-8 col-md-3">
            <a href="index.html">
            <img
                className="img-fluid"
                src="/img/logo.svg"
                alt="imagen logo"
            />
            </a>
        </div>

        {}
        <nav className="col-md-6 mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
            <img
                className="img-fluid"
                src="/img/carrito.png"
                alt="imagen carrito"
            />

            <div id="carrito" className="bg-white p-3">
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
                    {cart.length === 0 ? (
                    <tr>
                        <td colSpan="5" className="text-center">
                        El carrito está vacío
                        </td>
                    </tr>
                    ) : (
                    cart.map(item => (
                        <tr key={item.id}>
                        <td>
                            <img
                            className="img-fluid"
                            src={`/img/${item.image}.jpg`}
                            alt={item.name}
                            />
                        </td>
                        <td>{item.name}</td>
                        <td className="fw-bold">${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => {
                                
                                setCart(cart.filter(i => i.id !== item.id))
                            }}
                            >
                            X
                            </button>
                        </td>
                        </tr>
                    ))
                    )}
                </tbody>
                </table>

                {}
                <p className="text-end">
                Total a pagar: <span className="fw-bold">${total}</span>
                </p>

                {}
                <button
                className="btn btn-dark w-100 mt-3 p-2"
                onClick={() => setCart([])}
                >
                Vaciar Carrito
                </button>

            </div>
            </div>
        </nav>

        </div>
    </div>
    </header>
)
}