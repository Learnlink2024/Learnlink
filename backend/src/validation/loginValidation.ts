interface LoginFormValues {
    username: string;
    password: string;
  }
  
  export const validateLogin = (values: LoginFormValues): string | null => {
    const { username, password } = values;
  
    if (!username || username.trim().length === 0) {
      return 'Username is required.';
    }
  
    if (!password || password.trim().length === 0) {
      return 'Password is required.';
    }
  
    if (password.length < 8) {
      return 'Password must be at least 8 characters long.';
    }
  
    return null; // No validation errors
  };
  