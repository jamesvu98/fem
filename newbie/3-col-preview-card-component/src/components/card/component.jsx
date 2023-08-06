import styles from './style.module.css'
import sedanIcon from '../../assets/images/icon-sedans.svg';
import suvsIcon from '../../assets/images/icon-suvs.svg';
import luxuryIcon from '../../assets/images/icon-luxury.svg';

export const PreviewCard = ({vehicle_class}) => {
    const vehicle_map = {
        sedans: {
            description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip",
            icon: sedanIcon
        },
        suvs: {
            description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next famil vacation and off-road adventures.",
            icon: suvsIcon
        },
        luxury: {
            description: "Cruise in the best car brands without the bloated prices. Enjoy the nehanced comfort of a luxury rental and arrive in style.",
            icon: luxuryIcon
        }
    }

    return (
        <div className={styles.card}>
            {["sedans", "suvs", "luxury"].map(
            (vehicle_class) => {
                return (
                    <div key={vehicle_class} className={styles[vehicle_class]}>
                        <img src={vehicle_map[vehicle_class].icon}/>
                        <h1>{vehicle_class}</h1>
                        <p>{vehicle_map[vehicle_class].description}</p>
                        <button>
                            Learn More
                        </button>
                    </div>
                )
            }
        )}
        </div>
    )
}