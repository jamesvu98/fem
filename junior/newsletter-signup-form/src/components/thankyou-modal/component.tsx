import styles from './style.module.css'
import successIcon from '@/assets/images/icon-success.svg'

export function Thanks({ email }: { email: string }) {
  return (
    <div className={styles.container}>
      <img src={successIcon} width={35} />
      <h1>Thanks for subscribing!</h1>
      <p>A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription.</p>
      <button>Dismiss message</button>
    </div>
  )
}