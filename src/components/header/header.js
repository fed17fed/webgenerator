import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import "./header.css"

const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
const Header = ({ siteTitle }) => (
  <header
    style={{      
      marginBottom: `1.45rem`,
    }}
  >
    <Container>
      <Row>
        <Col xs={2}>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `#555`,
                textDecoration: `none`,
              }}
            >
              <Image />
            </Link>
          </h1>
        </Col>
        <Col xs={7}>
        <Nav variant="pills" activeKey="1" onSelect={handleSelect} className="nav-top">
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          NavLink 1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          NavLink 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
        </Col>
        <Col xs="auto">RU</Col>
        <Col xs="auto">‎+38 (068) 176-96-45</Col>
      </Row>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
