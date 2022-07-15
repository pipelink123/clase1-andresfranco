import "bootstrap/dist/css/bootstrap.min.css";
import { data } from '../components/itemList';


function creadorItems() {

  console.log(data);


  return (
    <>
      {
        data.map(item =>
          <ItemCount
            key={item.title}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            pictureUrl={item.pictureUrl} />
        )
      }

      <h1>Hola Mundo Item List Container!!!</h1>
    </>
  );
}
export default creadorItems;
