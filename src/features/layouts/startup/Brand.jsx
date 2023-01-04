import React from 'react'
import AliceCarousell from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Brand1 from './../../assets/brand/brand1.webp'
import Brand2 from './../../assets/brand/brand2.avif'
import Brand3 from './../../assets/brand/brand3.webp'
import Brand4 from './../../assets/brand/brand4.webp'
import Brand5 from './../../assets/brand/brand5.webp'
import styles from './Home.module.css'
const arr = [
    { id: 1, img: Brand1 },
    { id: 2, img: Brand2 },
    { id: 3, img: Brand3 },
    { id: 4, img: Brand4 },
    { id: 5, img: Brand5 },
]

const Brand = () => {
    const render = arr.map(item => {
        return (
            <li key={item.id}>
                <img src={item.img} />
            </li>
        )
    })
    const responsive = {
        0: { items: 2 },
        568: { items: 3 },
        1424: { items: 5 },
    };
    return (
        <section className={styles.Brand}>
            <ul>
                <AliceCarousell
                    mouseTracking
                    responsive={responsive}
                    animationDuration={2000}
                    infinite={true}
                    keyboardNavigation={true}
                    items={render}
                    disableDotsControls
                    disableButtonsControls
                />
            </ul>
        </section>
    )
}

export default Brand