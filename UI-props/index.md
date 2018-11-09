# UI Component Framework


This framework presents a way to structure a low level frontend UI component library. For every new project we suggest to wrap a UI library (e.g. Material, Ant design, ...) with the following structure so that your team is not dependent on any particulat framework or version furthermore these concepts can then be applied across different media (web browser, mobile phone, etc.).

In order to preview in VSCode press: ⇧⌘V

Most examples documented below can be seen in a storybook here: https://nexysweb.github.io/erpAnt/

## List of form components

These are components that allow the user to input data into the app.

Generally, a form encapsulates all input elements that are wrapped in a `wrapper` component.

### Input Elements

Inputs element is an abstract concept. All the following form components inherit from `input element`. The props are described below

|  props name               |  description                                               |   |
| --------------------------|------------------------------------------------------------|--:|
| `value`                   | default value of the input                                 | - |
| `onChange`                | function that manage onChange event                        | - |
| `values` *optional*       | (only for `select` like elements): list of possible values | - |
| `name`                    | name of the element                                        | - |
| `placeholder` *optional*  | element placeholder                                        | - |

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

### List

List renders a matrix defined by values and columns.
Its functionality and appearance is specified with a configuration object:

```
{
  edit: requestCrud.update,
  delete: requestCrud.delete
  layout: {
    simple: true,
    bodyOnly: true
  },
  filters: {
    search: { props: ['label'] },
    status: ['active', 'pending', 'rejected']
  },
  ...
}
```

there are essentially three main types of list:

* viewable (default)
* editable
* selectable


| col1          | col2         | actions
| ------------- |--------------|--------------|
| value_1_1     | value_1_2    | edit, delete
| value_2_1     | value_2_2    | edit, delete


### `n-n` view

#### Example

A typical example would be: company - user

|              |            |                    |
| ------------- |----------:|-------------------:|
| Company A    | User 1     | Position user 1    |
| Company B    | User 2     | Position user 2    |
| Company C    | User 3     | Position user 3    |
| Company D    | User 4     | Position user 4    |

## Charts Components

### Simple Charts

This components returns any of the following combinations

* line chart
* bar chart
* area chart
* scatter chart

an example of input data

```
const data = [
  {name: 'A', x: 40, y: 24},
  {name: 'B', x: 30, y: 13},
  {name: 'C', x: 20, y: 98},
  {name: 'D', x: 10, y: 19}
];

```

```
const lines = [
  {name: 'a', color: colors[0], seriesType: 'linear'},
  {name: 'b', color: colors[1], seriesType: 'linear'}
]
```

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
