import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { CopyBlock, dracula, monokaiSublime } from "react-code-blocks";

export interface AlgorithmProps {
  title: string
  language: string
  codeBlock: string
}

export interface TabsProps {
  tabsItems: AlgorithmProps[]
}

const Tabs: React.FC<TabsProps> = ({tabsItems}: TabsProps) => {
  console.log(typeof(tabsItems))
  console.log(Array.isArray(tabsItems));

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            {tabsItems.map((item: AlgorithmProps) => (
              <Nav.Item>
                <Nav.Link eventKey={item.title.toLowerCase()}>{item.language}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            {tabsItems.map((item: AlgorithmProps) => (
              <Tab.Pane eventKey={item.title.toLowerCase()}>
                <CopyBlock
                  language={item.language}
                  text={item.codeBlock}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Tabs
