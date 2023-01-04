import React from 'react'
import styles from './Home.module.css'
import {ImArrowLeft,ImArrowRight} from 'react-icons/im'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
const arr = [
    {
        id:1,
        title:"ƏN BÖYÜK SATIŞ",
        content:"Yeni xətlər əlavə edildi"
    },
    {
        id:2,
        title:"YENİ GÖRÜNÜŞ MAĞAZA KARTINIZDA ALIŞVERİŞ EDİN",
        content:"Ətraflı məlumat əldə edin"
    },
    {
        id:3,
        title:"YENİ GÖRÜNÜŞ MAĞAZA KARTINIZDA ALIŞVERİŞ EDİN",
        content:"Bileti 20 AZN-ə çatdırın"
    }
]

const ShopSection = () => {
    const rendered = arr.map(item => {
        return(
            <div key={item.id} className={styles.Shop_box_service}>
            <div className={styles.Shop_number}>
                {item.id}
            </div>
            <div className={styles.Shop_info}>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
            </div>
        </div>
        )
    })
    const responsive = {
        0: {items: 1},
        568: {items: 2},
        1424: {items: 3},
    };
  return (
    <section className={styles.ShopSection}>
        <AliceCarousel
                    mouseTracking
                    disableButtonsControls
                    disableDotsControls
                    // autoPlay={true}
                    responsive={responsive}
                    animationDuration={2000}
                    infinite={true}
                    keyboardNavigation={true}
                    items={rendered}
                    
                />
    </section>
  )
}

export default ShopSection