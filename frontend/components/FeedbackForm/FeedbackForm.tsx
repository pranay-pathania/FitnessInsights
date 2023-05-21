import styles from './FeedbackForm.module.css'

const FeedbackForm:React.FC<{}> = () => {
  return <div className={styles.form}>
    <input type="text" name="username" id="username" placeholder='Name'/>
    <input type="number" name="age" id="age" placeholder='Age'/>
    <div className="country_select">
        <label htmlFor="country">Country: </label>
        <select name="country" id="country">
            {/* options go here */}
        </select>
    </div>
    <input type="email" name="email" id="email" placeholder='Email ID'/>
    <textarea name="feedback" id="feedback" cols={30} rows={10} placeholder='Write feedback here'/>
  </div>
}

export default FeedbackForm