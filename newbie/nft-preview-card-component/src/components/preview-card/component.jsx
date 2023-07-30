import styles from './style.module.css'
import equilibriumImg from '../../assets/images/image-equilibrium.jpg'
import ethIcon from '../../assets/images/icon-ethereum.svg'
import clockIcon from '../../assets/images/icon-clock.svg'
import avatarImg from '../../assets/images/image-avatar.png'
import viewIcon from '../../assets/images/icon-view.svg'

export const PreviewCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.equilibriumImg}>
                <img src={equilibriumImg}/>
                <div><img src={viewIcon}/></div>
            </div>
            <p className={styles.asset}>
                Equilibrium #3429
            </p>
            <p className={styles.description}>
                Our Equilibrium collection promotes balance and calm.
            </p>
            <div className={styles.details}>
                <span><img src={ethIcon}/>0.041 ETH</span>
                <span><img src={clockIcon}/>3 days left</span>
            </div>
            <hr />
            <div className={styles.author}><img src={avatarImg} style={{
                width: '35px',
                marginRight: '15px',
                border: '1px solid white',
                borderRadius: '20px'}}/><span>Creation of </span><span>Jules Wyvern</span></div>
        </div>
    )
}