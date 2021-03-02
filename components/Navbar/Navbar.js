
import {navLinks} from '../../helper/navigation';
import {ListItem} from '../index';

const Navbar = () => {

    return (
        <nav>
            <ul>
                {navLinks.map(link => <ListItem key={link.id} {...link} />)}
            </ul>
        </nav>
    )
}

export default Navbar;