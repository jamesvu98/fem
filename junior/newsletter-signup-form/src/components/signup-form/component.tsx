import styles from "./style.module.css"

export function SignupForm({ initial, email, onChange, onSubmit }: {
  initial: boolean,
  email: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <form onSubmit={onSubmit}>
          <label htmlFor="email"><span>Email Address</span>{!initial && <span style={{ color: "var(--tomato)" }}>Valid email required</span>}</label>
          <input type="text" id="email" onChange={onChange} placeholder="email@company.com" className={`${!initial && styles.error}`} value={email} />
          <input type="submit" value="Subscribe to monthly newsletter" />
        </form>
      </div>
      <div className={styles.background}></div>
    </div >
  )
}