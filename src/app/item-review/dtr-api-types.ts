import { DtrD2Vote } from './d2-dtr-api-types';

/** Information about the reviewer. Consistent between D1 and D2. */
export interface DtrReviewer {
  membershipType: number;
  membershipId: string;
  displayName: string;
}

/** A user's review returned from DTR. */
export interface DimUserReview {
  /** The DTR review ID. */
  id: string;
  /**
   * This is not returned from DTR, it's calculated on our end.
   * Will be set on reviews associated with any other reviewer that the user reports.
   */
  isIgnored?: boolean;
  /**
   * Is this reviewer a featured reviewer?
   * Broken in D2.
   */
  isHighlighted: boolean;
  /**
   * Was this review written by the DIM user that requested the reviews?
   * Broken in D2.
   */
  isReviewer: boolean;
  /**
   * Pros.
   * Shouldn't be present (yet).
   */
  pros: string;
  /**
   * Cons.
   * shouldn't be present (yet).
   */
  cons: string;
  /** Timestamp that DTR received the review. */
  timestamp: Date;
  /** Who reviewed it? */
  reviewer: DtrReviewer;
}

/** Review that a user's working with */
export interface DimWorkingUserReview {
  /** Do we treat this as a submitted (untouched) review? */
  treatAsSubmitted: boolean;
  /** Pros - reserved for future use. */
  pros: string;
  /** Cons - reserved for future use. */
  cons: string;
}

/**
 * Data associated with item reviews.
 * Look for D1CachedItem/D2CachedItem for more specifics.
 */
export interface DtrRating {
  /** Reference ID (weapon hash ID). */
  readonly referenceId: number;
  /** The rating, based off of information from a fetch. */
  readonly overallScore: number;
  /** The number of reviews that the item has. */
  readonly ratingCount: number;
  /** The number of highlighted reviewers. */
  readonly highlightedRatingCount: number;
  /**
   * When was the rating data last updated?
   */
  readonly lastUpdated: Date;
  /** The roll (perk hashes in the form that DTR expects). */
  readonly roll: string | null;

  /** The votes for a single item. Includes ratings with and without review text. */
  votes?: DtrD2Vote;
  /** The votes that have review text along with them. */
  reviewVotes?: DtrD2Vote;
}
