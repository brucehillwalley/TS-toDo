import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import axios from "axios";

interface ITodoType {
  id: string | number; //? id bilgisi string yada number olabilir. İki veri tipinide kabul edecek.
  isDone: boolean;
  task: string;
  todo?: string; //! todo verisini opsiyonel bırakarak olsa da olur olmasa da olur demiş oluyoruz. Zorunlu olmayan fieldlar için kullanılabilir.
}

const url: string = import.meta.env.VITE_BASE_URL;

const Home = () => {
  // const [todos,setTodos] = useState<[] as ITodoType>([]) //! type tanımlaması 1.yol
  // const [todo,setTodos] = useState<Array<ITodoType>>([]) //* type tanımlaması 2.yol

  const [todos, setTodos] = useState<ITodoType[]>([]); //? type tanımlaması 3.yol ve yaygın kullanımı

  const getTodos = async () => {
    try {
      const { data } = await axios.get<ITodoType[]>(url);
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

//? void bir fonksiyon type vermeye gerek yok
// const addTodo=async (task:string)=>{
    
//     try {
//         await axios.post(url,{task})
//     } catch (error) {
//         console.log(error);
//     }
// }

type AddFn=(text:string)=>Promise<void>

const addTodo:AddFn=async (task)=>{
    
    try {
        await axios.post(url,{task:task,isDone:false})
    } catch (error) {
        console.log(error);
    }finally{
      getTodos()
    }
}



  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Typography color="error" align="center" variant="h2" component="h1">
        TodoApp with Typescript
      </Typography>
      {/* //?variant style, component html. birisi görüntü birisi gerçek versiyonu seo için h1 gibi. */}

      <AddTodoComp addTodo={addTodo}/>

      <TodoList />
    </Container>
  );
};

export default Home;
