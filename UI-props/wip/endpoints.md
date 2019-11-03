```
POST /entity/list
POST /entity/xlsx
POST /entity/:name/insert
POST /entity/:name/:uuid/update
POST /entity/detail
POST /entity/:name/:uuid/delete

#POST /entity/insert
#POST /entity/update
#POST /entity/delete
```

One endpoint that serves everything:

```
{
	"action": xxx,
	"entity": {
		"name": "Book", // name of entity of interest,
		"uuid": "xxxx-xxxx" // uid, if required
	},
  "payload": {}
}
```

## Associated Entities

## `1-n`

### Files

`POST /entity/file`

### Additional Properties

`POST /entity/property` 

### Address

`POST /entity/address`

### Thread

`POST /entity/thread`

### Status

`POST /entity/status` 

- link with workflow?

## `n-n`

### Assign user

`POST /entity/user`

```
{
  "userId": 3
}
```

# UI

## Scenarios

Every entity has a `scenario` associated to it that describes its data flow (note that is independent from permissions). We can also imagine a case where the same entity has different scenarios (e.g. admin has a different experience than a normal user)

* inline editing
* modal editing (we do not implement this)
* list page -> edit page
* list page -> detail page -> edit page (toggle mechanism)

