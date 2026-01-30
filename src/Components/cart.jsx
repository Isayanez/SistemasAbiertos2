export default function Cart({ imagen, nombre, precio }) {
    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img
                    className="img-fluid"
                    src={`../../public/img/${imagen}.jpg`}
                    alt={`imagen ${nombre}`}
                />
            </div>

            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">
                    {nombre}
                </h3>

                <p className="fw-black text-primary fs-3">
                    ${precio}
                </p>
            </div>
        </div>
    )
}