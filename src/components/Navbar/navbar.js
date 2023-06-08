import styles from "./navbar.module.css";
import { IoStarOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { BiObjectsVerticalTop } from "react-icons/bi";
import { BiFilter } from "react-icons/bi";
import { MdBolt } from "react-icons/md";
import { BsRocketTakeoff } from "react-icons/bs";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar_section}>
        <div className={styles.leftSide_navbar}>
          <h1>Kanban App</h1>
          <IoStarOutline className={styles.IoStarOutline} size={17} />
        </div>
        <div className={styles.leftSide_navbar1}>
          <button className={styles.common_btn}>
            <AiOutlineTeam size={20} className={styles.AiOutlineTeam} />
            Workplace Visible
          </button>
          <button className={styles.btn}>
            <BiObjectsVerticalTop className={styles.BiObjectsVerticalTop} />
            Board
          </button>
        </div>
        <div className={styles.rightSide_navbar}>
          <div className={styles.all_btns}>
            <button className={styles.common_btn2}>
              <BsRocketTakeoff size={19} className={styles.AiOutlineTeam} />
              Power Ups
            </button>
            <button className={styles.common_btn2}>
              <MdBolt size={20} className={styles.AiOutlineTeam} />
              Automation
            </button>
            <button className={styles.common_btn2}>
              <BiFilter size={20} className={styles.AiOutlineTeam} />
              Filter
            </button>
          </div>
          <div className={styles.profile_sarchDiv}>
            <div className={styles.profile}>RB</div>
            <button className={styles.share}>Share</button>
          </div>
        </div>
      </div>
    </>
  );
}