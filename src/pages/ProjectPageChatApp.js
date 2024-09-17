import styles from '../css/styles.module.css';
import Footer from '../components/Footer';
import PagesHeader from '../components/PagesHeader';
import iconChatApp from '../assets/iconChatApp.jpg';

const ProjectPageChatApp = () => {
    return (
        <div className={styles.wrapper}>
            <PagesHeader />
            <div className={styles.ProjectPageTopSection}>
                <div className={styles.ProjectPageWrapperTopSection}>
                    <h3>chat app in java with authentication</h3>
                    <p>A Java-based chat application with React frontend and Spring Boot backend. Implements JWT for user authentication. Created as a project at Campus Mölndal</p>
                    <h4>technologies</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li><strong>Backend:</strong> Java</li>
                        <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React</li>
                        <li><strong>Database:</strong> MongoDB</li>
                    </ul>
                </div>
                <div className={styles.ProjectPageWrapperTopSectionImg}>
                    <img src={iconChatApp} />
                </div>
            </div>
            <div className={styles.ProjectPageWrapperBottomSection}>
                <h4>features</h4>
                <ul style={{ listStyle: 'none' }}>
                    <li><span><strong>Authentication</strong>: JWT-secured login and registration.</span></li>
                    <li><span><strong>Real-time Messaging</strong>: Users can send and receive messages in real time.</span></li>
                    <li><span><strong>Database</strong>: MongoDB stores user and message data.</span></li>
                </ul>
                <h4>code</h4>
                <p><a href='https://github.com/bycaroline/ChatAppServer_WithAuthentication' target="_blank" rel="noopener noreferrer">github.com/bycaroline/ChatAppServer_WithAuthentication</a></p>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectPageChatApp;
