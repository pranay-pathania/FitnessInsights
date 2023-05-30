import { ExploreTopicsList, ExploreTopicListItemInterface } from "@/explore_topics"
import { PathTextInterface, PathTextList } from "@/utils"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ExploreTopicCard from "../../../../components/ExploreTopicCard/ExploreTopicCard"
import styles from '../../../styles/ExploreTopics.module.css'

const ExploreTopicPage = () => {

    const Router = useRouter()
    const explorePath: string | string[] | undefined = Router.query.exploreTopic

    const [pathTopics, setPathTopics] = useState<ExploreTopicListItemInterface[]>()
    const [pathText, setPathText] = useState<PathTextInterface>({ heading: '', sub_text: '' })

    const loadTopicNames = (): void => {
        if (explorePath === 'muscle-building') {
            setPathTopics(ExploreTopicsList.muscleBuilding)
            setPathText(PathTextList.muscle_building)
        } else if (explorePath === 'fat-loss') {
            setPathTopics(ExploreTopicsList.fatLoss)
            setPathText(PathTextList.fat_loss)
        } else if (explorePath === 'miscellaneous') {
            setPathTopics(ExploreTopicsList.miscellaneous)
            setPathText(PathTextList.miscellaneous)
        }
    }

    useEffect(() => {
        loadTopicNames()
        console.log(`loaded names`)
    })

    return <div className={styles.body}>
        <div className={styles.text_container}>
            <h1 className={styles.h1}>{pathText.heading}</h1>
            <h3 className={styles.h3}>{pathText.sub_text}</h3>
        </div>

        <div className={styles.topic_container}>
            {pathTopics?.map(listItem => {
                return <ExploreTopicCard topic_id={listItem.topic_id} heading={listItem.heading} key={listItem.topic_id} />
            })}
        </div>
    </div>
}

export default ExploreTopicPage