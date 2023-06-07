import styles from "./newcard.module.css";
import { useState } from "react";
import { addList } from "../../store/listSlice";
import { useDispatch } from "react-redux";

export default function Newcard() {
  const [inputVal, setInputVal] = useState("");
  const [isFormVisible, setisFormVisible] = useState(false);

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addList({ id: Math.random(), title: inputVal }));
    console.log("input val");
  }

  function updateInput(e) {
    setInputVal(e.target.value);
  }

  const openForm = () => {
    setisFormVisible(true);
  };

  const closeForm = () => {
    setisFormVisible(false);
  };


  return (
    <>
      <div className={styles.card_div}>
        <button onClick={openForm}>Add Card</button>
        {isFormVisible && (
          <form onSubmit={handleSubmit}>
            <input value={inputVal} onChange={updateInput} />
            <button onClick={closeForm}>Cancle</button>
            <button onClick={handleSubmit}>Save</button>
          </form>
        )}
      </div>
    </>
  );
}
