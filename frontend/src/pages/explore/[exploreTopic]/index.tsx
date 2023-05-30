import { ExploreTopicsList, ExploreTopicListItemInterface } from "@/explore_topics"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ExploreTopicCard from "../../../../components/ExploreTopicCard/ExploreTopicCard"

const ExploreTopicPage = () => {

    const Router = useRouter()
    const explorePath: string | string[] | undefined = Router.query.exploreTopic

    const [pathTopics, setPathTopics] = useState<ExploreTopicListItemInterface[]>()

    const loadTopicNames = (): void => {
        if (explorePath === 'muscle-building') setPathTopics(ExploreTopicsList.muscleBuilding)
        else if (explorePath === 'fat-loss') setPathTopics(ExploreTopicsList.fatLoss)
        else if (explorePath === 'miscellaneous') setPathTopics(ExploreTopicsList.miscellaneous)
    }

    useEffect(() => {
        loadTopicNames()
    }, [])

    return <div>
        {pathTopics?.map(listItem => {
            return <ExploreTopicCard topic_id={listItem.topic_id} heading={listItem.heading} key={listItem.topic_id}/>
        })}
    </div>
}

export default ExploreTopicPage