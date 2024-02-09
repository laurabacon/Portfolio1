import React from 'react';

const styles = {
  footer: {
    backgroundColor: '#26272b',
    padding: '45px 0 20px',
    fontSize: '15px',
    lineHeight: '24px',
    color: '#737373',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
  },
  listItem: {
    display: 'inline-block',
    marginRight: '10px',
  },
  link: {
    width: '40px',
    height: '40px',
    marginLeft: '6px',
    marginRight: '0',
    borderRadius: '100%',
    backgroundColor: '#33353d',
    color: '#717171',
    textDecoration: 'none',
  },
  linkHover: {
    backgroundColor: '#f7f8f6',
  },
};

function Footer() {
    const handleMouseEnter = (event) => {
        event.target.style.backgroundColor = '#f7f8f6';
    };

    const handleMouseLeave = (event) => {
        event.target.style.backgroundColor = '#33353d'; 
    };

  return (
    <footer style={styles.footer}>
      <ul className="site-footer" style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
      <li style={styles.listItem}>
          <a href="https://www.linkedin.com/in/laura-brown-93564b29b" style={styles.link} 
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i className="footer linkedin"></i>
            LinkedIn
          </a>
        </li>
        <li style={styles.listItem}>
          <a href="mailto:lauraebkb@gmail.com" style={styles.link} 
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i className="footer email"></i>
          Email
          </a>
        </li>
        <li style={styles.listItem}>
            <a href="https://github.com/laurabacon" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><i className="footer github"></i>Github</a></li>
        <li style={styles.listItem}>
            <a href="https://stackoverflow.com/users/23370908/laura-brown" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><i className="footer stack"></i>Stack Overflow</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
