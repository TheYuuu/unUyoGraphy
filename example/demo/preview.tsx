import * as React from "react";
import { Row, Col, Card } from 'antd';
const { Meta } = Card;

import chartsJson from '../charts.json';

console.log(chartsJson);

export default function preview() {
  return (
    <section className="preview-container">
      <Row gutter={24}>
        {chartsJson["2D"].map(v => (
          <Col span={8} key={v.name}>
            <a href={'/#/components/' + v.key}>
              <Card
                hoverable
                cover={<img className="show-img" alt="example" src={require('../images/' + v.key + '.png')} />}
              >
                <Meta title={v.key[0].toUpperCase() + v.key.slice(1)} description={v.name} />
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </section>
  );
}