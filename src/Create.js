import axios from "axios";
import { useEffect, useState } from "react";
import PieChart from "./PieChart";

const Create = () => {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState([]);

  const getAnalysis = (data) => {
    const url = "http://127.0.0.1:5000/api/v1/getAnalysis/"; // flask server url
    axios
      .post(url, data)
      .then((res) => {
        setResult(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = { message };
    getAnalysis(input);
  };

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <>
      <div className="create">
        <h2> Please Provide Your Input Here. </h2>
        <form onSubmit={handleSubmit}>
          <label> Text Input: </label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button> Submit </button>
        </form>
        <div className="result">
          {result.length !== 0 && <PieChart result={result} />}
        </div>
      </div>
    </>
  );
};

export default Create;
