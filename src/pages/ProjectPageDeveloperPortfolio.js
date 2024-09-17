import styles from '../css/styles.module.css';
import Footer from '../components/Footer';
import PagesHeader from '../components/PagesHeader';
import DeveloperPortfolio from '../assets/DeveloperPortfolio.jpg';

const ProjectPageDeveloperPortfolio = () => {
    return (
        <div className={styles.wrapper}>
            <PagesHeader />
            <div className={styles.ProjectPageTopSection}>
                <div className={styles.ProjectPageWrapperTopSection}>
                    <h3>developer portfolio</h3>
                    <p>This project showcases my work as a developer. Projects, skills and texts are retreived from this Java backend server. Authentication will be set up for Admin to be able to do crud operations on the projects directly in the user interface.</p>
                    <h4>technologies</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li><strong>Backend:</strong> Java</li>
                        <li><strong>Frontend:</strong> Javascript, React, HTML, CSS</li>
                        <li><strong>Database:</strong> MongoDB</li>
                    </ul>
                </div>
                <div className={styles.ProjectPageWrapperTopSectionImg}>
                    <img src={DeveloperPortfolio} />
                </div>
            </div>
            <div className={styles.ProjectPageWrapperBottomSection}>
                <h4>features</h4>
                <ul style={{ listStyle: 'none' }}>
                    <li><span><strong>CRUD for Admin</strong>: Possible to create, read, update and delete projects</span></li>
                    <li><span><strong>Authentication</strong>: JWT will be set up for logging in as admin</span></li>
                    <li><span><strong>Listing Projects</strong>: A list of all the projects open to everyone</span></li>
                </ul>
                <h4>code</h4>
                <p><a href='https://github.com/bycaroline/DeveloperPortfolio_Server' target="_blank" rel="noopener noreferrer">github.com/bycaroline/DeveloperPortfolio_Server</a></p>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectPageDeveloperPortfolio;