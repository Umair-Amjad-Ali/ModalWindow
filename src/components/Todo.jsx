import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = () => {
  const [show, setShow] = useState(false);
  const deleteHandler = () => {
    setShow(true);
  };

  const closeModalHandler = () => {
    setShow(false);
  };

  return (
    <>
      <div className=" bg-white h-40 w-[22rem] rounded-lg shadow-lg ">
        <h1 className=" text-lg  pt-3 pl-3">Add Todo</h1>
        <button
          className=" bg-blue-700  text-white px-5 py-3 rounded-lg ml-[15.3rem] mt-[3.7rem] text-center "
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
      {show ? <Modal onClick={closeModalHandler} /> : null}
      {show ? <Backdrop onClick={closeModalHandler} /> : null}
    </>
  );
};

export default Todo;
