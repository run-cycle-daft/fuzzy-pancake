// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, Event, RaceEvent, StarredEvent, LocationEvent, Race, Result, Constructor, Driver, Lap, Speed, LapTime, S3Object } = initSchema(schema);

export {
  Message,
  Event,
  RaceEvent,
  StarredEvent,
  LocationEvent,
  Race,
  Result,
  Constructor,
  Driver,
  Lap,
  Speed,
  LapTime,
  S3Object
};