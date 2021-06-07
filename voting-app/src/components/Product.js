import React from 'react';
import { Icon, Image, Item } from 'semantic-ui-react';

const Product = (props) => {
    return (
        <Item.Group>
            <Item>
            <Item.Image size="small" src="https://images.unsplash.com/photo-1622050644890-f4a3f807c2c6?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
            
            <Item.Content>
                <Item.Header as='a'>
                <Icon name="angle up"></Icon><a>{props.vote}</a></Item.Header>
                <Item.Description>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <span>Submitted by:</span>
                    <Image avatar src="https://image.freepik.com/free-vector/modern-people-avatar-casual-clothes-vector-cartoon-illustration-man-with-individual-face-hair-light-digital-frame-dark-blue-computer-picture-web-profile_107791-4246.jpg"  wrapped />            
                </Item.Description>
            </Item.Content>
            </Item>  
        </Item.Group>
    );
}

export default Product;