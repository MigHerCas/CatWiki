import React from 'react';
import MainCatPic from '../assets/images/cat5.jpg';
import LazyImage from '../utils/LazyImage';

export default function BreedDetails(): JSX.Element {
  return (
    <section className="breed-details">
      <div className="left-column">
        <div className="breed-details__image-wrapper">
          <LazyImage
            className="breed-details__image radius"
            src={MainCatPic}
            alt="Cat pic"
          />
        </div>
      </div>
      <div className="right-column">
        <h2 className="breed-details__title">Bengal</h2>
        <p className="breed-details__description">
          Bengals are a lot of fun to live with, but they`re definitely not the
          cat for everyone, or for first-time cat owners. Extremely intelligent,
          curious and active, they demand a lot of interaction and woe betide
          the owner who doesn`t provide it.
        </p>
        <div className="breed-details__stats">
          <ol className="breed-details__stats-list">
            <li className="breed-details__features-row">
              <strong>Temperament: </strong>
              <span>Alert</span>
              <span>Agile</span>
              <span>Energetic</span>
              <span>Demanding</span>
              <span>Intelligent</span>
            </li>
            <li className="breed-details__features-row">
              <strong>Temperament: </strong>
              <span>Alert</span>
              <span>Agile</span>
              <span>Energetic</span>
              <span>Demanding</span>
              <span>Intelligent</span>
            </li>
          </ol>
          <table className="breed-details__stats-table">
            <tbody>
              <tr>
                <th>
                  <strong>Adaptability: </strong>
                </th>
                <td>
                  <span className="breed-details__stat-cell breed-details__stat-cell--filled" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
              </tr>
              <tr className="spacer" />
              <tr>
                <th>
                  <strong>Adaptability: </strong>
                </th>
                <td>
                  <span className="breed-details__stat-cell breed-details__stat-cell--filled" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
              </tr>
              <tr className="spacer" />
              <tr>
                <th>
                  <strong>Adaptability: </strong>
                </th>
                <td>
                  <span className="breed-details__stat-cell breed-details__stat-cell--filled" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
              </tr>
              <tr className="spacer" />
              <tr>
                <th>
                  <strong>Affection level:</strong>
                </th>
                <td>
                  <span className="breed-details__stat-cell breed-details__stat-cell--filled" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
                <td>
                  <span className="breed-details__stat-cell" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
