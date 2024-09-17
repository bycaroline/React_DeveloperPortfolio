import styles from '../css/styles.module.css';
import Footer from '../components/Footer';
import PagesHeader from '../components/PagesHeader';

//image import
import GarnGalore from '../assets/GarnGalore.jpg'

//Showing each project page
const ProjectPageGarnGalore = () => {
    return (
        <div className={styles.wrapper}>
            <PagesHeader />
            <div className={styles.ProjectPageTopSection}>
                <div className={styles.ProjectPageWrapperTopSection}>
                    <h3>garn galore</h3>
                    <p>Java webshop team project at Campus Mölndal. A web application that manages an e-commerce platform selling yarn, where users can explore products, add them to a shopping cart, and complete purchases.</p>
                    <h4>technologies</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li><span><strong>Backend</strong>: Java with Spring Boot</span></li>
                        <li><span><strong>Database</strong>: MongoDB</span></li>
                        <li><span><strong>Frontend</strong>: Thymeleaf, HTML, CSS, JavaScript</span></li>
                    </ul>
                </div>
                <div className={styles.ProjectPageWrapperTopSectionImg}>
                    <img src={GarnGalore} />
                </div>
            </div>
            <div className={styles.ProjectPageWrapperBottomSection}>
                <h4>features</h4>
                <ul style={{ listStyle: 'none' }}>
                    <li>
                        <span><strong>Product Viewing</strong>: Users can browse products based on various categories.</span>
                    </li>
                    <li>
                        <span><strong>Search Functionality</strong>: Ability to search for products based on name, description, color, or category.</span>
                    </li>
                    <li>
                        <span><strong>Shopping Cart</strong>: Users can add products to a shopping cart and view their current cart based on their IP address.</span>
                    </li>
                    <li>
                        <span><strong>Ordering</strong>: Users can complete orders for the products in their shopping cart.</span>
                    </li>
                    <li>
                        <span><strong>User Registration and Login</strong>: Users have the ability to register and log in for a more personalized experience.</span>
                    </li>
                </ul>
                <h4>code</h4>
                <p><a href='https://github.com/bycaroline/TeamProject_Webshop' target="_blank" rel="noopener noreferrer">github.com/bycaroline/TeamProject_Webshop</a></p>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectPageGarnGalore;