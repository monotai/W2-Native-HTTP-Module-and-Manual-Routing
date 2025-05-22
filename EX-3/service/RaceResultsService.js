import fs from "fs";
import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";

/**
 * This class handle the race results management system.
 */
export class RaceResultsService {
  /**
   * The list of race results.
   * @type {Array<RaceResult>}
   * @private
   */
  _raceResults = [];

  get raceResults() {
    return this._raceResults;
  }

  /**
   * Adds a new race result to the race list.
   * @param {RaceResult} result - The prace result.
   */
  addRaceResult(result) {
    // TODO
    if (!(result instanceof RaceResult)) {
      throw new Error('Result must be an instance of RaceResult.');
    }
    this._raceResults.push(JSON.parse(JSON.stringify(result)));
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    if (typeof filePath !== 'string') {
      throw new Error('File path must be a string.');
    }
    const data = JSON.stringify(this._raceResults, null, 2);
    fs.writeFileSync(filePath, data, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file', err);
      } else {
        console.log('Data saved successfully!');
      }
    });
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    if (typeof filePath !== 'string') {
      throw new Error('File path must be a string.');
    }
    if (!fs.existsSync(filePath)) {
      console.error('File does not exist:', filePath);
      return false;
    }
    this._raceResults = fs.readFileSync(filePath, 'utf8');
  }

  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participantId - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participantId, sport) {
       // TODO
       if (typeof participantId !== 'string' || typeof sport !== 'string') {
      throw new Error('Participant ID and sport type must be strings.');
      }
      const result = this._raceResults.find(item => item.result.participant_id === participantId && item.result.sport === sport);
      return result ? result.result.time : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
        if (typeof participantId !== 'string') {
          throw new Error('Participant ID must be a string.');
        }
        var totalDuration = 0;
        const results = this._raceResults.forEach(item => {
          if (item.participant_id == participantId){
            totalDuration += item.time._totalSeconds;
          }
        });
        if (totalDuration === 0) {
          return null;
        }
        return new Duration(totalDuration);
  }
}
