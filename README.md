# UI Component Framework


This framework presents a way to structure a low level frontend UI component library. For every new project we suggest to wrap a UI library (e.g. Material, Ant design, ...) with the following structure so that your team is not dependent on any particulat framework or version furthermore these concepts can then be applied across different media (web browser, mobile phone, etc.).

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

All form have an associated `errors` object which will handle all error messages. Every field can have multiple error messages. We suggest to linearize nested field names.

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
```
/** name of the input field */
name: React.PropTypes.string.isRequired,
/** Object of type {wrapperName: [array of errors]} */
errors: React.PropTypes.array.isRequired,
/** Wrapped input field */
children: React.PropTypes.element.isRequired,
/** Label on top of the input field (optional) */
label: React.PropTypes.string,
/** If true, red asterisk will be displayed in front of the label */
mandatory: React.PropTypes.bool,
/** If given, helper text in gray will be displayed beyond the field */
helper: React.PropTypes.string
```

#### Input

#### InputNumeric

#### Textarea

#### Select

* multiselect
* typeahead
* async

#### Checkbox

#### Toggle

#### Datepicker

#### Ricktext

#### Fileupload

### Form Generator

## List of basic components

Below is a list of basic UI components.

#### Alert

#### Badge

#### Icon

#### Loader

#### Panel

#### Progress bar

#### Table

#### Tabs

#### Tooltip

## Business Components

### Key Value

This component typically displays the content of a JSON object in the form of `key` => `value`.

#### Example

```
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@doe.com"
}
```

turns into something like:

|               |              |
| ------------- |-------------:|
| First Name    | John         |
| Last Name     | Doe          |
| Email         | john@doe.com |

### `n-n` view

#### Example

A typical example would be: company - user

|              |            |                    |
| ------------- |----------:|-------------------:|
| Company A    | User 1     | Position user 1    |
| Company B    | User 2     | Position user 2    |
| Company C    | User 3     | Position user 3    |
| Company D    | User 4     | Position user 4    |

## Layout Components

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
