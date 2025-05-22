import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
       constructor(participant_id, sport, time) {
              if (typeof participant_id !== 'string' || typeof sport !== 'string') {
                     throw new Error('Participant ID and sport type must be strings.');
              }
              if (!(time instanceof Duration)) {
                     throw new Error('Time must be an instance of Duration.');
              }
              this.participant_id = participant_id;
              this.sport = sport;
              this.time = time;
       }

       static addRaceResult(participant_id, sport_type, duration) {
              if (typeof participant_id !== 'string' || typeof sport_type !== 'string') {
                     throw new Error('Participant ID and sport type must be strings.');
              }
              if (!(duration instanceof Duration)) {
                     throw new Error('Duration must be an instance of Duration.');
              }
              const newRaceResult = new RaceResult(participant_id, sport_type, JSON.parse(JSON.stringify(duration)));
       }
  }