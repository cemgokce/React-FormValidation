import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: latNameIsValid,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: resetLastnameHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailHandler,
  } = useInput((value) => value.trim() !== "");

  const formIsSubmit = (event) => {
    event.preventDefault();
    if (!nameIsValid) {
      return;
    }
    resetNameHandler();
    resetLastnameHandler();
    resetEmailHandler();
  };
  const NameClasses = nameHasError ? "form-control invalid" : "form-control";
  const LastnameClasses = lastnameHasError
    ? "form-control invalid"
    : "form-control";
  const EmailClasses = emailHasError ? "form-control invalid" : "form-control";
  let formIsValid = false;

  if (latNameIsValid && emailIsValid && nameIsValid) {
    formIsValid = true;
  }
  return (
    <form onSubmit={formIsSubmit}>
      <div className="control-group">
        <div className={NameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            id="name"
          />
          {nameHasError ? <p className="error-text">Name is incorrect</p> : ""}
        </div>
        <div className={LastnameClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            value={enteredLastName}
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler}
            id="lastnmae"
          />
          {lastnameHasError ? <p className="error-text">Last is incorrect</p> : ""}
        </div>
      </div>
      <div className={EmailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          id="email"
        />
        {emailHasError ? <p className="error-text">Email is incorrect</p> : ""}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
