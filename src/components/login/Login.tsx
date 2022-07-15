import GoogleLogIn from './GoogleLogIn';
import MailLogin from './MailLogin';

const Login = () => {
  return (
    <div className='text-center m-5'>
      <div className='card m-3' style={{ width: "18rem"}}>
        <div className="card-body">
          <h3 className="card-title">Welcome!</h3>
          <div className="card-text">

            <div className='row'>
              <div className="card-body">
                <h5 className="card-subtitle mb-2 text-muted">Log in with your email</h5>
                <div className="card-text"><MailLogin /> </div>
              </div>
            </div>

            <div className="card-body">
              <h5 className="card-subtitle mb-2 text-muted">Or log in with Google</h5>
              <GoogleLogIn />
            </div>

          </div>
        </div>
      </div>
    </div >
  );
};

export default Login;
