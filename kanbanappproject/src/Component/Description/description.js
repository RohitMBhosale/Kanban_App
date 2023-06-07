import React from "react";
import styles from "./description.module.css";
import { BsCreditCard2Back } from "react-icons/bs";
import { AiOutlineEye, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const initialState = "";

function Discription() {

  const [taskList, setTaskList] = useState(initialState);
  const [addTask, setAddTask] = useState([]);

  function taskEvent(e) {
    setTaskList(e.target.value);
  }

  function onClickAddTask() {
    setAddTask((oldItems) => {
      return [...oldItems, taskList];
    });
    setTaskList(initialState);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainone}>
          <div className={styles.BsCreditCard2Back}>
            <span>
              <BsCreditCard2Back />
            </span>
          </div>
          <div className={styles.first_right}>
            <div className={styles.cookblock}>
              <span contentEditable>Cook Food</span>
              <br />
              <span>
                in list <u>To Do</u>
              </span>
            </div>
            <div className={styles.first_second}>
              <span>Notification</span>
              <br />
              <button id="watch">
                {" "}
                <AiOutlineEye /> Watch
              </button>
            </div>
          </div>
        </div>
        <div className={styles.maintwo}>
          <div>
            <AiOutlineMenu />
          </div>
          <div className={styles.second}>
            <h4>Description</h4>
            <br />
            <div>
              {" "}
              <p contentEditable>Add a more detailed description...</p>
            </div>
          </div>
        </div>
        <div className={styles.mainthird}>
          <div className={styles.thirdone}>
            <span>
              <AiOutlineMenu />
            </span>
            <span className={styles.activity}>
              <b>Activity</b>
            </span>
          </div>
          <div className={styles.third_second}>
            <span className={styles.pr}>
              <b>RB</b>
            </span>
            <input
              className={styles.input_activity}
              placeholder="write a comment..."
              onChange={taskEvent}
              value={taskList}
            ></input>
            <button className={styles.time1} onClick={onClickAddTask}>
              +
            </button>
          </div>
          <div className={styles.third_last}>
            <ul>
              {addTask.map((items) => {
                return (
                  <li>
                    <div className={styles.item_time}>
                      <div className={styles.item_time1}>
                        <span className={styles.pr}>
                          <b>RB</b>
                        </span>
                        {items}
                      </div>
                      <p className={styles.timing_para}>1 sec ago</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discription;
