"use client"
export default function Home() {
    function adicionar(){
        const body = document.querySelector('body');
        body.classList.add("signup");
    }
    
    function remover(){
        const body = document.querySelector('body');
        body.classList.remove("signup");
    }

    return (
        <div className="container">
            <span></span>
            <span></span>
            <span></span>

            <form id="signinForm">
                <h2>Login</h2>
                
                <div className="inputBox">
                    <input type="text" placeholder="Username" />
                </div>
                
                <div className="inputBox">
                    <input type="password" placeholder="Password" />
                </div>
                
                <div className="inputBox group">
                    <a href="#">Forgot Password</a>
                    <a href="#" id="signup" onClick={adicionar}>
                        Signup
                    </a>
                </div>
                
                <div className="inputBox">
                    <input type="submit" value="Sign in" />
                </div>
            </form>

            <form id="signupForm">
                <h2>Registration</h2>
                
                <div className="inputBox">
                    <input type="text" placeholder="Username" />
                </div>

                <div className="inputBox">
                    <input type="text" placeholder="Email Address" />
                </div>
                
                <div className="inputBox">
                    <input type="password" placeholder="Create Password" />
                </div>

                <div className="inputBox">
                    <input type="password" placeholder="Confirm Password" />
                </div>
                
                <div className="inputBox">
                    <input type="submit" value="Register Account" />
                </div>

                <div className="inputBox group">
                    <a href="#" id="login">
                        Already Have an Account ?
                        <b className="signin" onClick={remover}>Login</b>
                    </a>
                </div>
            </form>
        </div>
    );
}
