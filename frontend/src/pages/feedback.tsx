// IMPORTS 

// import components
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm'

// import from next/
import Head from 'next/head'

// stylesheet
import styles from '../styles/Feedback.module.css'


// page
const Feedback: React.FC<{}> = () => {
    return <>
        <Head>
            <title>FITNESS INSIGHTS | Feedback</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.body}>
            <div className={styles.headings}>
                <h1 className={styles.h1}>We're Listening</h1>
                <h3 className={styles.h3}>Any suggestions, and changes you wish to see? Write to us!</h3>
            </div>
            <FeedbackForm />
        </div>
    </>
}

export default Feedback