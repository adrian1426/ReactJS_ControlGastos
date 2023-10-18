import { useAuthStore } from "../store/AuthStore";

const HomePage = () => {
  const { signOut } = useAuthStore();

  return (
    <div>
      <h1>HomePage</h1>
      <hr />
      <button onClick={signOut}>Salir</button>
    </div>
  );
};

export default HomePage;