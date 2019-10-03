import * as Types from './types.js';

test('jvm To Sql Type', () => {
  expect(Types.jvmToSqlType('String')).toBe('VARCHAR(512)')
});

test('Sql to jvm Type', () => {
  expect(Types.sqlToJvmType('VARCHAR')).toBe('String')
});
