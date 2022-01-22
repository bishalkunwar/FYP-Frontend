import { Link } from 'react-router-dom';

const InputList = ({ inputs }) => {
    return ( <
        div className = "input-list" > {
            inputs.map(input => ( <
                div className = "input-preview"
                key = { input.id } >
                <
                Link to = { `/inputs/${input.id}` } >
                <
                h2 > { input.input } < /h2> <
                p > Written by Bishal < /p> < /
                Link > <
                /div>
            ))
        } <
        /div>
    );
}

export default InputList;