import axios from "axios";

async function loadUser() {
  const { data } = await axios.get("http://localhost:3000/api/user");
  return data;
}

export default async function Home() {
  const user = await loadUser();

  return (
    <main className="">
      <ul>
        {user.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}
