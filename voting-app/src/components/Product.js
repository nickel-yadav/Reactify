import React from 'react';
import { Icon, Image, Item } from 'semantic-ui-react';

const Product = ({ imageurl, vote, title, description, avatarurl }) => {
        
    return (
        <Item.Group>
            <Item>
            <Item.Image size="tiny" src={imageurl} />
            
            <Item.Content>
                <Item.Header>
                    <Icon name="angle up" >
                    </Icon><a>{vote}</a>
                </Item.Header>
                <Item.Description>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span>Submitted by:</span>
                    <Image avatar src={avatarurl}  wrapped />            
                </Item.Description>
            </Item.Content>
            </Item>  
        </Item.Group>
    );
}

export default Product;