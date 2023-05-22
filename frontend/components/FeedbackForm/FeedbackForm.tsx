import styles from './FeedbackForm.module.css'
import { Countries } from '@/utils'

const FeedbackForm: React.FC<{}> = () => {
    return <div className={styles.feedback}>
        <div className={styles.form}>

            <input type="text" name="username" id="username" placeholder='Name' className={styles.row_one} />

            <input type="number" name="age" id="age" placeholder='Age' className={styles.row_two_part_one} />


            <select name="country" id="country" className={styles.country_list}>
                {Countries.map(country => <option key={country} value={country}>{country}</option>)}
            </select>


            <input type="email" name="email" id="email" placeholder='Email ID' className={styles.row_three} />

            <textarea name="feedback" id="feedback" cols={30} rows={10} placeholder='Write feedback here (350 chars)' maxLength={350} className={styles.row_four} />
        </div>
        <div className={styles.buttons_container}>
            <button className={styles.button_submit}>Submit</button>
            <button className={styles.button_reset}>Reset</button>
        </div>
    </div>
}

export default FeedbackForm