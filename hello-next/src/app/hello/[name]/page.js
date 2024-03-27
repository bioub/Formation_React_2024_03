async function fetchTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data.slice(0, 20);
}

export const metadata = {
  title: "Hello Page",
  description: "Shows todos",
};

export default async function Hello({ params }) {
  const todos = await fetchTodos();

  return (
    <>
      <h2>Hello {params.name}</h2>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </>
  );
}
