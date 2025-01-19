// Importe le hook `useEffect` qui permet d'exécuter des effets secondaires dans un composant fonctionnel.
import { useEffect } from 'react';
// Importe le hook `useLocation` qui permet d'accéder à l'objet `location` contenant des informations sur l'URL actuelle.
import { useLocation } from 'react-router-dom';

// Ce custom hook permet de faire défiler la page en haut automatiquement lors d'un changement de route.
const useScrollAuto = () => {
  // Récupère le chemin actuel de l'URL
  const { pathname } = useLocation();

  // Utilisation de l'effet pour déclencher un scroll en haut chaque fois que le chemin change
  useEffect(() => {
    window.scrollTo(0, 0); // Fait défiler la fenêtre au tout début de la page (en haut à gauche)
  }, [pathname]); // Le hook est exécuté chaque fois que le `pathname` change
};

// Export du custom hook.
export default useScrollAuto;
