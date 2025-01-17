# Materia - Addon Mailjet

Send emails in your materia applications with your mailjet account. This addon uses node-mailjet under the hood.

## Prerequisites

You need a Mailjet account to use this addon.

## Features

- Send simple emails or templates
- Statistics for your Mailjet ApiKey
- Manage your Mailjet contacts

## Installation from NPM

In your Materia application, run `npm install @materia/mailjet` or `yarn add @materia/mailjet`

Restart Materia Designer

## Installation from local files

Clone this repository:

```
git clone git@github.com:materiahq/materia-mailjet.git
cd materia-mailjet
```

Then install dependencies and build:

```
yarn
yarn build
```

To test your addon locally before publishing it to NPM, use `npm link`:

```
cd dist && npm link
```

and in your materia application

```
npm link @materia/mailjet
```

then add `"@materia/mailjet"` in the links array of the materia.json configuration file - it will let Materia knows of the existance of the addon.
