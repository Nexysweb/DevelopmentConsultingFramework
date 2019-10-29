# Requirement

## Characteristics of a Good Requirement

*the following has been taken and copied from [Informit](http://www.informit.com/articles/article.aspx?p=1152528&seqNum=4)*

A requirement needs to meet several criteria to be considered a “good requirement” [HUL05][LEF03] [LUD05][YOU01].
Good requirements should have the following characteristics:

* Unambiguous
* Testable (verifiable)
* Clear (concise, terse, simple, precise)
* Correct
* Understandable
* Feasible (realistic, possible)
* Independent
* Atomic
* Necessary
* Implementation-free (abstract)

Besides these criteria for individual requirements, three criteria apply to the set of requirements. The set should be

* Consistent
* Nonredundant
* Complete


## Requirements workflow

![requirements workflow](requirements-workflow.svg)

 `t`: output from UAT
 `r`: requirement
 `i`: issue
 
 note that
 * one `t` can point to many `r`
 * two different `t` can point to the same `r`
 * one `r` can point to many `i`
 * ideally, two different `r` never point to the same `i`
