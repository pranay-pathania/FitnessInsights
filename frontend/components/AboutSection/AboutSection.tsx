// IMPORTS 
import styles from './AboutSection.module.css'
import { AboutInterface } from '@/utils'


// SECTION component
const AboutSection: React.FC<AboutInterface> = (props: AboutInterface) => {
    return <section className='section'>
        <h1 className={styles.section_heading}>{props.title}</h1>
        <p className={styles.section_para}>{props.paragraph}</p>
        <style jsx>{`
            .section {
                width: ${props.width_percent}%;
                background: #000000;
                border-radius: 5px;
                color: #ffffff;
                padding: 1em;
                opacity: 0.7;
            }
            .section:hover{
                opacity: 1.0;
                transition: opacity 0.2s ease-in-out;
            }
            @media screen and (max-width: 1110px) {
                .section {
                    width: 90%;
                    margin: 1em;
                }
            }
        `}</style>
    </section>
}

export default AboutSection