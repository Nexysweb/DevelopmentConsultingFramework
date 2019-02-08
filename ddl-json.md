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


| Arg Name   |  Possible values                                                | Default     |
|------------|-----------------------------------------------------------------|-------------|
| Name       | *field name*                                                    | -           |
| fieldType  | {int, long, string, decimal, boolean, date, datetime, foreign}  | string      |
| isOptional | true/false                                                      | `false`     |
| constraints| [see section](#constraints)                                                     | `[]`        |
| ui         | {textarea, datepicker, slider, etc..}                           | `fieldType` |

### Constraints

#### Contraint Types
* 0: equal
* 1: greater than
* 2: less than
* 3: greater than or equal
* 4: less than or equal
* 5: Regex

## Variable types

### Explicit variables

Explicit variables need to be explicitly specified when inserting a record

### System variables

System variables are not speicified in the model.

Examples are:

* id / uuid
* dateAdded
* dateEdited
