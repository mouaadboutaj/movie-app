const Login = () => {
    return (
        <>
            <div className="container text-center admin-login">
                <form action="/admin" method="POST">
                    <h3>Admin Panel</h3>
                    <p className="text-muted">Lorem ipsum dolor sit amet.</p>
                    <div className="container inputs">
                        <div className="container-fluid">
                            <input type="text" placeholder="Enter your username : " />
                        </div>
                        <div className="container-fluid">
                            <input type="password" placeholder="Enter your password : " />
                        </div>
                        <div className="container-fluid">
                            <input type="submit" value="Login" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
 
export default Login;