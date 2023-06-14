import React from "react";
import styles from "./description.module.css";
import { BsCreditCard2Back } from "react-icons/bs";
import { AiOutlineEye, AiOutlineMenu } from "react-icons/ai";
import { useState} from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { ImAddressBook } from "react-icons/im";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import TextEditor from "./TextEditor";


const initialState = "";

function Discription() {
  const [taskList, setTaskList] = useState(initialState);
  const [addTask, setAddTask] = useState([]);
  const [isFormVesible, setIsFormVesible] = useState(false)
  const [isFormDesible, setIsFormDesible] = useState(false)
  

 
 
  function taskEvent(e) {
    setTaskList(e.target.value);
  }
  function onClickAddTask(e) {
    e.preventDefault();
   
   
    if(taskList!==""){
      setAddTask([...addTask, {id:addTask.length+1, text:taskList.trim()}])
      localStorage.setItem("taskList", JSON.stringify(taskList)  )
    }
    setTaskList(initialState);
  }
  var today = new Date();
  var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time = today.getHours() + ":" + (today.getMinutes() + ":" + today.getSeconds());

  
  function handleBoxopen() {
    setIsFormVesible(true)

  }
  function handleBoxclose(){
    setIsFormVesible(false)
  }
 

  function hideForm(){
    setIsFormDesible(false)
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
              <span contentEditable>ToDo</span>
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
          <div className={styles.AiOutlineMenu}>
            <ImAddressBook />
          </div>
          <div className={styles.second}>
            <h4>Description</h4>
            <BiEditAlt className={styles.BiEditAlt} size={25} onClick={handleBoxopen} />
            {isFormVesible && <form >
               <TextEditor/>
               <button style={{position:"absolute",left:"600px", top:"350px"}} onClick={handleBoxclose}>close</button>
            </form>}
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
            <span className={styles.profile}>
              <b>RB</b>
            </span>
            <input
              className={styles.input_activity}
              placeholder="write a comment..."
              onChange={taskEvent}
              value={taskList}
            ></input>
            <button className={styles.time1} onClick={onClickAddTask}>
              <MdOutlineFileDownloadDone />
            </button>
          </div>
          <div className={styles.third_last}>
           
              {addTask.map((items) => {
                return (
                  <ul>
                    <div className={styles.item_time}>
                      <div className={styles.item_time1}>
                        <span className={styles.pr}>
                          <b>RB</b>
                        </span>
                       <li className={styles.activity_list} key={items.id}> {items.text}</li>
                      </div>
                      <div className={styles.date_time}>
                      <p className={styles.timing_para}>{date}</p>
                      <p className={styles.timing_para1}>{time}</p>
                      </div>
                    </div>
                  </ul>
                );
              })}
           
          </div>
        </div>
        <button className={styles.RxCross2} onClick={hideForm}><RxCross2/></button>
      </div>
    </>
  );
}

export default Discription;