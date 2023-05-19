// IMPORT 

//imports from next/
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

// importing image sizing from utils
import { img_sizes } from '@/utils'

// stylesheet
import styles from './ExploreCard.module.css'


// Props Interface
interface explorePropsInterface {
    url: string,
    paragraph: string,
    img_path: StaticImageData
}


// Component
const ExploreCard: React.FC<explorePropsInterface> = (props: explorePropsInterface) => {

    // the entire card is supposed to act like the link
    return <Link href={props.url} className={styles.hyperlink}>

        {/* actual card body */}
        <div className={styles.card_body}>

            {/* <Image /> wrapped in a div for responsive styling. refer stylesheet */}
            <div className={styles.image_container}>
                <Image src={props.img_path} fill={true} alt='img' className={styles.image} priority={true} sizes={img_sizes}/>
            </div>

            {/* originally was a small paragraph, but I decided against it. now it is just the title for the card */}
            <p className={styles.card_title}>{props.paragraph}</p>

        </div>

    </Link>
}

export default ExploreCard