const createValidator = () => {
  const validator = () => null;
  validator.isRequired = validator;
  return validator;
};

const makeFactory = () => {
  const validator = createValidator();
  return () => validator;
};

const PropTypes = {
  any: createValidator(),
  array: createValidator(),
  bool: createValidator(),
  element: createValidator(),
  func: createValidator(),
  node: createValidator(),
  number: createValidator(),
  object: createValidator(),
  string: createValidator(),
  symbol: createValidator(),
  arrayOf: makeFactory(),
  exact: makeFactory(),
  instanceOf: makeFactory(),
  objectOf: makeFactory(),
  oneOf: makeFactory(),
  oneOfType: makeFactory(),
  shape: makeFactory(),
};

PropTypes.default = PropTypes;

export default PropTypes;
export const {
  any,
  array,
  bool,
  element,
  func,
  node,
  number,
  object,
  string,
  symbol,
  arrayOf,
  exact,
  instanceOf,
  objectOf,
  oneOf,
  oneOfType,
  shape,
} = PropTypes;
