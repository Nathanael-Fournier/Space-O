/* eslint-disable react/no-unescaped-entities */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';

import { API_BASE_URL } from '../../utils/config';

import Spinner from '../Spinner/Spinner';

import './PilotDetail.scss';

const PilotDetail = () => {
  const [pilots, setPilots] = useState([]);
  const [loadingPilots, setLoadingPilots] = useState(true);

  const { slug } = useParams();
  const pilotToDisplay = pilots.find(
    (currentPilot) => currentPilot.slug === slug
  );

  const loadPilots = () => {
    axios
      .get(`${API_BASE_URL}/api/v1/pilot`)
      .then((response) => {
        setPilots(response.data);
      })
      .finally(() => {
        setLoadingPilots(false);
      });
  };

  useEffect(() => {
    loadPilots();
  }, []);

  if (loadingPilots === true) {
    return <Spinner />;
  }

  return (
    <div className="pilot-detail-content">
      <div className="pilot-detail-title-picture-div">
        <img
          className="pilot-detail-picture"
          src={pilotToDisplay.picture}
          alt="Illustration du pilote sélectionné"
        />
        <h1 className="pilot-detail-main-title">
          {pilotToDisplay.firstname} {pilotToDisplay.lastname}
        </h1>
      </div>
      <h2 className="pilot-detail-secondary-title">Présentation du pilote :</h2>
      <p className="pilot-detail-description">{pilotToDisplay.description}</p>
      <div className="pilot-detail-bottom-div">
        <p className="pilot-detail-characteristic">
          Age :
          <span className="pilot-detail-information">
            {pilotToDisplay.age} ans
          </span>
        </p>
        <p className="pilot-detail-characteristic">
          Ancienneté :
          <span className="pilot-detail-information">
            {pilotToDisplay.experience} année(s) d'expérience
          </span>
        </p>
      </div>
    </div>
  );
};

export default PilotDetail;
