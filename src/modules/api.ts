import { ResponseUser } from "../types/user";

export const getUserByName = (name: string) => {
  const response = async () => {
    await fetch(`https://api.github.com/users/${name}`).then((res) =>
      res.json()
    );
  };
  return response;
};

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((data: Todo[]) => {
//       setTodoList(data);
//     });
// }, []);
