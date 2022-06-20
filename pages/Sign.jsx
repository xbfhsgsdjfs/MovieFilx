const Sign = () => {
    return (
        <>
            <header className="MainHeader">
                <div className="login">
                    <div className="login-form">
                        <div className="login-header">
                            <h1>Login</h1>
                        </div>
                        <h3>Username:</h3>
                        <input type="text" placeholder="Username" /><br />
                        <h3>Password:</h3>
                        <input type="password" placeholder="Password" />
                        <br />
                        <button type="button" className="login-button login-button-hover ">Login</button>
                        <br />
                        <p className="flex justify-center mt-5 text-xl text-[#C0392B]">Please Login WebSide!!</p>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Sign;