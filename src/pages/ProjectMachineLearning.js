import styles from '../css/styles.module.css';
import Footer from '../components/Footer';
import PagesHeader from '../components/PagesHeader';

//image import
import ML from '../assets/ML.jpg'

//Showing each project page
const ProjectPageMachineLearning = () => {
    return (
        <div className={styles.wrapper}>
            <PagesHeader />
            <div className={styles.ProjectPageTopSection}>
                <div className={styles.ProjectPageWrapperTopSection}>
                    <h3>exam project</h3>
                    <p>This project aims to explore how machine learning works while applying Python skills and integrating them with Java and React. The outcome is a service that predicts and estimates air quality in specific areas of Stockholm's inner city. Users enter a time of day and select a location within Stockholm via a browser, receiving an estimated air quality forecast for their chosen time and place.
                    </p>
                    <h4>features</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li><span><strong>Machine Learning</strong>: Prediction of air quality</span></li>
                        <li><span><strong>Flask API</strong></span></li>
                        <li><span><strong>Java-server</strong></span></li>
                        <li><span><strong>React-client</strong></span></li>
                    </ul>
                </div>
                <div className={styles.ProjectPageWrapperTopSectionImg}>
                    <img src={ML} />
                </div>
            </div>
            <div className={styles.ProjectPageWrapperBottomSection}>
                <h4>Project Architecture</h4>
                <p>The system workflow begins in the frontend, where user input triggers a request. This request is sent to a Java server, which then forwards it to a Flask API. The API leverages a pre-trained machine learning model stored in a .joblib file to process the input and generate a prediction. The response is routed back through the Java server to the frontend client, where users can view the estimated air quality. The machine learning model is developed using Python, with tools such as Jupyter Notebooks, Pandas, NumPy, and SciKit Learn.</p>
                <h4>Data</h4>
                <p>The data is gathered from Naturvårdsverket of particles called PM10, which have big impacts on health. The particles can consist of dust from construction, particles from tires, dust from roads and plant parts. </p>
                <h4>ML Process</h4>
                <h4>technologies and frameworks</h4>
                <ul style={{ listStyle: 'none' }}>
                    <li>
                        <span><strong>Programming Languages</strong>: Python, Java, Javascript</span>
                    </li>
                    <li>
                        <span><strong>IDEs</strong>: Jupyter Notebook, IntelliJ, VsCode</span>
                    </li>
                    <li>
                        <span><strong>Libraries</strong>: Pandas, NumPy, SciKit Learn, Joblib</span>
                    </li>
                    <li>
                        <span><strong>Frontend</strong>: React JS, HTML, CSS</span>
                    </li>
                </ul>
                <h4>process of machine learning</h4>
                <ul style={{ listStyle: 'none' }}>
                    <li>
                        <span><strong>Step 1</strong>: Gathering data, inspecting and cleaning it. Visualizing the data by plotting it.</span>
                    </li>
                    <li>
                        <span><strong>Step 2</strong>: Splitting data into input and output.
                        </span>
                    </li>
                    <li>
                        <span><strong>Step 3</strong>: Splitting the input and output data into training and test. </span>
                    </li>
                    <li>
                        <span><strong>Step 4</strong>: Testing different algorithms to train the model.</span>
                    </li>
                    <li>
                        <span><strong>Step 5</strong>: Evaluating which model that performs the best.
                        </span>
                    </li>
                    <li>
                        <span><strong>Step 6</strong>: Saving the model to a .joblib file.
                        </span>
                    </li>
                </ul>

                <h4>code</h4>
                <p><a href='https://github.com/bycaroline/ExamProject_MachineLearning' target="_blank" rel="noopener noreferrer">github.com/bycaroline/TeamProject_Webshop</a></p>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectPageMachineLearning;
