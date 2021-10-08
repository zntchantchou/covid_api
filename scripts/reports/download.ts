import { exec } from 'child_process';
import * as cp from 'child_process';
import * as fs from 'fs/promises';
// import * as CSV from 'csvtojson';
import { readFile } from 'fs';

// TODO create job that calls this function with the desired date daily

/**
 * @param date a string with the format dd-mm-yyyy
 * @param destinationDir path where the files should be created, from root dir (covidApi)
 */

export default function downloadByDate(
  date: string,
  targetDir: string = '../data/dailyReports',
) {
  const shellScriptPath = './scripts/reports/dl.sh';
  cp.exec(
    `sh ${shellScriptPath} ${date} ${targetDir}`,
    (err, stdout, stderr) => {
      if (err) console.log(err);
      if (stdout) console.log(stdout);
      if (stderr) console.log(stderr);
    },
  );
}

// export async function parseCSV(pathToFile: string) {
//   try {
//     const csvString = await readFile(pathToFile, 'utf-8', async(err, data) => {
//       const json = await CSV().fromString(data);
//       if(json) {
//         console.log(json, typeof json);
//         await fs.writeFile('./lookupTable.json', JSON.stringify(json));
//       }
//     });
//   } catch(e) {console.log(e)} 
// }
