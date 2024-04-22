const { google } = require('googleapis');
const moment = require('moment');

const API_KEY=''

const calendar = google.calendar({
    version: 'v3',
    auth: API_KEY,
});

const calendar_id = 'f9fcb65f2ff51108fbd3f6f5dc9760465ff8e8241118b30ee22d62326c35c9f7@group.calendar.google.com';
const startTime = moment('2024-04-10T00:00:00Z');
const endTime = moment('2024-04-29T23:59:59Z');

async function getBusy(id, startTime, endTime) {
    try {
        const res = await calendar.freebusy.query({
            key: API_KEY,
            requestBody: {
                timeMin: startTime.toISOString(),
                timeMax: endTime.toISOString(),
                items: [{ id: id }],
            },
        });

        const busyIntervals = res.data.calendars[id].busy || [];
        return busyIntervals;
    } catch (error) {
        console.log(error)
        return [];
    }
}

getBusy(calendar_id, startTime, endTime).then(intervals=>{
    console.log(intervals)
})




