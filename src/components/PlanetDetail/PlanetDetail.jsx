/* eslint-disable react/no-unescaped-entities */
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchPlanetDetail } from '../../actions/planets';

import Spinner from '../Spinner/Spinner';

import './PlanetDetail.scss';

const PlanetDetail = () => {
  const dispatch = useDispatch();
  const planetDetail = useSelector((state) => state.planets.planetDetail);
  const loadingPlanetDetail = useSelector(
    (state) => state.planets.loadingPlanetDetail
  );
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchPlanetDetail(slug));
  }, [dispatch, slug]);

  if (loadingPlanetDetail === true) {
    return <Spinner />;
  }

  return (
    <div className="planet-detail-content">
      <div className="planet-detail-title-picture-div">
        <img
          className="planet-detail-picture"
          src={planetDetail.picture}
          alt="Illustration de la planète sélectionnée"
        />
        <h1 className="planet-detail-main-title">{planetDetail.name}</h1>
      </div>
      <h2 className="planet-detail-secondary-title">
        Présentation de la planète :
      </h2>
      <p className="planet-detail-description">{planetDetail.description}</p>
      <h3 className="planet-detail-secondary-title planet-detail-technical">
        Informations complémentaires :
      </h3>
      <div className="planet-detail-bottom-div">
        <p className="planet-detail-characteristic">
          Envergure :
          <span className="planet-detail-information">
            {planetDetail.size} KM de diamètre
          </span>
        </p>
        {planetDetail.name !== 'Soleil' && (
          <p className="planet-detail-characteristic">
            Distance du soleil :
            <span className="planet-detail-information">
              {planetDetail.sun_distance} millions de KM
            </span>
          </p>
        )}
        <p className="planet-detail-characteristic">
          Température moyenne :
          <span className="planet-detail-information">
            {planetDetail.temperature} °C
          </span>
        </p>
        <p className="planet-detail-characteristic">
          Composition atmosphérique :
          <span className="planet-detail-information">
            {planetDetail.composition}
          </span>
        </p>
        <p className="planet-detail-characteristic">
          Souveraineté :
          <span className="planet-detail-information">
            {planetDetail.faction.name}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PlanetDetail;
