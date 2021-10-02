import React , { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsapi';
import { useGetCryptosQuery } from '../services/cryptoapi';

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage = 'https://img.etimg.com/thumb/msid-81019907,width-650,imgsize-588285,,resizemode-4,quality-100/crypto.jpg'

const News = ({ simplified }) => {
     const [newsCategory, setnewsCategory] = useState('Cryptocurrency')
     const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 9 : 18})
     const { data } = useGetCryptosQuery(100);

     if( !cryptoNews?.value ) return 'loading...'

     return(
          <Row gutter={[ 24,24 ]}>
               {!simplified && (
                    <Col span={24}>
                         <Select 
                              showSearch
                              className="select-news"
                              placeholder="Select a Crypto"
                              optionFilterProp="children"
                              onChange={(value) => setnewsCategory(value)}
                              filterOptions={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                         >
                              <Option value="Cryptocurrency">Cryptocurrency</Option>
                              {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
                         </Select>
                    </Col>
               )}
               {cryptoNews.value.map((news, i) => (
               <Col xs={24} sm={12} lg={8} key={i}>
                 <Card hoverable className="news-card">
                    <a href={news.url} target="blank" rel="noreferrer">
                         <div className="news-image-container">
                              <Title className="news-title" level={5}>{news.name}</Title>
                              <img style={{ maxWidth: '150px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
                         </div>
                         <p>
                              {news.description > 100
                                  ? `${news.description.substring(0,100)}...`
                                  : news.description
                              }    
                         </p>
                         <div className="provider-container">
                              <div>
                                   <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                                   <Text className="provider-name">{news.provider[0]?.name}</Text>
                              </div>
                              <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                         </div>
                     </a>
                 </Card>
               </Col>
               ))}
          </Row>
     )
}
export default News
