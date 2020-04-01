import React from 'react';

import Card from '../components/Card';

import pose1 from '../assets/images/pose1.jpg';
import pose2 from '../assets/images/pose2.jpg';
import pose3 from '../assets/images/pose3.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Earth',
                    subTitle: 'Embrace love',
                    imgSrc: pose1,
                    selected: false
                },
                {
                    id: 1,
                    title: 'Water',
                    subTitle: 'Flow with it',
                    imgSrc: pose2,
                    selected: false
                },
                {
                    id: 2,
                    title: 'Soil',
                    subTitle: 'Love your roots',
                    imgSrc: pose3,
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;