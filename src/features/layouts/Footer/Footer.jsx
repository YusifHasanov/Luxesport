
import React from "react";
import { Link } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiBasketball } from "react-icons/bi";
import { BsBehance } from "react-icons/bs";
import {AiOutlineInstagram} from "react-icons/ai";
import pay from './../../assets/pay-home5.webp'
import styles from "../Footer/footer.module.css";


const Footer = () => {
  return (
    <footer className={styles.f_general}>
      <div className="footer_v1">
        

          
        <div className={styles.f_top }>
          <div className={styles.container}>
          <div className={styles.col_mag_4}>
            <h4>YARDIM & MƏLUMAT</h4>
            <div>
              <ul className={styles.list}>
                <li>
                  <Link>Harman Korporativ</Link>
                </li>
                <li>
                  <Link>Kariyer</Link>
                </li>
                <li>
                  <Link>Gizlilik Siyasəti</Link>
                </li>
                <li>
                  <Link>İstifadə şərtləri</Link>
                </li>
                <li>
                  <Link>Niyə Birbaşa Almaq</Link>
                </li>
                <li>
                  <Link>Xəbər bülleteni</Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4>HAQQIMIZDA</h4>
            <div>
              <ul className="list">
                <li>
                  <Link>Yardım Mərkəzi</Link>
                </li>
                <li>
                  <Link>Mağaza Yerləri</Link>
                </li>
                <li>
                  <Link>
                    Demək olar ki, <br />
                    hər yerdə çatdırırıq!
                  </Link>
                </li>
                <li>
                  <Link>Qeydiyyat</Link>
                </li>
                <li>
                  <Link>Gizlilik Siyasəti</Link>
                </li>
                <li>
                  <Link>Xidmət şərtləri</Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4>KATEQORIYALAR</h4>
            <div>
              <ul className={styles.list}>
                <li>
                  <Link>Sayt Xəritəsi</Link>
                </li>
                <li>
                  <Link>Bizimlə əlaqə saxlayın</Link>
                </li>
                <li>
                  <Link>Dəstək Mərkəzi</Link>
                </li>
                <li>
                  <Link>Çatdırılma & Geri qaytar</Link>
                </li>
                <li>
                  <Link>İnvestorlar Saytı</Link>
                </li>
                <li>
                  <Link>FAQS</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.form_conteiner}>
            <h3>Sizin inboxunuzda olanlar</h3>
            <div>
              <p>
                Xəbərlər & Gym Active-dən yeniliklər. Spam yoxdur, söz veririk.
              </p>
              <form>
                <div className={styles.form_group}>
                  <input className={styles.input} placeholder="Email" />
                  <button type="submit" className={styles.btn}>
                    <font className={styles.sing_in}>SIGN UP</font> <MdKeyboardArrowRight />{" "}
                  </button>
                </div>
              </form>
              <div className={styles.icons}>
                  <ul>
                <li><AiOutlineTwitter className={styles.twitter} />{" "}</li>
                <li><AiOutlineInstagram className={styles.instagram} /></li>
                  </ul>
               
                
                
               
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className={styles.f_bottom}>
        <div className={styles.shop_launch}>
            <p>Website by <Link className={styles.shop_launch}>ShopiLaunch</Link>.Copyright Gym Active</p>
        </div>
        <div className={styles.pay}>
        <img src={pay}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
