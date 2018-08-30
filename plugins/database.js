const userPromise = process.BROWSER_BUILD ? System.import('~/database/user.json') : Promise.resolve(require('~/database/user.json')),
      activityPromise = process.BROWSER_BUILD ? System.import('~/database/activity.json') : Promise.resolve(require('~/database/activity.json')),
      reportPromise = process.BROWSER_BUILD ? System.import('~/database/report.json') : Promise.resolve(require('~/database/report.json'));

export {userPromise, activityPromise, reportPromise}
