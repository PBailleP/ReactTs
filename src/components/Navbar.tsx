import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {useShoppingCart} from "../context/ShoppingCartContext";

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                    <Button onClick={openCart} style={{position: "relative", width: "5rem", height: "5rem"}}
                            variant="outline-dark">
                        CART
                        <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                             style={{
                                 color: "white",
                                 width: "2.5rem",
                                 height: "2.5rem",
                                 position: "absolute",
                                 bottom: "0",
                                 right: "0",
                                 transform: "translate(25%, 25%)"
                             }}>
                            {cartQuantity}
                        </div>
                    </Button>)}
            </Container>
        </NavbarBs>
    )
}