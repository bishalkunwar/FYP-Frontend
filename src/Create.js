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

        return ( <
            >
            <
            div className = "create" >
            <
            h1 > WelCome < /h1> <
            h4 > To Facebook Opinion Analysis App < /h4> <
            p > Here, You can find the statistics of your facebook comments about how your audiences has taken you!!! < /p>  <
            h2 > Please Provide Your Input Below Here. < /h2> <
            form onSubmit = { handleSubmit } >
            <
            label > Text Input: < /label> <
            textarea required value = { message }
            onChange = {
                (e) => setMessage(e.target.value)
            } >
            <
            /textarea> <
            button > Submit < /button> <
            h4 > How to Check Statistics ? < /h4> <
            p > 1. Enter Valid Input Sample. < /p> <
            p > 2. Clicl on the Submit Button. < /p> <
            p > 3. Wait until analysis is done and you can see your statistics. < /p>


            <
            /form> <
            div className = "result" > {
                result.length !== 0 && < PieChart result = { result }
                />} < /
                div > <
                /div> < / >
            );
        };

        export default Create;