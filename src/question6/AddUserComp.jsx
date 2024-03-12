import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./usersSlice";

export default function AddUserComp() {
  const [userName, setUserName] = useState("");
  const list = useSelector((state) => state.user.list);
  const dispatch = useDispatch();

  function handleAddUser() {
    dispatch(addUser(userName));
  }

  return (
    <div>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <button
        className="border border-slate-400 rounded-full px-2 py-1 font-semibold text-lg hover:bg-blue-400 hover:text-white"
        onClick={handleAddUser}
      >
        Add new user
      </button>
      <p>Current users:</p>
      <div className="w-full h-auto">
        <ul className="list-none flex flex-col ">
          <li className="w-full pb-2">{list}</li>
        </ul>
      </div>
    </div>
  );
}
