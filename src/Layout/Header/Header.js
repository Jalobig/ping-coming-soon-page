import React from "react";
import classes from "./Header.module.scss";
import Logo from "../../images/logo.svg";
import Button from "../../components/Button/Button";
import useInput from "../../hooks/useInput";
const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Header = () => {
  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    onBlurInputHandler: emailOnBlurHandler,
    reset: emailReset,
  } = useInput((email) => regEmail.test(email));
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!emailIsValid) {
      return;
    }
    alert(`Submitted:  ${enteredEmail}`);
    emailReset();
  };
  const emailClasses = `${classes.header__input} ${
    !emailHasError ? "" : classes.header__invalid
  }`;
  return (
    <header className={classes.header}>
      <img src={Logo} alt="Logo of Ping" className={classes.header__logo} />
      <h1 className={classes.header__heading}>
        We are launching <span>soon!</span>
      </h1>
      <p className={classes.header__text}>Subscribe and get notified</p>
      <form onSubmit={formSubmitHandler} className={classes.header__row}>
        <div className={classes["header__form-group"]}>
          <input
            placeholder="Your email address..."
            className={emailClasses}
            type="text"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailOnBlurHandler}
          />
          {emailHasError && enteredEmail !== "" && <p className={classes.error__text}>Please provide a valid email address</p>}
          {emailHasError && enteredEmail === "" && <p className={classes.error__text}>Whoops! It looks like you forgot to add your email</p>}
        </div>
        <Button>Nofify Me</Button>
      </form>
    </header>
  );
};

export default Header;
