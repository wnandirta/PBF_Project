import React, { useEffect, useState }  from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Title from "./Title";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "./firebase";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";


function Dashboard() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    
  }, [user, loading]);
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div>
          <Title/>
        </div>
        <div>
          <AddTodo/>
        </div>
        <div className="todo_container">
          {todos.map((todo) => (
            <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            />
          ))}
        </div>
        
        <button className="dashboard__btn" onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
