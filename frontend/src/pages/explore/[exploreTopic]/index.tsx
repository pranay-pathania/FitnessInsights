// imports 
import { ExploreTopicsList, ExploreTopicListItemInterface } from "@/explore_topics"
import { PathTextInterface, PathTextList } from "@/utils"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"

// import component
import ExploreTopicCard from "../../../../components/ExploreTopicCard/ExploreTopicCard"

// styles
import styles from '../../../styles/ExploreTopics.module.css'


// page 
const ExploreTopicPage = () => {

    // extracting the topic name from the route
    const Router = useRouter()
    const explorePath: string | string[] | undefined = Router.query.exploreTopic

    // list of topics based on query  
    const [pathTopics, setPathTopics] = useState<ExploreTopicListItemInterface[]>()

    // greeting text based on query
    const [pathText, setPathText] = useState<PathTextInterface>({ heading: '', sub_text: '' })


    // populate pathTopics and pathText
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

    // execute loadTopicNames on initial reload and any subsequent changes, which are none. 
    // adding an empty dependancy array makes it so the text doesnt load on subsequent reloads, so yes, its staying this way
    useEffect(() => {
        loadTopicNames()
        // console.log(`loaded names`)    // for development testing only
    })


    // return 
    return <div className={styles.body}>

        {/* greet text */}
        <div className={styles.text_container}>
            <h1 className={styles.h1}>{pathText.heading}</h1>
            <h3 className={styles.h3}>{pathText.sub_text}</h3>
        </div>

        {/* list of topics */}
        <div className={styles.topic_container}>
            {pathTopics?.map(listItem => {
                return <ExploreTopicCard topic_id={listItem.topic_id} heading={listItem.heading} key={listItem.topic_id} />
            })}
        </div>
    </div>
}


export default ExploreTopicPage