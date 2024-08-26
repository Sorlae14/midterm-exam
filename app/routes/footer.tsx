import React from "react";
const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>© 2024 Your Company. All rights reserved.</p>
            <nav style={styles.nav}>
                <a href="#privacy" style={styles.link}>Privacy Policy</a> | 
                <a href="#terms" style={styles.link}>Teams of Service by Sorlae</a>
            </nav>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: 'white',
        padding: '1px 10px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
    text: {
        margin: 0,
        fontSize: '14px',
    },
    nav: {
        marginTop: '10px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        margin: '0 5px',
    },
};

export default Footer;