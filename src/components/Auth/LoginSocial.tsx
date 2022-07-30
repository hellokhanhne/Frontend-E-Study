import FacebookLogin from '@greatsumini/react-facebook-login';
import GoogleLogin from 'react-google-login';

const LoginSocial = () => {
  const responseGoogle = async (data: any) => {
    console.log(data);
  };

  const onResponseFacebook = async (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div className='rcs_log_125'>
        <span>Or Login with Social Info</span>
      </div>
      <div className='rcs_log_126'>
        <ul className='social_log_45 row'>
          <li className='col-xl-4 col-lg-4 col-md-4 col-4'>
            <GoogleLogin
              clientId='603221464013-ji6thsjj9862r5es12she2f5hgdjlsde.apps.googleusercontent.com'
              autoLoad={false}
              render={(renderProps) => (
                <button className='sl_btn' onClick={renderProps.onClick}>
                  <i className='ti-google text-danger' />
                  Google
                </button>
              )}
              onSuccess={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </li>
          <li className='col-xl-4 col-lg-4 col-md-4 col-4'>
            <FacebookLogin
              appId='464702251765680'
              autoLoad={false}
              render={(renderProps) => (
                <button className='sl_btn' onClick={renderProps.onClick}>
                  <i className='ti-facebook text-info' />
                  Facebook
                </button>
              )}
              fields='name,email,picture'
              onSuccess={onResponseFacebook}
            />
          </li>
          <li className='col-xl-4 col-lg-4 col-md-4 col-4'>
            <button className='sl_btn'>
              <i className='ti-github text-dark' />
              Github
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LoginSocial;
