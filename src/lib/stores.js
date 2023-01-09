import { writable } from 'svelte/store';
import { scheduleByWeek } from './schedule';
import { lessons } from './helpers/importLessons';

let days = {}; // tracker for course iteration counts
let courseDays = {
	'dsgn-270': [],
	'cpnt-200': [],
	'cpnt-201': [],
	'cpnt-260': [],
	'cpnt-262': [],
	'cpnt-265': [],
	'cpnt-264': [],
	'cpln-240': []
}; // tracker for lesson dates by course

let lessonsObj = {};
lessons.forEach((lesson) => {
  lessonsObj[`${lesson.code}/${parseInt(lesson.day)}`] = lesson
});
let prevLessonId = '';

export const schedule = writable(scheduleByWeek.map((week) => {
  return week.map((day) => {
    let lessonId = '';

    if(day.type === 'lesson') {
			let title = 'TBA';
			let excerpt = null;
			let status = 'draft';
			let path = null;
			let fileName = null;
			let codeLabel = null;

			if (typeof days[day.code] === 'undefined') {
				days[day.code] = 1;
				day.day = days[day.code];
			} else {
				days[day.code]++;
				day.day = days[day.code];
			}

			lessonId = `${day.code}/${parseInt(days[day.code])}`;
			courseDays[day.code].push(day.date);

			if (lessonsObj[lessonId]) {
				// Spice up the base lesson with schedule-specific 	info
				lessonsObj[lessonId].date = day.date;
				lessonsObj[lessonId].prev = prevLessonId.replace('/', '/day-');
				lessonsObj[lessonId].next = ''; // populates on next iteration
				if (prevLessonId && lessonsObj[prevLessonId]) {
					lessonsObj[prevLessonId].next = lessonId.replace('/', '/day-');
				}				
				({title, excerpt, status, path, fileName, codeLabel } = lessonsObj[lessonId]);
			}
			prevLessonId = lessonId;

      return {...day, title, excerpt, status, codeLabel, path, fileName};
    } else {
      return day;
    }
  })
})
);

console.log(courseDays);

export const courses = writable([
	{
		code: 'dsgn-270',
		codeLabel: 'DSGN 270',
		title: "Web Design Theory and Social Media Concepts",
		days: courseDays['dsgn-270'],
		type: 'technical',
		status: 'open'
	},
	{
		code: 'cpnt-201',
		codeLabel: 'CPNT 201',
		title: "Web Design Tools and Techniques",
		days: courseDays['cpnt-201'],
		type: 'technical',
		status: 'open'
	},
	{
		code: 'cpnt-260',
		codeLabel: 'CPNT 260',
		title: "Web Page Construction Fundamentals",
		days: courseDays['cpnt-260'],
		type: 'technical',
		status: 'closed'
	},
	{
		code: 'cpnt-262',
		codeLabel: 'CPNT 262',
		title: "Web Client and Server Programmings",
		days: courseDays['cpnt-262'],
		type: 'technical',
		status: 'closed'
	},
	{
		code: 'cpnt-200',
		codeLabel: 'CPNT 200',
		title: "Content Management Systems",
		days: courseDays['cpnt-200'],
		type: 'technical',
		status: 'closed'
	},
	{
		code: 'cpnt-265',
		codeLabel: 'CPNT 265',
		title: "The Business of the Web",
		days: courseDays['cpnt-265'],
		type: 'technical',
		status: 'closed'
	},
	{
		code: 'cpnt-264',
		codeLabel: 'CPNT 264',
		title: "Career and Consulting Essentials",
		days: courseDays['cpnt-264'],
		type: 'support'
	},
	{
		code: 'cpln-240',
		codeLabel: 'CPLN 240',
		title: "Guest Speaker Day",
		days: courseDays['cpln-240'],
		type: 'support'
	},
]);

export const lessonsById = writable(lessonsObj);