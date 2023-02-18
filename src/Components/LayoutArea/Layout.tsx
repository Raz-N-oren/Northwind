import Footer from './Footer/Footer';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import './Layout.css';

function Layout(): JSX.Element {
    return (
        <div className='Layout'>
            <header>
                <Header />
            </header>
            <aside>
                <Menu />
            </aside>
            <main>
                3
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout;