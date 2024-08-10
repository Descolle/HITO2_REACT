import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function CardPizza({name, price, ingredients, picture}) {
  return (
    <div className="PizzaContainer">
      <div>
        <Card style={{ width: "40vh" }} className="pizza">
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title className="pizza_name">{name}</Card.Title>
            <div className="ingredientes">
              <h5 className="ingrediente">Ingredientes:</h5>
              <p>🍕 {ingredients}</p>
            </div>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><strong>Valor:${price}</strong></ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="primary">👀Ver Más</Button>{" "}
            <Button variant="success">🛒Añadir</Button>{" "}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardPizza;
