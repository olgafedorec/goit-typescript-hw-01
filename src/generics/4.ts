type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
  
  function createOrUpdateUser(initialValues: User, updates: Partial<User>) {
    return {...initialValues, ...updates};
  }

  const defaultUser: User = {
    name: '',
    surname: '',
    email: '',
    password: ''
  };
  
  createOrUpdateUser(defaultUser, { 
    email: 'user@mail.com', 
    password: 'password123' 
  });