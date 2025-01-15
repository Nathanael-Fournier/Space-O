/* eslint-disable react/no-unescaped-entities */
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchPilotDetail } from '../../actions/pilots';

import Spinner from '../Spinner/Spinner';

import './PilotDetail.scss';

const PilotDetail = () => {
  const dispatch = useDispatch();
  const pilotDetail = useSelector((state) => state.pilots.pilotDetail);
  const loadingPilotDetail = useSelector(
    (state) => state.pilots.loadingPilotDetail
  );
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchPilotDetail(slug));
  }, [dispatch, slug]);

  if (loadingPilotDetail === true) {
    return <Spinner />;
  }

  return (
    <div className="pilot-detail-content">
      <div className="pilot-detail-title-picture-div">
        <img
          className="pilot-detail-picture"
          src={pilotDetail.picture}
          alt="Illustration du pilote sélectionné"
        />
        <h1 className="pilot-detail-main-title">
          {pilotDetail.firstname} {pilotDetail.lastname}
        </h1>
      </div>
      <h2 className="pilot-detail-secondary-title">Présentation du pilote :</h2>
      <p className="pilot-detail-description">{pilotDetail.description}</p>
      <div className="pilot-detail-bottom-div">
        <p className="pilot-detail-characteristic">
          Age :
          <span className="pilot-detail-information">
            {pilotDetail.age} ans
          </span>
        </p>
        <p className="pilot-detail-characteristic">
          Ancienneté :
          <span className="pilot-detail-information">
            {pilotDetail.experience} année(s) d'expérience
          </span>
        </p>
      </div>
    </div>
  );
};

export default PilotDetail;
