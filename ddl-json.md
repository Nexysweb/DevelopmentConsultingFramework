# JSON Data Definition Language (DDL)

We define an array of entities. All entities have attributes and are assigned primary keys in the form of ids or uuids.

## Entity

| Arg Name    |  Possible values                                                                 | Example     |
|-------------|----------------------------------------------------------------------------------|-------------|
| name        | name of the entity. has to start with a capital letter                           | "Country"   |
| table       | name of the SQL table. This field is optional, if not given the table is the snake case version of name                                                                                                        | `my_country`|
| uuid        | boolean, if set to true, the primary key is a uuid vs a id                       | `false`     |
| withOrder   | allows ordering (UI: drag/drop)                                                  | `false`     |
| description | description of the entity, optional                                              |             |
| logUser     | saves user id                                                                    | `false`     |
| isLog       | add log logic in table                                                           | `false`     |
| logTable    | creates mirror log table                                                         | `false`     |
| extends     | extends a particular preprogrammed entity (e.g. user)                            | `null`      |
| uniqueSet   | array with combination of params that are unique (e.g `["countryId", "userId"]`) | `null`      |

## Attribute


| Arg Name    |  Possible values                                                | Default     |
|-------------|-----------------------------------------------------------------|-------------|
| Name        | *field name*                                                    | -           |
| type        | [see section](#field-types)                                     | string      |
| optional    | true/false                                                      | `false`     |
| constraints | [see section](#constraints)                                     | `[]`        |
| description | description of the attribute                                    |             |
| ui          | {textarea, datepicker, slider, etc..}                           | `fieldType` |


### Field Types

| Type     | Example values       |
|----------|----------------------|
| Int      | 1, 2, 3              |
| Long     | 65432345, 2345432345 |
| String   | hello                |
| Boolean  | true / false         |
| Decimal  | 23.34                |
| Date     | 2019-01-31           |
| Datetime | 2019-01-31 15:23     |
| Time     | 15:23                |
| -        | Country              |

Every entity name automatically becomes a type. Hence the last example of the table where the type is `Country`, referring to the entity `Country` and creating a relation with that other entity.

a more formal version can be found in https://github.com/Nexysweb/DevelopmentConsultingFramework/blob/master/src/types.js

#### mapping SQL JSON-ddl

```

BigDecimal => Decimal 10, 4
Int => int(11)
Long => bigint(20)
LocalDateTime => Datetime
LocalDate => Datetime
```

### Constraints

| Arg Name    |  Possible values                                                | Default     |
|-------------|-----------------------------------------------------------------|-------------|
| typeId      | [see section](#constraint-types)                                | -           |
| value       | value of the constraint                                         | -           |
| msg         | overrides default message                                       | -           |

#### Constraint Types
* 1: equal `=` (number)
* 2: greater than `>` (number(
* 3: less than `<` (number
* 4: greater than or equal `>=` (number)
* 5: less than or equal `<=` (number)
* 6: length (string) => https://stackoverflow.com/questions/9043820/regex-to-match-words-of-a-certain-length
* 7: Regex (string)
* 8: belongs to a predefined set: [9, 87, 34] (all)
* 9: async call to API (link to an API request) (string)

## Checking format

The format can be checked with the `schema-validation`: https://github.com/Nexysweb/DevelopmentConsultingFramework/blob/master/src/schema-validation.js

## Variable types

### Explicit variables

Explicit variables need to be explicitly specified when inserting a record (are part of the payload)

### Implicit variables

Implicit variables are not explicitly stated. E.g. taken from auth (`userId`)

### System variables

System variables are not speicified in the model.

Examples are:

* id / uuid
* dateAdded
* dateEdited

## Example (simple)

This is an example of a simple model, that links countries and cities. 

https://github.com/Nexysweb/DevelopmentConsultingFramework/blob/master/examples/simple-country-city.json

## Example (advanced)

https://github.com/Nexysweb/DevelopmentConsultingFramework/blob/master/examples/advanced.js
