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

### API Call

### Email sending
