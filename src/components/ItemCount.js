import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import '../ItemCuont.css';
import { data } from "./itemList";
import creadorItems from "./ItemListContainer";




function ItemCount({ stock = 4, initial = 1, onAdd, props }) {

    const [rates = 1, setRates] = useState(initial);

    const sumar = (props) => {
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
            alert("añadido al carrito ");
            rates = onAdd;
            alert("onAdd");
        }
    }

    return (

        <>

            <div id="targeta1" class="card position-absolute ">
                <div class="card-header">
                    <h5>imagen del pruducto</h5>
                    <h5>{creadorItems.TITLE}</h5>


                </div>
                <div class="card-body">
                {props.title}
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
