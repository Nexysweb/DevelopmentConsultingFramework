# Workflow

Workflows are an intergral part of business processes. We formalise them here so that their implementation is easier and different stakeholders can speak the same language.

We will formalise a workflow as a [finite state machine](https://en.wikipedia.org/wiki/Finite-state_machine) that is made of `n` states (nodes) and `m` transitions (vertices).

It is important to note here that all states have at least one incoming or outcoming transition and that all states are somehow connected (no independent set of states and transitions within the state machine)

## State (Node)

In our workflow case, a state waits for an input from the user or a trigger.

## Transition (Vertex)

A transition moves from one state to another and executes actions in the background.

## Permissions

permissions are assigned to states, so that only users with the right permission can access a particular state.

## Actions

Every transaction has a set of actions that are associated to it. There can be different types of actions, described below

### Entity CRUD

### API Request

API requests (internal and external) are bundled in ready to use building blocks.

### Chain

A chain is a list of API calls that happen in series

#### Chain Unit

Wraps an API request and maps local workflow state (the one associated with the chain) with the API request. It also indicates in which order API requests are executed


#### Data Mappers

are functions that take a set of args `(in_1, in_2, ...)` and returns another set `(out_1, out_2, ...)`. Note that the cardinality and the individual types of `i` and `o` can be different.

Data mappers are typically included between two chain units

##### Example

As input we have a text: `Money owned: 50 USD` and we would like to extract the amount and the currency.

The data mappers hence is a function with `in = ("Money owned: 50 USD")` and `out = (50, 'USD')`

`out = f(in)`

### Email sending

is handled via API request

