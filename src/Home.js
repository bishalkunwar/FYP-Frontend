import InputList from "./InputList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: inputs,
  } = useFetch("http://localhost:8000/inputs");

  return (
    <div className="home">
      {error && <div> {error} </div>} {isPending && <div> Loading... </div>}
      {inputs && <InputList inputs={inputs} />}
    </div>
  );
};

export default Home;
