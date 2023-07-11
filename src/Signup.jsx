function Signup(){
return <div>
            <center>
                <div style = {{
                    marginTop: 150,
                    marginBottom: 10
                }}>
                    Welcome to Course Platform.sign up below
                </div>
                <div style = {{
                    border:"2px solid black",
                    width:400
                }}>
                Username -  <input type={"text"}></input>
                <br />
                Password -  <input type={"password"}></input>
                <br />
                <button>Sign up</button>
                </div>
            </center>
</div>
}

export default Signup;