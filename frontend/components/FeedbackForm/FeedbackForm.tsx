import styles from './FeedbackForm.module.css'
import { Countries } from '@/utils'

const FeedbackForm: React.FC<{}> = () => {
    return <div className={styles.form}>

        <input type="text" name="username" id="username" placeholder='Name' className={styles.row_one}/>

        <div className={styles.row_two}>
            <input type="number" name="age" id="age" placeholder='Age' />
            <div className="country_select">
                <label htmlFor="country">Country: </label>
                <select name="country" id="country">
                    {Countries.map(country => <option value={country}>{country}</option>)}
                </select>
            </div>
        </div>

        <input type="email" name="email" id="email" placeholder='Email ID' className={styles.row_three}/>
        
        <textarea name="feedback" id="feedback" cols={30} rows={10} placeholder='Write feedback here' className={styles.row_four}/>
    </div>
}

export default FeedbackForm