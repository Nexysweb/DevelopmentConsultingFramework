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
},
{
    "name":"ProductEnvVar",
    "permissions": [
      {"name": "product_ci", "type": "w"},
      {"name": "mypermission", "attributeVar": {"user": {"id": true}, "type": "i", "implicitVar": "userId" }}
    ],
    "params":[
      {"arg": "instance", "type":"Instance", "column":"instance_id","optional":false,
        "permissions": [{"name": "product_ci", "readOrWrite": "w"}]
      },
      {"arg": "envId", "type":"Int","optional":false},
      {"arg": "product", "type":"Product", "column": "product_id","optional":false},
      {"arg": "productService", "type":"ProductService", "column": "product_service_id","optional":true},
      {"arg": "secretKey", "type":"String", "column": "keyy","optional":false},
      {"arg": "value", "type":"String","optional":false},
      {"arg": "logUser", "type":"User", "column": "log_user_id","optional":false},
      {"arg": "logDateAdded", "type":"LocalDateTime","optional":false}
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
* 1: equal `=` (number)
* 2: greater than `>` (number(
* 3: less than `<` (number
* 4: greater than or equal `>=` (number)
* 5: less than or equal `<=` (number)
* 6: length (string) => https://stackoverflow.com/questions/9043820/regex-to-match-words-of-a-certain-length
* 7: Regex (string)
* 8: belongs to a predefined set: [9, 87, 34] (all)
* 9: async call to API (link to an API request) (string)

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
