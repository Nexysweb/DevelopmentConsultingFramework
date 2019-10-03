// list of JVM types that are supported
export const jvmTypes = ['Int', 'Long', 'Double', 'LocalDateTime', 'LocalDate', 'Boolean', 'BigDecimal', 'String'];

export const jvmToSqlType = i => {
  switch (i) {
    case 'Int':
      return 'INT';
    case 'Long':
      return 'BIGINT';
    case 'Double':
      return 'FLOAT';
    //case 'DateTime': // datetime is not accepted
    case 'LocalDateTime':
      //return 'TIMESTAMP'; //TODO: Fix ambiguity between timestamp & datetime
      return 'DATETIME';
    case 'LocalDate':
      return 'DATE';
    case 'Boolean':
      return 'BIT';
    case 'BigDecimal':
      return 'DECIMAL(12,4)';
    case 'String':
      return 'VARCHAR(512)'; //TODO: Fix hardcoded length
    default:
      console.log(`Couldn't translate "${i}" to SQL type, fallback to \`BIGINT\`.`);
      return 'BIGINT';
  }
};

export const sqlToJvmType = i => {
  switch (i.toLowerCase()) {
    case 'int':
      return 'Int';
    case 'bigint':
      return 'Long';
    case 'timestamp':
      return 'LocalDateTime';
    case 'date':
      return 'LocalDate';
    case 'datetime':
      return 'LocalDateTime';
    case 'bit':
      return 'Boolean';
    case 'decimal':
      return 'BigDecimal';
    case 'float':
      return 'Double';
    case 'char':
    case 'text':
    case 'varchar':
      return 'String';
    default:
      throw `Couldn't translate "${i}" to JVM type.`
  }
};

export const modelToSqlType = jvmToSqlType;
export const modelToJvmType = (x) => x; // Currently equivalent

