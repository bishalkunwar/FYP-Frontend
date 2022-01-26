import { Link } from "react-router-dom";

const Navbar = () => {
    return ( <
        nav className = "navbar" >
        <
        h1 > Sentiment Analyser < /h1> <
        div className = "links" >
        <
        Link to = "/"
        style = {
            {
                color: 'white',
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }
        } > Home < /Link> <
        Link to = "/create"
        style = {
            {
                color: 'white',
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }
        } > Service < /Link>

        <
        Link to = "/signup"
        style = {
            {
                color: 'white',
                backgroundColor: '#808080',
                borderRadius: '8px'
            }
        } > Signup < /Link>

        <
        Link to = "/signin"
        style = {
            {
                color: 'white',
                backgroundColor: '#808080',
                borderRadius: '8px'
            }
        } > Signin < /Link>



        <
        /
        div > <
        /nav>
    );
}

export default Navbar;