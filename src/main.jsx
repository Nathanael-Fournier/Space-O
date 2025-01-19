// Importation de la fonction `createRoot` de React 18 pour gérer le rendu de l'application.
import { createRoot } from 'react-dom/client';
// Importation du composant `Provider` de Redux qui permet de fournir le store Redux à l'ensemble de l'application React.
import { Provider } from 'react-redux';
// Importation du composant `BrowserRouter` pour gérer la navigation et le routage dans l'application React.
import { BrowserRouter } from 'react-router-dom';
// Importation du composant racine de l'application, `App`, qui contient toute la structure de l'interface utilisateur.
import App from './components/App/App';
// Importation du store Redux configuré, qui centralise l'état global de l'application.
import store from './store';
// Importation du fichier principal de styles SCSS pour l'application.
import './styles/index.scss';

// Création du point d'entrée React dans le DOM en utilisant l'élément avec l'ID "root".
const root = createRoot(document.getElementById('root'));

/**
 * Rendu de l'application React dans le DOM.
 * - `Provider` : Fournit le store Redux à l'application, permettant à tous les composants d'y accéder.
 * - `BrowserRouter` : Active la gestion des routes dans l'application React.
 * - `App` : Composant racine qui représente l'interface utilisateur.
 */
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
