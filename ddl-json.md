# JSON Data Definition Language (DDL)

## Example

```
{
  "name": "country",
  "sql": {
    "table": "country",
    "isUuid": true,
    "log": false
  },
  "params": [
    {"name": "name", "fieldType": "string", "isOptional": false},
    {
      "name": "code",
      "fieldType": "string",
      "isOptional": false,
      constraints: [
        {"name": "must be greater or", "value": 3, "typeId": 3}
      ]
    }
  ]
}
```


## Constraints

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

Examples are:

* id / uuid
* dateAdded
* dateEdited
