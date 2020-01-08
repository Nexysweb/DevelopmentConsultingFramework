# Workflow

Graphical representation: https://docs.google.com/drawings/d/1znKoTO5zAVYrKmZebXy_5SX_3RJOhQsRAa2bhnWOBmE/edit

Workflows are an intergral part of business processes. We formalise them here so that their implementation is easier and different stakeholders can speak the same language.

We will formalise a workflow as a [finite state machine](https://en.wikipedia.org/wiki/Finite-state_machine) that is made of `n` states (nodes) and `m` transitions (vertices).

It is important to note here that all states have at least one incoming or outcoming transition and that all states are somehow connected (no independent set of states and transitions within the state machine)

## State (Node)

In our workflow case, a state waits for an input from the user or a trigger.

## Transition (Vertex)

A transition moves from one state to another and executes actions in the background.

## Actions

Every transaction has a set of actions that are associated to it. There can be different types of actions, described below

### API Request

API requests (internal and external) are bundled in ready to use building blocks.

### Chain

A chain is a list of API calls that happen in series

#### Chain Unit

Wraps an API request and maps local workflow state (the one associated with the chain) with the API request. It also indicates in which order API requests are executed

#### Data Mappers

are functions that take a set of args `(in_1, in_2, ...)` and returns another set `(out_1, out_2, ...)`. Note that the cardinality and the individual types of `i` and `o` can be different.

Data mappers are typically included between two chain units

#### Reusability and composability

chains can (and should) be reused. Given their design it is also easy to include a chain in a chain creating multi level chains.

#### Code Snippet

As part of a chain unit, one can also create a code snippet. This allows to write simple logic nevertherless having access to the whole context `ctx` which gives access to CRUD operations, email services, etc.

##### Example

As input we have a text: `Money owned: 50 USD` and we would like to extract the amount and the currency.

The data mappers hence is a function with `in = ("Money owned: 50 USD")` and `out = (50, 'USD')`

`out = f(in)`

## Async workflow

on top of the regular transition state logic, we introduce async transitions. These transitions are triggered by a time event (vs a user event). There are two types:
* delays
* cron

### Delays

Delay transitions are executed after waiting a certain time `t` after arriving at a node.

Example: password recovery expires after 24h. The transitions is triggered and the password can no longer be reset.

### CRON

CRON transition are executed if they fulfill a CRON pattern after arriving at a node. see https://en.wikipedia.org/wiki/Cron#Overview.

Example: a reminder is sent Monday at 8AM.


## Actions

Every transaction has a set of actions that are associated to it. There can be different types of actions, described below





