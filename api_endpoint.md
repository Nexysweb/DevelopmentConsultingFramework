# API Endpoint Architecture

When interacting with a data model (CRUD), we think that the traditional `GET`, `POST`, `PUT`, `DELETE` HTTP verbs request for structuring a CRUD REST API can be hard to maintain and to work with.

Rather, we prefer to leverage JSON and decrease the amount of endpoints. Also to avoid errors while parsing requests that have parameters in their URL (i.e. `/user/:uuid/detail`), we only have `POST` endpoints with no query parameters (this rule doesn't have to be followed all the time but we think it helps keeping consistency across the API endpoints).

## Structure Proposition for an API that interacts with a CRUD

All endpoints are `POST` endpoints with two attributes: `params` and `data`. Params will give extra information about the query to be made (these are typically what would be embedded in the URL or sent as query parameters) and `data` which is the traditional `payload` (so data that are inserted or updated).

### List

in its most primitive form no payload is required
```
{}
```

#### Filter

let's say we would like to filter by a certain attribute (e.g. by Country)

```
{"params": {"filters": {"country": {"Germany"}}}}
```

### Detail

When retrieving a single record

```
{"params": {"uuid" : "6d87e1ad-5fbe-4898-9656-2c6ba32d3026"}}
```

When uniquely identifiying resources we highly recommend working with UUID (avoid IDs, strings, etc)

### Insert

When inserting a new record. Here `params` can be ignored.

```
{"data": { JSON Object that will be inserted}}
```

#### Example

say we are inserting a new record in an entity `Car`. The expected attributes are `model`, `brand`.

```
{"data":
  {
    "model": "Model S",
    "brand": "Tesla",
    "url": "https://www.topgear.com/car-reviews/tesla/model-s"
  }
}
```

#### Insert multiple
```
{"data": 
  [
    { JSON Object 1 that will be inserted},
    { JSON Object 2 that will be inserted},
    { JSON Object 3 that will be inserted},
    ...
  ]
}
```


### Update

When inserting a new record. Here `params` can be ignored.

```
{
  "params": {"uuid" : "6d87e1ad-5fbe-4898-9656-2c6ba32d3026"},
  "data": { JSON Object that will be updated}
}
```

### Delete

```
{"params": {"uuid" : "6d87e1ad-5fbe-4898-9656-2c6ba32d3026"}}
```

#### Delete Multiple

```
{"params": [
  {"uuid" : "6d87e1ad-5fbe-4898-9656-2c6ba32d3026"},
  {"uuid" : "6d12e1ad-5fbe-4898-9656-2c6ba32d3026"}
]}
```

## Realtime and GraphQL

Having a consistent way of interacting the data model allows to very easily create additional layers on top of it. Typically a GraphQL server or a websocket server without needing to map every single endpoint manually.

## resources

https://medium.com/@tlhunter/is-it-time-to-replace-rest-with-rpc-1304379456a2

