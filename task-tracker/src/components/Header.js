import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('clicked');
    }
    
    return (
        <header className="header">  
            <h1>{title}</h1>
            <Button onClick={onClick} color="grey" text="Add"/>
        </header>
    );
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

/* Alternative styling option
const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}
*/

export default Header;
