import styles from '../css/styles.module.css';
import Footer from '../components/Footer';
import PagesHeader from '../components/PagesHeader';
import SurfGameImg from '../assets/SurfGameImg.png';

const ProjectPageSurfGame = () => {
    return (
        <div className={styles.wrapper}>
            <PagesHeader />
            <div className={styles.ProjectPageTopSection}>
                <div className={styles.ProjectPageWrapperTopSection}>
                    <h3>surf game</h3>
                    <p>The game is built with javascript and CSS and illustrated in watercolor. It currently only runs on laptops. This surf game was my first project when I started programming at Khan Academy spring 2022.</p>
                    <h4>technologies</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
                    </ul>
                </div>
                <div className={styles.ProjectPageWrapperTopSectionImg}>
                    <img src={SurfGameImg} />
                </div>
            </div>
            <div className={styles.ProjectPageWrapperBottomSection}>
                <h4>features</h4>
                <ul style={{ listStyle: 'none' }}>
                    <li><span><strong>Move the surfer</strong>: Users can move the surfer in the screen using the keyboard arrows.</span></li>
                    <li><span><strong>Random waves</strong>: Waves occur randomly.</span></li>
                    <li><span><strong>Obstacles</strong>: Other surfers in the lineup makes it more difficult to catch waves.</span></li>
                </ul>
                <h4>demo</h4>
                <p><a href='https://surf-game.vercel.app/' target="_blank" rel="noopener noreferrer">https://surf-game.vercel.app/</a></p>
                <h4>code</h4>
                <p><a href='https://github.com/bycaroline/SurfGamePublic' target="_blank" rel="noopener noreferrer">github.com/bycaroline/SurfGamePublic</a></p>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectPageSurfGame;
