import React from 'react';
import { Icon, Image, Item } from 'semantic-ui-react';

const Product = (props) => {
    return (
        <Item.Group>
            <Item>
            <Item.Image size="tiny" src={props.imageurl} />
            
            <Item.Content>
                <Item.Header as='a'>
                    <Icon name="angle up"></Icon><a>{props.vote}</a>
                </Item.Header>
                <Item.Description>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <span>Submitted by:</span>
                    <Image avatar src={props.avatarurl}  wrapped />            
                </Item.Description>
            </Item.Content>
            </Item>  
        </Item.Group>
    );
}

export default Product;