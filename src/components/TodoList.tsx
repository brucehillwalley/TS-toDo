import React from "react";

//? 3.kullanım   yolu (Props type tanımlanması)
//! React.FC, bir functional component'i ifade eder. Bileşenin işlevsel bir yapıda olduğunu ve React tarafından kullanılabileceğini belirtir.

//? React.FC, bileşenlere props tanımlamak ve JSX döndürmek için kullanılan bir genel tip (generic type) olarak kullanılır. Bu tip, bileşenin alacağı props'ların tipini belirtmek için kullanılır. Props'ların tipini belirtmek, bileşenin daha güvenli ve hatasız olmasını sağlar.

//* Ancak, React.FC kullanmak zorunlu değildir. Fonksiyonel bir bileşen, sadece fonksiyon olarak da tanımlanabilir ve React.FC kullanmadan da props alabilir ve JSX döndürebilir.

//+ FC, "FunctionComponent" kelimelerinin kısaltmasıdır.



interface ITodoList{
  todos:ITodoType[];
  toggleTodo:ToggleFn;
  deleteTodo:DeleteFn;
}
const TodoList:React.FC<ITodoList> = ({todos,toggleTodo,deleteTodo}) => {
  return (
    <div>TodoList</div>
  )
}

export default TodoList