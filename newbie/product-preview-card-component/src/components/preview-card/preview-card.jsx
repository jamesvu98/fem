import styles from './preview-card.module.css';
import cartIcon from '../../assets/icon-cart.svg';

const Image = ({mobileImg, desktopImg}) => {
    return (
    <div className={styles["product-pic"]}>
        <picture>
            <source media='(max-width: 375px)'
            srcSet={mobileImg}/>
            <source media='(min-width: 376px)'
            srcSet={desktopImg}/>
            <img src={mobileImg} alt="Perfume pic" />
        </picture>
    </div>
    )
}

const Content = ({category, product, description, price, retailprice}) => {
    return (
        <div className={styles.content}>
            <p className={styles.category}>{category}</p>
            <p className={styles.product}>{product}</p>
            <p className={styles.description}>{description}</p>
            <p className={styles["price-section"]}><span className={styles.price}>{price}</span><span className={styles.retailprice}>{retailprice}</span></p>
            <div className={styles.cart}><img src={cartIcon}></img>Add to Cart</div>
        </div>
    )
}

export const PreviewCard = ({imageSet, content}) => {
    return (
        <div className={styles.card}>
            <Image mobileImg={imageSet.mobileImg} desktopImg={imageSet.desktopImg} />
            <Content category={content.category} product={content.product} description={content.description} price={content.price} retailprice={content.retailprice} />
        </div>
    )
}