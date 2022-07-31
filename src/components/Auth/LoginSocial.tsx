import FacebookLogin from '@greatsumini/react-facebook-login';
import { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { AuthContext, IAuthContext } from '~/context';
import { toastEmit } from '~/utils/toasify';

const LoginSocial = () => {
  const { login } = useContext(AuthContext) as IAuthContext;
  const responseGoogle = async (data: any) => {
    console.log(data);
    if (data.tokenId) {
      return login('google', {
        idToken: data.tokenId,
      });
    }
    toastEmit({
      message: 'Something wrong, please try again !',
      type: 'error',
    });
  };

  const onResponseFacebook = async (data: any) => {
    console.log(data);
    if (data.userID) {
      return login('facebook', {
        userID: data.userID,
        accessToken: data.accessToken,
      });
    }
    toastEmit({
      message: 'Something wrong, please try again !',
      type: 'error',
    });
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
              clientId='603221464013-0glhirb1avbjsl91bkm9bv0gfnrc8kmq.apps.googleusercontent.com'
              autoLoad={false}
              render={(renderProps) => (
                <button type='button' className='sl_btn' onClick={renderProps.onClick}>
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
              appId='461139512569494'
              autoLoad={false}
              render={(renderProps) => (
                <button type='button' className='sl_btn' onClick={renderProps.onClick}>
                  <i className='ti-facebook text-info' />
                  Facebook
                </button>
              )}
              fields='name,email,picture'
              onSuccess={onResponseFacebook}
            />
          </li>
          <li className='col-xl-4 col-lg-4 col-md-4 col-4'>
            <button className='sl_btn' type='button'>
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
