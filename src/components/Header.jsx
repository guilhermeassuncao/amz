import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <nav className={styles.header}>
            <ul>
                <li>
                    <NavLink to="/" end>
                        Produtos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="contato">Contato</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
