import { Link, useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate('/login');

    return (
        <section className='nf container-fluid'>
            <h1>Unauthorized</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            <div >
                <Link to={"/"}>Go Back to home</Link> or <Link to={'/login'}>Login</Link>
            </div>
        </section>
    )
}

export default Unauthorized;