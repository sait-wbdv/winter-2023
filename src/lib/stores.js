import { writable } from 'svelte/store';
import { scheduleByWeek } from './schedule';
import { lessons } from './helpers/importLessons';

let lessonsObj = {};
lessons.forEach((lesson) => {
  lessonsObj[`${lesson.code}/${parseInt(lesson.day)}`] = lesson
});

let prevLessonId = '';

export const schedule = writable(scheduleByWeek.map((week) => {
  return week.map((day) => {
    let lessonId = '';

    if(day.type === 'lesson') {
			lessonId = `${day.code}/${day.day}`;

			// Spice up the base lesson with schedule-specific 	info
			lessonsObj[lessonId].date = day.date;
			lessonsObj[lessonId].prev = prevLessonId;
			lessonsObj[lessonId].next = ''; // populates on next iteration
			if (prevLessonId) {
				lessonsObj[prevLessonId].next = lessonId;
			}
			prevLessonId = lessonId;

      const {title, excerpt, status, path, fileName } = lessonsObj[lessonId];
      const codeLabel = day.code.toUpperCase().replace('-', ' ');
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