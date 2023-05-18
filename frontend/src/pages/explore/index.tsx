import ExploreCard from "../../../components/ExploreCard/ExploreCard"
import { fatLossExploreCard, miscellaneousExploreCard, muscleBuildingExploreCard } from "@/utils"

import ExploreMuscBg from '../../../public/Images/Explore-musc-bg.jpg'
import ExploreFatBg from '../../../public/Images/Explore-fat-bg.jpg'
import ExploreMiscBg from '../../../public/Images/Explore-misc-bg.jpg'

import styles from '../../styles/Explore.module.css'



const Explore: React.FC<{}> = () => {
  return (
    <div className={styles.explore_card_container}>
      <ExploreCard {...muscleBuildingExploreCard} img_path={ExploreMuscBg}/>
      <ExploreCard {...fatLossExploreCard} img_path={ExploreFatBg}/>
      <ExploreCard {...miscellaneousExploreCard} img_path={ExploreMiscBg}/>
    </div>
  )
}

export default Explore