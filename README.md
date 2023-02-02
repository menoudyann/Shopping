# README

# RIA1_TDD_TRAINING

RIA1_TDD_TRAINING est un projet permettant d'entraîner le TDD en JavaScript.

## Installation

Pré-requis :

* npm 8.11.0 ou ultérieure
* node v18.13.0 ou ultérieure
* git version 2.39.1.windows 1 ou ultérieure

Note : testé sur l'IDE WebStorm : version 2022.3.2

Après avoir récupéré le référentiel:

```
    npm install
```

## Webstorm

* [Activer jest dans WebStorm](https://intellij-support.jetbrains.com/hc/en-us/community/posts/115000357324-Get-rid-of-Unresolved-function-method-variable-warning-in-Jest-test-files)

```
In Preferences | Languages & Frameworks | JavaScript | Libraries, press Download..., select 'jest' from the list of available stubs, press Download and Install
```

## Utilisation

Pour tester tout le projet :

```
    npm run test
```

Pour lancer les tests d'un seul fichier :

```
    npm test [pathToTestFile.js]
```

Pour lancer les tests d'un seul fichier :

```
    npm test [pathToTestFile.js]
```


Le résultat a obtenir en début de projet :

![img.png](img.png)

Pour tester une seule classe :

```
    npm run test [className.test.js]
```

## Prise en main du projet

Une fois le code récupéré, il s'agit de le [*forker*](https://docs.github.com/en/get-started/quickstart/fork-a-repo) sur un référentiel vous appartenant. Puis de traiter les issues dans l'ordre de publication.

## Aides

Voici des sources qui vous aideront à vous lancer :

* [Les classes en Java Script](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
  * [Les accesseurs en Java Script](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/get)
  * [Les mutateurs en Java Script](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/set)
  * [Exception en Java Script](https://rollbar.com/guides/javascript/how-to-throw-exceptions-in-javascript/#)
* [Premier pas avec Jest](https://jestjs.io/docs/getting-started)
  * [Les comparateurs](https://jestjs.io/fr/docs/expect)
  * [Les exceptions](https://jestjs.io/docs/using-matchers#exceptions)
* [Convention de nommmage en Java Script](https://developer.mozilla.org/fr/docs/MDN/Guidelines/Code_guidelines/JavaScript)

## Contributing
Vos retours sont les bienvenus. Utilisez les pull requests pour des apports mineurs. Pour des modifications plus importantes, ouvrez une issue pour que l'on en discute avant.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Source 
[Make a readme](https://www.makeareadme.com/)