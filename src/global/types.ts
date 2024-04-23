/**
 * ISO8601(YYYY-MM-DD hh:mm:ss) format
 *
 * @example '2000-10-31T01:30:00'
 */
declare type Timestamp = string;

declare interface GenericData<T, D> {
  type: T;
  data: D;
}

declare interface WithId<T = string> {
  id: T;
}
