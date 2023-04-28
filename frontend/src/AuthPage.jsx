import axios from 'axios';

const AuthPage = (props) => {

  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];

    axios.post(
      'http://localhost:3001/authenticate',
      { username:value }
      
      ).then(r=>props.onAuth({ ...r.data, secret:value})).catch(e=>console.log("error", e))

    
  };

  return(
    <div>
      <center>
        <form onSubmit={onSubmit} >
        <h1>Welcome to the Chat app</h1>
        <label className="user_txt" htmlFor="username">User Name</label><br />
        <input className="user_txt" name="username" /><br /><br />
        <input className="submit" type="submit" />
      </form>
      </center>
    </div>
  );

}

export default AuthPage;