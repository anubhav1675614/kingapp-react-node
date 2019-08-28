import validator from '../const/validator';

class Validator {
  constructor() {
    this.validator = validator;

    this.resetValidator();
  }

  resetValidator = () => {
    Object.keys(this.validator).forEach(fieldName => {
      this.validator[fieldName].errors = [];
      this.validator[fieldName].state = '';
      this.validator[fieldName].valid = false;
    });
  };

  updateValidator = (fieldName, value) => {
    this.validator[fieldName].errors = [];
    this.validator[fieldName].state = value;
    this.validator[fieldName].valid = true;
    this.validator[fieldName].rules.forEach(rule => {
      if (rule.test instanceof RegExp) {
        if (!rule.test.test(value)) {
          this.validator[fieldName].error = rule.message;
          this.validator[fieldName].valid = false;
        }
      }
    });
  };

  displayValidationError(fieldName) {
    const currentValidator = this.validator[fieldName];
    const result = '';
    if (currentValidator && !currentValidator.valid) return currentValidator.error;
    return result;
  }

  isFormValid(field) {
    if (this.validator[field].valid) return true;

    return false;
  }
}

export default Validator;
