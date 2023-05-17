// IMPORTS
import AboutSection from '../../components/AboutSection/AboutSection'
import styles from '../styles/About.module.css'
import { goalSection, aboutMeSection } from '@/utils'
import Head from 'next/head'


// ABOUT page layout
const About: React.FC<{}> = () => {
    return <>
        <Head>
            <title>FITNESS INSIGHTS | About</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.body}>
            <div className={styles.main_container}>
                <AboutSection {...goalSection} />
                <AboutSection {...aboutMeSection} />
            </div>
        </div>
    </>
}

export default About