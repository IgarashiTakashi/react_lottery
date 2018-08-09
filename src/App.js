import React, {Component} from 'react';
import { Container,Card,Image,Icon,Statistic,Button} from 'semantic-ui-react';


class App extends Component {
    render() {
        return (
            <Container>
                <br/>
                <div className="ui info message">
                    <i className="close icon"></i>
                    <div className="header">
                        区块链彩票model
                    </div>
                    <ul className="list">
                        <li>一切皆有可能</li>
                    </ul>
                </div>
                <Card.Group>
                    <Card>
                        <Image src='/images/logo.jpg' />
                        <Card.Content>
                            <Card.Header>六合彩</Card.Header>
                            <Card.Meta>
                                <span>管理员地址:</span>
                            </Card.Meta>
                            <Card.Description>每周三晚上8点准时开奖</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 人参与
                            </a>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Statistic color='red'>
                                    <Statistic.Value>27ether</Statistic.Value>
                                    <Statistic.Label>奖池</Statistic.Label>
                                </Statistic>
                            </a>
                        </Card.Content>
                        <Button animated='fade'>
                            <Button.Content visible>投注产生希望</Button.Content>
                            <Button.Content hidden>购买放飞梦想</Button.Content>
                        </Button>
                        <Button basic color='yellow' style={{display:'none'}} content='开奖' />
                        <Button basic color='red' style={{display:'none'}} content='退钱' />
                    </Card>
                </Card.Group>
            </Container>)
    }
}

export default App;
