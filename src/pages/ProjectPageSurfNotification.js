import styles from '../css/styles.module.css';
import Footer from '../components/Footer';
import PagesHeader from '../components/PagesHeader';
import SurfAppImg from '../assets/SurfAppImg.png';

const ProjectPageSurfNotification = () => {
    return (
        <div className={styles.wrapper}>
            <PagesHeader />
            <div className={styles.ProjectPageTopSection}>
                <div className={styles.ProjectPageWrapperTopSection}>
                    <h3>surf notification</h3>
                    <p>Weather api and mail sender for surf notifications. This surf app uses weather data from SMHI api (Swedish Meteorological and Hydrological Institute) and detects if good surf conditions might be expected at Knäbäckshusen in Sweden. If good conditions can be expected, every subscriber will receive a notification by email the day before.</p>
                    <h4>technologies</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li><strong>Backend:</strong> NodeJS, Express, Axios</li>
                        <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
                        <li><strong>Database:</strong> MongoDB</li>
                    </ul>
                </div>
                <div className={styles.ProjectPageWrapperTopSectionImg}>
                    <img src={SurfAppImg} />
                </div>
            </div>
            <div className={styles.ProjectPageWrapperBottomSection}>
                <h4>features</h4>
                <ul style={{ listStyle: 'none' }}>
                    <li><span><strong>API</strong>: SMHI weather api is called for wind conditions.</span></li>
                    <li><span><strong>Database</strong>: Users can subscribe/unsubscribe to the service.</span></li>
                    <li><span><strong>Email</strong>: Nodemail send email to the subscribers if the conditions are expected to be favorable.</span></li>
                </ul>
                <h4>demo</h4>
                <p>Slow loading due to free hosting.</p>
                <p><a href='https://surfapp.onrender.com/' target="_blank" rel="noopener noreferrer">surfapp.onrender.com/</a></p>
                <h4>code</h4>
                <p><a href='https://github.com/bycaroline/SurfAppPublic' target="_blank" rel="noopener noreferrer">github.com/bycaroline/SurfAppPublic</a></p>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectPageSurfNotification;
