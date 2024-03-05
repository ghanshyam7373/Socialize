interface signUpData {
  userName: { value: string; error: string };
  email: { value: string; error: string };
  password: { value: string; error: string };
  confirm_password: { value: string; error: string };
}

interface loginData {
  email: { value: string; error: string };
  password: { value: string; error: string };
}
