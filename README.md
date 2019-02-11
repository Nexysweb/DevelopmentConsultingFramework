This repository describes a framework that can be used when delivering complex technological solutions with externals or while working internally on a product.

## Single source of truth

We believe that no data should be copied throughout the whole processes and that all assets should be iterated upon rather than having multiple versions. 
For this, we believe the best technology available is Git.

One file is created and many collaborators can iterate on it without losing any information at anytime.

see
* [String Management](./string_management)

### Continuum

Typically, there are different media on which information is shared however the overlap is important between these different media. A typical example is a presentation containing workflows that are then replicated in the documentation. Working with files that can be reused and saved in one place makes it easy to create presentations quickly based on an existing documentation or generate documentation from a presentation.

### Open source files and no binary

When working on assets, use open format. We find `svg` files extremely convenient since they can be visualised in any browser and edited in many software.

We discourage:

* the use of binary file such as PNG, JPG, etc (except when it HAS to be binary, e.g. screenshot)
* the use of proprietary files: visio, MS office, .ps, etc. Since only users having these softwares installed can preview these files. Also, mostly, these files are not suited for version control since they are binary files  

### No copy, no loss

With that way of working, no file is ever deleted, there are no `myFile_v1_12.3_john.docx` type of file which are very hard to manage and everybody can access ALL resources at anytime on any media simply via a browser. 

## From the Vision to the Implementation

### Target Operating Model (TOM)

The target operating model describes the vision of the system for its stakeholders. We find it very important to have such a file so that it is always possible to "go back" to the big picture at any point in the project.

What gets really interesting when working with Git and MD docs is that files and resources can be referenced and hence it becomes very feasible to link a specific paragraph in the documentation directly to the TOM,  UI components (see sotrybook) or a specific test suites.

### Storybook

https://storybook.js.org/

We find the storybook to be extremely helpful to bridge the gap between the technical team and the business team. We suggest to use it to have the dev team focusing solely on UI/UX and then iterate with the business team outside of the app context. 


## UI Library

There are many UI libraries available today and relying on them mostly significantly fasten the development process. We think you should not be 100% dependent on any third party library and for this we have come up with a "UI props vocabulary" that I think really helps developer be more efficient. The idea is to *wrap* all components from a foreing library into your component with props that are well defined and that are always the same across all your projects. 

[UI Props Page](./UI-props/index)
