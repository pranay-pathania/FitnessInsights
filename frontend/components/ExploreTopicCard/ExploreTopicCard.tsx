import Link from "next/link"
import styles from './ExploreTopicCard.module.css'


interface ExploreTopicCardPropsInterface {
    topic_id: string,
    heading: string
}

// returns a simple card element for each component of the topic list array
const ExploreTopicCard: React.FC<ExploreTopicCardPropsInterface> = ({ topic_id, heading }: ExploreTopicCardPropsInterface) => {

    return <div className={styles.link_body}>
        <Link href={`/explore/${topic_id}`} className={styles.link}>
            <h1 className={styles.heading}>{heading}</h1>
        </Link>
    </div>
}

export default ExploreTopicCard