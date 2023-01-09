import { writable } from 'svelte/store';
import { scheduleByWeek } from './schedule';
import { lessons } from './helpers/importLessons';

let days = {}; // tracker for course iteration counts

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


export const courses = writable([
	{
		code: 'dsgn-270',
		title: "Web Design Theory and Social Media Concepts",
		days: 9,
		type: 'technical',
		status: 'open'
	},
	{
		code: 'cpnt-201',
		title: "Web Design Tools and Techniques",
		days: 8,
		type: 'technical',
		status: 'open'
	},
	{
		code: 'cpnt-260',
		title: "Web Page Construction Fundamentals",
		days: 10,
		type: 'technical',
		status: 'closed'
	},
	{
		code: 'cpnt-262',
		title: "Web Client and Server Programmings",
		days: 20,
		type: 'technical',
		status: 'closed'
	},
	{
		code: 'cpnt-200',
		title: "Content Management Systems",
		days: 7,
		type: 'technical',
		status: 'closed'
	},
	{
		code: 'cpnt-265',
		title: "The Business of the Web",
		days: 11,
		type: 'technical',
		status: 'closed'
	},
	{
		code: 'cpnt-264',
		title: "Career and Consulting Essentials",
		days: 4,
		type: 'support'
	},
	{
		code: 'cpln-240',
		title: "Guest Speaker Day",
		days: 1,
		type: 'support'
	},
]);

export const lessonsById = writable(lessonsObj);