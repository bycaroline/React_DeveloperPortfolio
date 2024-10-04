import styles from '../css/styles.module.css';
import Footer from '../components/Footer';
import PagesHeader from '../components/PagesHeader';
import PhotoPortfolioImg from '../assets/PhotoPortfolioImg.png';

const ProjectPagePhotoPortfolio = () => {
    return (
        <div className={styles.wrapper}>
            <PagesHeader />
            <div className={styles.ProjectPageTopSection}>
                <div className={styles.ProjectPageWrapperTopSection}>
                    <h3>photo portfolio</h3>
                    <p>This responsive portfolio website is built with React JS to showcase my work in photography.</p>
                    <h4>technologies</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React</li>
                    </ul>
                </div>
                <div className={styles.ProjectPageWrapperTopSectionImg}>
                    <img src={PhotoPortfolioImg} />
                </div>
            </div>
            <div className={styles.ProjectPageWrapperBottomSection}>
                <h4>features</h4>
                <ul style={{ listStyle: 'none' }}>
                    <li><span><strong>Swiper Component</strong>: To showcase my photos a swiper component is set up.</span></li>
                    <li><span><strong>Responsive Design</strong>: The webpage adapts to the screen size.</span></li>
                    <li><span><strong>Email</strong>: Emails can be sent through a form with EmailJS.</span></li>
                </ul>
                <h4>demo</h4>
                <p><a href='https://photography-portfolio-psi-five.vercel.app/' target="_blank" rel="noopener noreferrer">https://photography-portfolio-psi-five.vercel.app/</a></p>
                <h4>code</h4>
                <p><a href='https://github.com/bycaroline/PhotographyPortfolioPublic' target="_blank" rel="noopener noreferrer">github.com/bycaroline/PhotographyPortfolioPublic</a></p>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectPagePhotoPortfolio;
