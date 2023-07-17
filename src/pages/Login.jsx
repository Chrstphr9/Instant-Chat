import { UserAuth } from "../context/AuthContext";

const Login = () => {
 
  const { currentUser, signinWithGoogle} = UserAuth();
  
  
  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch(error) {
       console.log(error);
    }
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome To Instant Chat</h1>
          <p className="py-6">
            Join The Conversation, Meet New People, And Make Connections In One
            Shared Room
          </p>
          <button onClick={handleLogin} className="btn btn-outline">Log In With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
