const Ajv = require('ajv');

const ajv = new Ajv({ allErrors: true });

const emailSchema = {
  'type': 'object',
  'properties': {
    'email': {
      'type': 'string',
      'minLength': 1
    }
  },
  'required': ['email'],
  'additionalProperties': false
};

const passSchema = {
  'type': 'object',
  'properties': {
    'password': {
      'type': 'string',
      'minLength': 10,
    }
  },
  'required': ['password'],
  'additionalProperties': false
};

const signupSchema = {
  'type': 'object',
  'properties': {
    'full_name': {
      'type': 'string',
      'minLength': 1
    },
    'email': {
      'type': 'string',
      'minLength': 1,
      'pattern': '^\\S+@\\S+$'
    },
    'password': {
      'type': 'string',
      'minLength': 10
    },
  },
  'required': ['full_name', 'email', 'password'],
  'additionalProperties': false
};

const loginSchema = {
  'type': 'object',
  'properties': {
    'email': {
      'type': 'string',
      'minLength': 1,
      'pattern': '^\\S+@\\S+$'
    },
    'password': {
      'type': 'string',
      'minLength': 10
    },
  },
  'required': ['email', 'password'],
  'additionalProperties': false
};

function validateEmail(data) {
  if (data !== null && data !== undefined) {
    const validate = ajv.compile(emailSchema);
    validate(data);
    return (validate.errors);
  }
  return ('No data received.');
}

function validatePass(data) {
  if (data !== null && data !== undefined) {
    const validate = ajv.compile(passSchema);
    validate(data);
    return (validate.errors);
  }
  return ('No data received.');
}

function validateLogin(data) {
  if (data !== null && data !== undefined) {
    const validate = ajv.compile(loginSchema);
    validate(data);
    return (validate.errors);
  }
  return ('No data received.');
}
function validateSignup(data) {
  if (data !== null && data !== undefined) {
    const validate = ajv.compile(signupSchema);
    validate(data);
    return (validate.errors);
  }
  return ('No data received.');
}

module.exports = {
  validateLogin,
  validatePass,
  validateEmail,
  validateSignup
};