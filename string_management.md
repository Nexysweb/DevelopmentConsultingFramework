# String Management

String management and internationalization (i18n) is a consideable task, often underestimated.

We define the following types of strings/texts:

* system strings
* emails
* application content

## System strings

These strings are usually saved in a hashmap in the application in the form of `key` ->`value`.
There is one file per language.

To manage them we use the translation module of Digis which allows an easy coordination with 3rd parties: translators etc.
Once the texts are updated, all files can be imported in the application. We recommend to add this to the CI/CD pipeline so that texts are always refreshed when the application is deployed.

It important for all stakeholders to understand that these texts cannot be updated in realtime since they require a "refresh" to be upated in the application.

## Emails

Emails are an important part of any systems and their content needs to becontinuously manged and kept up to date.

We use the Email module of Digis to manage emails. This allows to manage different languages and to separate their management from the application. Unlike system strings, the update is immediately reflected in the live system.

## Application Content.

Some applications allow content generation. In that case, special interfaces have to be built to manage these. How texts are then managed then depends on how the application was designed and on the particular use case.
