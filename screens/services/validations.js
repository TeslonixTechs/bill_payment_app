export const validateUsername = (username) => {
    if (typeof username !== 'string' || username.length < 6) {
      return false;
    }
    return true;
};
  
export const validateFullName = (fullName) => {
    if (typeof fullName !== 'string' || !/\s/.test(fullName)) {
      return false;
    }
    return true;
};
  
export const validateEmail = (email) => {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validateGender = (gender) => {
    if(gender !== 'male' || gender !== 'female' || gender !== 'other') {
        return false;
    }
    return true;
}

export const validatePassword = (password) => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const hasDigit = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    if(!hasSpecialChar.test(password) && !hasDigit.test(password) && !hasUpperCase.test(password) && !hasLowerCase.test(password)) {
        return false;
    }
    return true;
};

export const validateConfirmPassword = (password, confirmPassword) => {
    if(password !== confirmPassword) {
        return false;
    }
    return true;
};
