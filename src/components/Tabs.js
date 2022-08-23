import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { CopyBlock, dracula, monokaiSublime } from "react-code-blocks";

function Tabs() {
  const go = `package main
  import "fmt"
  func main() {
    fmt.Printf("Hello World\n")
  }
  `;
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="c">C</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="c++">C++</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="java">Java</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="javascript">JavaScript</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="python">Python</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="c">
              <CopyBlock
                language="c"
                text="C"
                showLineNumbers={true}
                theme={dracula}
                wrapLines={true}
                codeBlock
              />
            </Tab.Pane>
            <Tab.Pane eventKey="c++">
              <CopyBlock
                language="cpp"
                text={go}
                showLineNumbers={true}
                theme={dracula}
                wrapLines={true}
                codeBlock
              />
            </Tab.Pane>
            <Tab.Pane eventKey="java">
              <CopyBlock
                language="java"
                text="Java"
                showLineNumbers={true}
                theme={dracula}
                wrapLines={true}
                codeBlock
              />
            </Tab.Pane>
            <Tab.Pane eventKey="javascript">
              <CopyBlock
                language="tsx"
                text={`
                import React, { useState } from 'react'
                import { Rating } from 'react-simple-star-rating'
                
                function App() {
                  const [ratingValue, setRatingValue] = useState(0)
                  
                  const handleRating = (rate: number) => {
                    setRatingValue(rate)
                  }
                  return (
                    <Rating
                      {/* props */}
                    />
                  )
                `}
                showLineNumbers={false}
                theme={monokaiSublime}
                wrapLines={true}
                codeBlock
              />
            </Tab.Pane>
            <Tab.Pane eventKey="python">
            <CopyBlock
              text="print('GeeksforGeeks')"
              language='python'
              showLineNumbers='true'
              wrapLines
              theme={dracula}
              codeBlock
            />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Tabs;
