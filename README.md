# WebJump-ReduxPromise-ReactNative
Test for Web Jump Agency in react native


Lista de filmes usando a API aberta.

Bibibliotecas utilizadas no desenvolvimento:

• API aberta do Trakt (trakt.docs.apiary.io).

• https://www.npmjs.com/package/redux, para controle de estado.

• https://www.npmjs.com/package/redux-promise-middleware, para chamadas assíncronas no Redux.

• https://www.npmjs.com/package/axios, para acesso à API.

• https://www.npmjs.com/package/styled-components, para gerenciar CSS.


Realizar testes unitários com estas bibliotecas:


• https://www.npmjs.com/package/jest, para testes unitários de lógica.

• https://www.npmjs.com/package/@testing-library/react-native, para testes unitários de componentes.
(Após uma avaliação, foi utilizado o E2E Detox)

//--------------------------------------------------------------------------------------------

***For Detox React Native Testing Library to work, we will need:***

Download a built version of the Expo iOS app that Detox can use to hook into. 
1 - Go to the Expo Tools page (https://expo.io/tools#client) and click the “Download IPA” link. Expand the downloaded archive, then change the name of the folder to “Exponent.app”. 

2 - Create a bin folder in your project and move “Exponent.app” into it.

3 - yarn ios

4 - detox test

You can see more in: (https://blog.expo.io/testing-expo-apps-with-detox-and-react-native-testing-library-7fbdbb82ac87)






