# **Project**
This project it's a simple vue3 scaffold application ready to develop.
It contains the most common libraries and tools to start a new project.
Kind of a boilerplate, that you can use to start a new project.

You can fork this project and use it as a base for your new project.
We recomend you to check in **packages.json** if you need to update any library.


## **Project setup**
 If you use **VSCODE** it's **strongly** recommended to open the project using the ***.code-workspace** file. This will ensure that the correct settings are used for the project.
 This way you can also use the workpace functionalities like the integrated terminal, the debugger, etc.

 We also recomend you to install the extensions provided as recomendations in the **.code-workspace** file.
 
 Just pressing **F5** will start the project in debug mode, also installing the dependencies if never installed before.

## **Install dependencies**
This project uses **npm** as package manager, so you need to install the dependencies using the following command:
```bash
npm install
```

### **Compiles and minifies for production**

You could do it manually using the following command:
```bash
npm run build
```



## **Project Structure**

The project is structured in the following way:
- **code/client/src** contains the source code of the project
- **code/client/src/assets** contains the assets of the project
- **code/client/src/components** contains the components of the project
- **code/client/src/composables** contains the composables of the project
- **code/client/src/enums** contains the enums of the project
- **code/client/src/locales** contains the locales of the project
    - **code/client/src/locales/messages** contains the locales messages of the project
    - **code/client/src/locales/types** contains the locales types of the project
- **code/client/src/models** contains the models of the project
- **code/client/src/plugins** contains the plugins of the project
    - **code/client/src/plugins/vuetify** contains the vuetify plugin of the project
    - **code/client/src/plugins/webfontloader** contains the webfontloader plugin of the project
    - **code/client/src/plugins/i18n** contains the configuration the internationalization
    - **code/client/src/plugins/utils** contains the some utility functions
- **code/client/src/router** contains the router of the project
- **code/client/src/services** contains the services of the project
- **code/client/src/store** contains the state management of the project
- **code/client/src/types** contains the types that are not related directly to business of the project
- **code/client/src/views** contains the views of the project
- **code/server** contains the node.js code to serve vue application

# **Icons**

As we use **Vuetify** as UI library, we use the **Material Design Icons**. You can find the icons in the following link: https://materialdesignicons.com/



## Using the Iconify
As this project also use **Iconify** library to load the icons. You can find the icons in the following [link]:(https://icon-sets.iconify.design) 
You can find a very complete list of icons in the following [link](https://icones.js.org/)
Lets supose you want to add a **youtube** icon from material design. You can do it like:
```html
<template>
    <IconifyMdiYoutubeIcon color="#15CA82"/>
</template>
<script setup lang="ts">
    import YoutubeIcon from '~icons/mdi/youtube';

</script>
```
or 
```html
<template>
    <Icon icon="mdi:youtube" color="#15CA82" width="56" :inline="true"/>
</template>
<script setup lang="ts">
    import {Icon} from '@iconify/vue';
</script>
```

## Adding a new icon collection 
If you want to add a new icon collection, you can do it in the following way:
 - Go to vite.config.ts file
    - Add the new icon collection in the **Plugins->Components->Resolvers->ViteIconsResolver->enabledCollections** section
# Autoimport
This project uses an [autoimport](https://www.npmjs.com/package/unplugin-auto-import) plugin to import what is passed to it automatically.
To configure what is imported automatically, you can modify the **vite.config.ts** file in **AutoImport** section.

# Assets Generator
This project uses library to help you to generate assets. You can find the library in the following [link](https://www.npmjs.com/package/vue-cli-plugin-assets-generator)

## **Project Libraries**
This project uses the following libraries:
- **[Vue3](https://www.npmjs.com/package/vue)** as the main framework
- **[Vuetify-3](https://www.npmjs.com/package/vuetify)** as the UI framework
- **[Pinia](https://www.npmjs.com/package/pinia)** as state management
- **[Vue Router](https://www.npmjs.com/package/vue-router)** as router
- **[Vite](https://www.npmjs.com/package/vite)** as build tool
- **[Iconify](https://www.npmjs.com/package/@iconify/vue)** as icon framework
- **[Vue I18n](https://www.npmjs.com/package/vue-i18n)** as internationalization framework
- **[Vue Use](https://www.npmjs.com/package/@vueuse/core)** as utility library
- **[Loadash](https://www.npmjs.com/package/lodash)** as utility library
- **[Axios](https://www.npmjs.com/package/axios)** as http client
- **[UUID](https://www.npmjs.com/package/uuid)** as uuid generator
- **[Assets Generator](https://www.npmjs.com/package/vue-pwa-asset-generator)** as assets generator