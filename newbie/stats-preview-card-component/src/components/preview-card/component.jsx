import imageMobile from '../../assets/images/image-header-mobile.jpg';
import imageDesktop from '../../assets/images/image-header-desktop.jpg';
import styles from './style.module.css';

export const PreviewCard = () => {
    return (
        <div className={styles.previewCard}>
            {/* <picture>
                <source media='(min-width: 376px)'
                srcSet={imageDesktop}/>
                <source media='(max-width: 375px)'
                srcSet={imageMobile}/>
                <img src={imageMobile}/>
            </picture> */}
            <div className={styles.imgContainer}>
                <img src={imageMobile}
                srcSet={`${imageMobile} 375w,
                ${imageDesktop} 990w`}
                sizes='(max-width: 990px) 375px,
                (min-width: 990px) 990px, 990px'/>
            </div>
            {/* <div className={styles.Img} style={{ backgroundImage: `url(${imageMobile})` }}></div> */}
            <div className={styles.content}>
                <p className={styles.heading}>
                    Get <span>insights</span> that help your business grow.
                </p>
                <p className={styles.body}>
                    Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
                </p>
                <div className={styles.statsContainer}>
                    <div className={styles.stat}>
                        <p>10k+</p>
                        <p>COMPANIES</p>
                    </div>
                    <div className={styles.stat}>
                        <p>314</p>
                        <p>TEMPLATES</p>
                    </div>
                    <div className={styles.stat}>
                        <p>12M+</p>
                        <p>QUERIES</p>
                    </div>
                </div>
            </div>
        </div>
    )
}