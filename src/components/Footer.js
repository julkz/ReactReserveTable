import logo from '../Logo.svg';

export default function Footer() {
    return (
        <footer>
            <section>
                <p>Little Lemon Restaurant</p>
            </section>
            <section>
                <img src={logo}  alt=""/>
            </section>
        </footer>
    );
  };