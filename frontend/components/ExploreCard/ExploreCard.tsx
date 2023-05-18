import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import styles from './ExploreCard.module.css'

interface explorePropsInterface {
    url: string,
    paragraph: string,
    img_path: StaticImageData
}




const ExploreCard: React.FC<explorePropsInterface> = (props: explorePropsInterface) => {




    return <Link href={props.url} className={styles.hyperlink}>
        <div className={styles.card_body}>
            <div className={styles.image_container}>
                <Image src={props.img_path} fill={true} alt='img' className={styles.image} priority={true}/>
            </div>
            <p className={styles.card_title}>{props.paragraph}</p>
        </div>


    </Link>
}

export default ExploreCard