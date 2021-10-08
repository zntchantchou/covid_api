import * as CSV from 'csvtojson';
import { readFile, readdir } from 'fs/promises';
import { formatReport } from './formatters';
import { IDailyReportValue, IRawDailyReportValue } from './types';
import { unformattedDateRgx } from './constants';
import * as lookupTable from 'scripts/lookupTable/lookupTable.json';
/**
create cron job to :  
- download new report
- parse and format new report 
- save new report 
*/

// TODO add function to dl all of data

export class DailyReportParser {
  constructor() {}

  // variables
  // private defaultFolder = `${process.cwd()}/data/dailyReports`;
  private defaultFolder = `${process.cwd()}/data/dailyTests`;

  // methods
  private async getFileNames(
    pathToFolder: string = this.defaultFolder,
  ): Promise<string[]> {
    try {
      return await readdir(pathToFolder);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  private async formatReports(filename: string) {
    const rawData = await this.parseCSV(filename);
    return rawData
      .filter(
        (r) =>
          r.Last_Update &&
          r.Lat &&
          r.Long_ &&
          r.Combined_Key &&
          this.isValidDate(r.Last_Update),
      )
      .map(formatReport)
      .map(this.addIsoCode)
  }

  private addIsoCode(report: IDailyReportValue) {
    return {
      ...report,
      iso: lookupTable.find((elt) => elt.Combined_Key === report.combinedKey)?.iso3,
    };
  }

  private async parseCSV(filename: string) {
    const csvString = await readFile(
      `${this.defaultFolder}/${filename}`,
      'utf-8',
    );
    return (await CSV().fromString(
      csvString,
    )) as unknown as IRawDailyReportValue[];
  }

  private async parseReportFiles(
    filenames: string[],
  ): Promise<IDailyReportValue[]> {
    const asJson = filenames.map(
      async (filename) => await this.formatReports(filename),
    );
    return (await Promise.all(asJson)).flat();
  }

  private isValidDate = (value: string) => unformattedDateRgx.test(value);

  public async parseReportsInFolder(pathToFolder: string = this.defaultFolder) {
    try {
      const filenames = await this.getFileNames(pathToFolder);
      return await this.parseReportFiles(filenames);
    } catch (e) {
      console.log('saveReportsInFolder', e);
    }
  }
}
