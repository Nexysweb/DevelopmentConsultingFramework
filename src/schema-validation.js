const Joi = require('joi');
const Types = require('./types.js')

const modelParamSchema = Joi.object().keys({
  arg: Joi.string().alphanum().required(),
  column: Joi.string().optional(),
  type: Joi.string().alphanum().required(),
  optional: Joi.boolean(),
  permissions: Joi.array().optional(),
  description: Joi.string().optional()
});

// for params, the value of `arg` has to be unique
// https://github.com/hapijs/joi/issues/1159]
const modelSchema = Joi.object().keys({
  name: Joi.string().alphanum().required(),
  uuid: Joi.boolean().optional(),
  table: Joi.string().optional(),
  description: Joi.string().optional(),
  params: Joi.array().items(modelParamSchema).unique((a, b) => a.arg === b.arg).required(),
  permissions: Joi.array().optional(),
  constraints: Joi.array()
});

const modelDefSchema = Joi.object().keys({
  models: Joi.array().items(modelSchema).required()
}).unknown();

const typeDefault = Types.jvmTypes;

const checkTypes = model => {
  let ts = []

  const tNames = model.models.map(m => {
    ts = ts.concat(
      m.params.map(p => p['type']).filter(p => typeDefault.indexOf(p) < 0)
    );

    return m.name
  });

  let errors = [];

  ts.map(t => {
    if (tNames.indexOf(t) < 0) {
      errors.push(`"${t}" is referenced as a type in params but was never defined`)
    }
  });

  return errors;
}

/**
 * validates a model of the JSON ddl
 */
const validateModelDef = model => {

  const schema = modelDefSchema;

  const result = Joi.validate(model, schema);

  if (result.error === null) {
    // here check if types all exist
    const errors = checkTypes(model);

    if (errors.length > 0) {
      return {status: false, error: errors};
    } else {
      return {status: true, error: null};
    }
  } else {
    return {status: false, error: result.error.details};
  }
}

module.exports = {validateModelDef};
