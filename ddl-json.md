# JSON Data Definition Language (DDL)

## Example

```
{
  "name": "country",
  "config": {
    "sqlTable": "country",
    "isUuid": true,
    "log": false
  },
  "params": [
    {"name": "name", "fieldType": "string", "isOptional": false},
    {
      "name": "code",
      "fieldType": "string",
      "isOptional": false,
      "constraints": [
        {"name": "must be greater or", "value": 3, "typeId": 3}
      ]
    },
    {
      "description": "description",
      "field
    }
  ]
}
```

## Params


| Arg Name    |  Possible values                                                | Default     |
|-------------|-----------------------------------------------------------------|-------------|
| Name        | *field name*                                                    | -           |
| fieldType   | [see section](#field-types)                                     | string      |
| isOptional  | true/false                                                      | `false`     |
| constraints | [see section](#constraints)                                     | `[]`        |
| ui          | {textarea, datepicker, slider, etc..}                           | `fieldType` |


### Field Types

| Type     | Example values       |
|----------|----------------------|
| int      | 1, 2, 3              |
| long     | 65432345, 2345432345 |
| string   | hello                |
| boolean  | true / false         |
| deimal   | 23.34                |
| date     | 2019-01-31           |
| datetime | 2019-01-31 15:23     |
| time     | 15:23                |
| foreign  | country              |

### Constraints

#### Contraint Types
* 0: equal `=`
* 1: greater than `>`
* 2: less than `<`
* 3: greater than or equal `>=`
* 4: less than or equal `<=`
* 5: Regex 

## Config

| Arg Name    |  Possible values                                                | Default     |
|-------------|-----------------------------------------------------------------|-------------|
| sqlTable    | *SQL table name*                                                | entity name |
| isUuid      | uses uuid as identifier                                         | `false`     |
| logUser     | saves user id                                                   | `false`     |
| isLog       | add log logic in table                                          | `false`     |
| logTable    | creates mirror log table                                        | `false`     |

If the name of the table differs from the entity name, it is indicate

## Variable types

### Explicit variables

Explicit variables need to be explicitly specified when inserting a record (are part of the payload)

### Implicit variables

are not explicitly stated. E.g. taken from auth (`userId`)

### System variables

System variables are not speicified in the model.

Examples are:

* id / uuid
* dateAdded
* dateEdited
