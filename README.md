# UIPropsFramework

This framework presents a way to structure a low level frontend UI component library. 

## The request object

The request object will serve as input to any HTTP request and, in its simplest form, is defined as

```
{
  method: 'GET',
  url: '/my/url',
  data: {/* payload data */ },
}
```

Whenever an HTTP request is meant, the idea is to pass this object and nothing else in order to avoid function with args like `myFunction(url, postData, ...)` and rather have `myFunction(request, ...)` where `request` is the above well defined object.

## List of form components

These are components that allow the user to input data into the app.


### Form

The form content is saved in one object `{}` where the attribute name is the field name and its value the actual value.

#### Example

```
{
  "firstName": "John",
  "lastName": "Doe"
}
```

### Errors

All form have an associated `errors` object which will handle all error messages.

#### Example

```
{
  "firstName": ["error1", "error2"],
  "lastName": ["you have to choose a unique last name"]
}
```

### Components

#### Wrapper

This component wraps all form components and will handle errors.

##### Props



#### Input

#### InputNumeric

#### Textarea

#### Select

* multiselect
* typeahead
* async

#### Checkbox

#### Boolean

#### Datepicker

#### Ricktext

#### Fileupload

### Form Generator


## List of basic components
