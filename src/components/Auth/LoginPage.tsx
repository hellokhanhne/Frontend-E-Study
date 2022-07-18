import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <section>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-7 col-lg-8 col-md-12 col-sm-12'>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
