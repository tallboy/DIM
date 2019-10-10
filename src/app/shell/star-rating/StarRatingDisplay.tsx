import React from 'react';
import { AppIcon, starIcon, starOutlineIcon } from '../icons';
import _ from 'lodash';
import classNames from 'classnames';
import './star-rating.scss';

export function StarRatingDisplay({ rating }: { rating: number }) {
  rating = Math.floor(rating);
  return (
    <span>
      {_.times(5, (index) => (
        <AppIcon
          key={index}
          icon={index < rating ? starIcon : starOutlineIcon}
          className={classNames({ filled: index < rating })}
        />
      ))}
    </span>
  );
}
