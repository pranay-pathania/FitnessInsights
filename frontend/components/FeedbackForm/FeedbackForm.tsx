import { useState, ChangeEvent } from 'react'
import styles from './FeedbackForm.module.css'
import { Countries, FeedbackFormDataInterface, feedbackFormInitialState } from '@/utils'

const FeedbackForm: React.FC<{}> = () => {

    // form state
    const [formData, setFormData] = useState<FeedbackFormDataInterface>(feedbackFormInitialState)

    // handle change in form values
    const changeFormValue = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    // reset form values to default
    const resetForm = (): void => {
        setFormData(feedbackFormInitialState)
    }

    // submit form 
    const submitForm = (): void => {
        // more functionality once i setup the database
        console.log(formData)

        // after submission
        setFormData(feedbackFormInitialState)        
        alert("Your feedback has been submitted")
    }

    return <div className={styles.feedback}>
        {/* form body */}
        <div className={styles.form}>

            <input type="text" name="username" id="username" placeholder='Name' className={styles.row_one} autoComplete="username" value={formData.username} onChange={changeFormValue}/>

            <input type="number" name="age" id="age" placeholder='Age' className={styles.row_two_part_one} autoComplete="age" value={formData.age} onChange={changeFormValue}/>


            <select name="country" id="country" className={styles.country_list} value={formData.country} onChange={changeFormValue}>
                {Countries.map(country => <option key={country} value={country}>{country}</option>)}
            </select>


            <input type="email" name="email" id="email" placeholder='Email ID' className={styles.row_three} autoComplete="email" value={formData.email} onChange={changeFormValue}/>

            <textarea name="feedback" id="feedback" cols={30} rows={10} placeholder='Write feedback here (350 chars)' maxLength={350} className={styles.row_four} value={formData.feedback} onChange={changeFormValue}/>
        </div>

        {/* buttons */}
        <div className={styles.buttons_container}>
            <button className={styles.button_submit} onClick={submitForm}>Submit</button>
            <button className={styles.button_reset} onClick={resetForm}>Reset</button>
        </div>
    </div>
}

export default FeedbackForm