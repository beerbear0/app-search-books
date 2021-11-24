import './Footer.css';

function Footer () {
    return (
        <section className='footer'>
            <p className='footer__data'>{new Date().getFullYear()}</p>
            <p className='footer__author'>Chernov Nikita</p>
        </section>
    )
}
export default Footer;