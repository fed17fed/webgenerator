import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../image"
import "./slider_main.css"

const SliderMain = ({ siteTitle }) => (
  <header
    style={{      
      marginBottom: `1.45rem`,
    }}
  >
    <Container>
      <Row>
        <Col xs={2}>
          <h1 style={{ margin: 0 }} className="had-logo">
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
        <NavDropdown title="Сайты" id="nav-sitеs">
        <NavDropdown.Item eventKey="1.1" href="/elektropromremont">Сайт визитка</NavDropdown.Item>
        <NavDropdown.Item eventKey="1.2" href="/ooo-dneprotraktor">Landing page</NavDropdown.Item>
        <NavDropdown.Item eventKey="1.3" href="/dominant-wooden-houses">Корпоративный сайт</NavDropdown.Item>        
        <NavDropdown.Item eventKey="1.4" href="/korporacziya-ukrtehprom-2">Интернет магазин</NavDropdown.Item>
      </NavDropdown> 
      <NavDropdown title="Услуги" id="nav-servises">
        <NavDropdown.Item eventKey="2.1" href="/udalenie-i-obrezka-derevev">Индивидуальный дизайн</NavDropdown.Item>
        <NavDropdown.Item eventKey="2.2" href="/vtg-tuning-2">Тех. поддержка</NavDropdown.Item>
        <NavDropdown.Item eventKey="2.3" href="/turoperator-rostra">Кооперайтинг</NavDropdown.Item>                
      </NavDropdown>   
      <Nav.Item>
        <Nav.Link href="/sprintech">
          Портфолио
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" href="/avto-iz-evropy-2" title="Item">
          О нас
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" href="/svativske" >
          Контакты
        </Nav.Link>
      </Nav.Item>
      
    </Nav>
        </Col>
        <Col xs="auto"><div className="had-language">RU</div></Col>
        <Col xs="auto"><div className="had-tel">‎+38 (068) 176-96-45</div></Col>
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

export default SliderMain
