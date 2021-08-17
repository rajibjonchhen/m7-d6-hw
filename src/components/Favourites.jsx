import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../store/actions";

const Favourites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((s) => s.favourites);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <ListGroup>
            {favourites.elements.map((f) => (
              <ListGroupItem>
                <StarFill onClick={() => dispatch(removeFromFav(f))} />
                <span>{f}</span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
