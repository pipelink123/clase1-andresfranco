let is_stock = true;

let production = (timeout, task) => {
    return new Promise((resolve, reject) => {
        if (is_stock) {
            setTimeout(() => {
                resolve(task)
            }, timeout);
        } else {
            reject("Error")
        }
    })
}

production()
    .then(()=>production(0, console.log("Order received. Starting production...")))
    .then(()=>production(8000, console.log("Calentar el agua en la pava")))
    .then(()=>production(5000, console.log("Vertir la yerba en el mate")))
    .then(()=>production(2000, console.log("Tapar el mate con la mano y sacudir")))
    .then(()=>production(3000, console.log("Acomodar la yerba de forma inclinada")))
    .then(()=>production(2000, console.log("Agregar un poco de agua a temperatura ambiente")))
    .then(()=>production(1000, console.log("Introducir la bombilla tapando la punta")))
    .then(()=>production(4000, console.log("Desechar el primer sorbo de mate")))
    .then(()=>production(2000, console.log("Agregar el agua caliente")))
    .catch((err)=>console.log(err))
    .finally(()=>console.log("Day ended. Time to close."));