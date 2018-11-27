# Workflow

Workflows are an intergral part of business processes. We formalise them here so that their implementation is easier and different stakeholders can speak the same language.

We will formalise a workflow as a [finite state machine](https://en.wikipedia.org/wiki/Finite-state_machine) that is made of `n` states (nodes) and `m` transitions (vertices).

It is important to note here that all states have at least one incoming or outcoming transition and that all states are somehow connected (no independent set of states and transitions within the state machine)

## Permissions

permissions are assigned to states, so that only users with the right permission can access a particular state.

## Actions

Actions are associated by
