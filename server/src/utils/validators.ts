export const ValidatorRegisterInput = (
  username: string,
  email: string,
  password: string,
  confirmPassword: string
): any => {
  const errors = {};

  if (username.trim() === "") {
    // @ts-ignore
    errors.username = "Username must not be empty";
  }

  if (email.trim() === "") {
    // @ts-ignore
    errors.email = "email must not be empty";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      // @ts-ignore
      errors.email = "email must be a valid address";
    }
  }

  if (password === "") {
    // @ts-ignore
    errors.password = "Password must not be empty";
  } else if (password !== confirmPassword) {
    // @ts-ignore
    errors.confirmPassword = "Password must match";
  }

  // @ts-ignore
  return { errors, valid: Object.keys(errors) < 1};
};


export const ValidatorLoginInput = (username: string, password: string) => {
    const errors = {};

    if (username.trim() === "") {
        // @ts-ignore
        errors.username = "Username must not be empty";
    }

    if (password.trim() === "") {
        // @ts-ignore
        errors.password = "Password must not be empty";
    }

    // @ts-ignore
    return { errors, valid: Object.keys(errors) < 1};
};
