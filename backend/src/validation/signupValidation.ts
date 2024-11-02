interface SignUpFormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
  
  export const validateSignUp = (values: SignUpFormValues): string | null => {
    const { username, email, password, confirmPassword } = values;
  
    if (!username || username.trim().length === 0) {
      return 'Username is required.';
    }
  
    if (!email || !emailRegex.test(email)) {
      return 'A valid email is required.';
    }
  
    if (password.length < 8) {
      return 'Password must be at least 8 characters long.';
    }
  
    if (password !== confirmPassword) {
      return 'Passwords do not match.';
    }
  
    return null; // No validation errors
  };
  