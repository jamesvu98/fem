import style from './style.module.css'
import heroBackground from '../../assets/images/illustration-hero.svg'
import musicIcon from '../../assets/images/icon-music.svg'

export const OrderSummary = () => {
    return (
    <div className={style.card}>
        <div className={style.background} 
        style={{backgroundImage: `url(${heroBackground})` }}></div>
        <div className={style.content}>
            <h1>Order Summary</h1>
            <p className={style.description}>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <div className={style.price}>
                <img src={musicIcon}/>
                <p>
                    <span>Annual Plan</span>
                    <span>59.99</span>
                </p>
                <span>Change</span>
            </div>
            <button className={style.payment}>
                Proceed to Payment
            </button>
            <p>Cancel Order</p>
        </div>
    </div>
    )
}