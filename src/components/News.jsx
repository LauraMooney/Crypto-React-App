/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import { Card, Col, Row, Select, Typography } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'; // Importing the updated API
import Loader from './Loader';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews, isFetching, error } = useGetCryptoNewsQuery();
  console.log(cryptoNews, 'cryptoNews');

  if (isFetching) return <Loader />;
  if (error) return <div>Error loading the news</div>;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <h1>News</h1>
          <p>
            Keep up to date with your daily Crypto News. Click any of the items
            and it will take you to the article. Click the drop down and select
            a Crypto for the latest news.
          </p>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
          </Select>
        </Col>
      )}
      {cryptoNews?.articles?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
              </div>
              <p>
                {news.content.length > 100
                  ? `${news.content.substring(0, 100)}...`
                  : news.content}
              </p>
              <div className="provider-container">
                <Text>
                  {moment(news.datePublished).startOf('ss').fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
