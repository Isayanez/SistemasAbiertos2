export default function Card({ guitar, cart, setCart }) {
    const { name, image, description, price } = guitar

    const handleClick = (item) => {
        const existeEnCarrito = cart.find(g => g.id === item.id)

        if (existeEnCarrito) {
            const carritoActualizado = cart.map(g => {
                if (g.id === item.id) {
                    return { ...g, quantity: g.quantity + 1 }
                }
                return g
            })
            setCart(carritoActualizado)
        } else {
            setCart([...cart, { ...item, quantity: 1 }])
        }
    }

    function addToCart (item) {
        const itemExist = cart.findIndex(guitar=>guitar.id===item.id) 
        //sin duplicados 
        if(itemExist>=0){
            const updatedCart=[...cart]
            updatedCart[itemExist].quantity++
            //aumentar la cantidad del valor
            setCart(updatedCart)
        }else{
            //creando quantity
            item.quantity=1
            setCart([...cart,item])
        }
    }

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img
                    className="img-fluid"
                    src={"/img/" + image + ".jpg"}
                    alt="imagen guitarra"
                />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(guitar)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}