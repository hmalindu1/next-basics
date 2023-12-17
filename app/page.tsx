'use client'

import NewTodoForm from "@/components/NewTodoForm";

const getData = async () => {
  await new Promise<void>((resolve) => setTimeout(() => (resolve(), 2000)));
  return { data: [1, 2, 3] };
}

const Home = () => {
  const data = getData();
  console.log(data);

  return (<div>
    <NewTodoForm />
  </div>)
}


export default Home;