import React from 'react';
import { FloatButton } from 'antd';

function AppFooter(){
    return(
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    <i className="fas fa-bolt"></i>
                    <a href="https://www.google.com">Tech</a>
                </div>
                <ul className="socials">
                    <li><a href="https://www.facebook.com/profile.php?id=100010993906960&mibextid=ViGcVu" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/sairam-chundru" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://www.github.com/sairamchow5555" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                    <li><a href="https://www.twitter.com/sairamchow5555" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/sairam_chowdary5555" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                </ul>
                <div className="copyright">Copyright &copy; 2023 Tech</div>
                <FloatButton.BackTop>
                    <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
                </FloatButton.BackTop>
            </div>
        </div>
    )
}

export default AppFooter;
