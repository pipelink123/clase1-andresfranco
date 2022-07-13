import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
// import './ItemCuont.css';



function ItemCount({ stock = 4, initial = 1, onAdd }) {




    const [rates = 1, setRates] = useState(initial);


    const sumar = () => {
        if (rates <= stock) {
            setRates(rates + 1);
            console.log("rates= " + rates)
        }
  
    }
    const restar = () => {
        if (rates >= 1) {
            setRates(rates - 1);
            console.log("rates= " + rates)
        }

    }

    const enviar = () => {
        if (rates <= 6) {
            alert ("añadido al carrito ");
            rates=onAdd;
            alert ("onAdd");
        }
    }






    return (



        <>

            <div class="card position-absolute top-50 start-50 translate-middle">
                <div class="card-header">
                    <h5>imagen de producto</h5>
                </div>
                <div class="card-body">
                    <button onClick={sumar} type="button" class="btn btn-primary">+</button>
                    <button type="button" class="btn btn-primary">{rates}</button>
                    <button onClick={restar} type="button" class="btn btn-primary">-</button>
                    <br></br>
                    <br></br>
                    <button onClick={enviar} type="button" class="btn btn-primary">agregar al carrito</button>
                </div>

            </div>




        </>
    );
}
export default ItemCount;
