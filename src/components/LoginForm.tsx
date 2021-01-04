import React from "react";

function LoginForm(element: any) {
  return (
    <div>
      <a
        title="Google"
        className="socialaccount_provider google"
        href="/accounts/google/login/?process=login"
      >
        login/singup with google
      </a>
      <form className="login" method="POST" action={element.dataset.loginurl}>
        <input hidden name="csrfmiddlewaretoken" value={element.dataset.crf} />
        <input
          type="text"
          name="login"
          placeholder="Username"
          autoComplete="username"
          maxLength={150}
          required={true}
          id="id_login"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          required={true}
          id="id_password"
        />
        <input type="checkbox" name="remember" id="id_remember" />
        <button className="primaryAction" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
