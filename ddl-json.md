# JSON Data Definition Language (DDL)

## Example

```
{"models": [
  {
    name: "Country",
    table: "country",
    uuid: true,
    params: [
      {arg: "name", type: "String", "column": "name_country"},
      {arg: "code", type: "String", optional: true},
    ]
  }, {
    name: "Timezone",
    uuid: true,
    params: [
      {arg: "offset", type: "Long"},
    ]
  }, {
    name: "City",
    uuid: true,
    params: [
      {arg: "name", type: "String"},
      {arg: "country", type: "Country"},
      {arg: "timezone", type: "Timezone", optional: true},
    ]
  }, {
    name: "Address",
    uuid: true,
    params: [
      {arg: "street", type: "String"},
      {arg: "number", type: "Long", optional: true},
      {arg: "city", type: "City"},
    ]
  }, {
    name: "Company",
    uuid: false,
    params: [
      {arg: "name", type: "String"},
      {arg: "country", type: "Country", optional: true},
    ]
  }, {
    name: "Employee",
    uuid: true,
    params: [
      {arg: "name", type: "String"},
      {arg: "company", type: "Company"},
    ]
  }
]
```

*following example is work in progress*

```
{
  "name": "country",
  "config": {
    "sqlTable": "country",
    "withUuid": true,
    "withOrder" false,
    "log": false
  },
  "params": [
    {"name": "name", "fieldType": "string", "isOptional": false},
    {
      "name": "code",
      "fieldType": "string",
      "isOptional": false,
      "constraints": [
        {"value": 3, "typeId": 3}
      ]
    },
    {
      "description": "description",
      "isOptional": true,
      "ui": "textarea"
    }
  ]
}
]
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
| decimal  | 23.34                |
| date     | 2019-01-31           |
| datetime | 2019-01-31 15:23     |
| time     | 15:23                |
| foreign  | country              |

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
* 0: equal `=` (number)
* 1: greater than `>` (number(
* 2: less than `<` (number
* 3: greater than or equal `>=` (number)
* 4: less than or equal `<=` (number)
* 5: length (string)
* 6: Regex (string)
* 7: belongs to a predefined set: [9, 87, 34] (all)
* 8: async call to API (link to an API request) (string)

## Config

| Arg Name    |  Possible values                                                                 | Default     |
|-------------|----------------------------------------------------------------------------------|-------------|
| sqlTable    | *SQL table name*                                                                 | entity name |
| withUuid    | uses uuid as identifier                                                          | `false`     |
| withOrder   | allows ordering (UI: drag/drop)                                                  | `false`     |
| logUser     | saves user id                                                                    | `false`     |
| isLog       | add log logic in table                                                           | `false`     |
| logTable    | creates mirror log table                                                         | `false`     |
| extends     | extends a particular preprogrammed entity (e.g. user)                            | `null`      |
| uniqueSet   | array with combination of params that are unique (e.g `["countryId", "userId"]`) | `null`      |

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
