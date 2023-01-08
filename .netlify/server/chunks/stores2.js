import { w as writable } from './index3.js';
import { l as lessons } from './importLessons.js';

const scheduleByWeek = [
	// Week 1
	[
		{
			date: '2023-01-09',
			type: 'lesson',
			code: 'dsgn-270'
		},
		{
			date: '2023-01-10',
			type: 'lesson',
			code: 'dsgn-270'
		},
		{
			date: '2023-01-11',
			type: 'lesson',
			code: 'dsgn-270'
		},
		{
			date: '2023-01-12',
			type: 'lesson',
			code: 'cpnt-201'
		},
		{
			date: '2023-01-13',
			type: 'lesson',
			code: 'cpnt-201'
		}
	],
	// Week 2
	[
		{
			date: '2023-01-16',
			type: 'lesson',
			code: 'cpnt-260'
		},
		{
			date: '2023-01-17',
			type: 'lesson',
			code: 'cpnt-260'
		},
		{
			date: '2023-01-18',
			type: 'lesson',
			code: 'cpnt-260'
		},
		{
			date: '2023-01-19',
			type: 'lesson',
			code: 'cpnt-264'
		},
		{
			date: '2023-01-20',
			type: 'lesson',
			code: 'cpnt-260'
		}
	],
	// Week 3
	[
		{
			date: '2023-01-23',
			type: 'lesson',
			code: 'cpnt-260'
		},
		{
			date: '2023-01-24',
			type: 'lesson',
			code: 'dsgn-270'
		},
		{
			date: '2023-01-25',
			type: 'lesson',
			code: 'dsgn-270'
		},
		{
			date: '2023-01-26',
			type: 'lesson',
			code: 'cpnt-201'
		},
		{
			date: '2023-01-27',
			type: 'lesson',
			code: 'cpnt-201'

		}
	],
	// Week 4
	[
		{
			date: '2023-01-30',
			type: 'lesson',
			code: 'cpnt-260'
		},
		{
			date: '2023-01-31',
			type: 'lesson',
			code: 'cpnt-260'
		},
		{
			date: '2023-02-01',
			type: 'lesson',
			code: 'cpnt-260'
		},
		{
			date: '2023-02-02',
			type: 'lesson',
			code: 'cpnt-260'
		},
		{
			date: '2023-02-03',
			type: 'lesson',
			code: 'cpnt-260'
		}
	],
	// Week 5
	[
		{
			date: '2023-02-06',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-02-07',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-02-08',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-02-09',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-02-10',
			type: 'lesson',
			code: 'cpnt-262'

		}
	],
	// Week 6
	[
		{
			date: '2023-02-13',
			type: 'lesson',
			code: 'dsgn-270'
		},
		{
			date: '2023-02-14',
			type: 'lesson',
			code: 'dsgn-270'
		},
		{
			date: '2023-02-15',
			type: 'lesson',
			code: 'cpnt-201'
		},
		{
			date: '2023-02-16',
			type: 'lesson',
			code: 'cpnt-201'
		},
		{
			date: '2023-02-17',
			type: 'lesson',
			code: 'cpnt-262'

		}
	],
	// Week 7
	[
		{
			date: '2023-02-20',
			type: 'holiday',
			label: 'Family Day'
		},
		{
			date: '2023-02-21',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-02-22',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-02-23',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-02-24',
			type: 'lesson',
			code: 'cpnt-264'

		}
	],
	// Week 8
	[
		{
			date: '2023-02-27',
			type: 'lesson',
			code: 'cpln-240'
		},
		{
			date: '2023-02-28',
			type: 'lesson',
			code: 'cpnt-264'
		},
		{
			date: '2023-03-01',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-03-02',
			type: 'lesson',
			code: 'dsgn-270'
		},
		{
			date: '2020-03-03',
			type: 'lesson',
			code: 'dsgn-270'

		}
	],
	// Week 9
	[
		{
			date: '2023-03-06',
			type: 'lesson',
			code: 'cpnt-201'
		},
		{
			date: '2023-03-07',
			type: 'lesson',
			code: 'cpnt-201'
		},
		{
			date: '2023-03-08',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-03-09',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-03-10',
			type: 'lesson',
			code: 'cpnt-262'

		}
	],
	// Week 10
	[
		{
			date: '2023-03-13',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-03-14',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-03-15',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-03-16',
			type: 'lesson',
			code: 'cpnt-264'
		},
		{
			date: '2023-03-17',
			type: 'lesson',
			code: 'cpnt-262'
		}
	],
	// Week 11
	[
		{
			date: '2023-03-20',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-03-21',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-03-22',
			type: 'lesson',
			code: 'cpnt-262'
		},
		{
			date: '2023-03-23',
			type: 'lesson',
			code: 'cpnt-200'
		},
		{
			date: '2023-03-24',
			type: 'lesson',
			code: 'cpnt-200'

		}
	],
	// Week 12
	[
		{
			date: '2023-03-27',
			type: 'lesson',
			code: 'cpnt-200'
		},
		{
			date: '2023-03-28',
			type: 'lesson',
			code: 'cpnt-200'
		},
		{
			date: '2023-03-29',
			type: 'lesson',
			code: 'cpnt-200'
		},
		{
			date: '2023-03-30',
			type: 'lesson',
			code: 'cpnt-200'
		},
		{
			date: '2023-03-31',
			type: 'lesson',
			code: 'cpnt-200'

		}
	],
	// Week 13
	[
		{
			date: '2023-04-03',
			type: 'lesson',
			code: 'cpnt-264'
		},
		{
			date: '2023-04-04',
			type: 'lesson',
			code: 'cpnt-264'
		},
		{
			date: '2023-04-05',
			type: 'lesson',
			code: 'cpnt-265'
		},
		{
			date: '2023-04-06',
			type: 'lesson',
			code: 'cpnt-265'
		},
		{
			date: '2023-04-07',
			type: 'holiday',
			label: 'Good Friday'

		}
	],
	// Week 14
	[
		{
			date: '2023-04-10',
			type: 'holiday',
			label: 'Easter Monday'
		},
		{
			date: '2023-04-11',
			type: 'lesson',
			code: 'cpnt-265'
		},
		{
			date: '2023-04-12',
			type: 'lesson',
			code: 'cpnt-265'
		},
		{
			date: '2023-04-13',
			type: 'lesson',
			code: 'cpnt-265'
		},
		{
			date: '2023-04-14',
			type: 'lesson',
			code: 'cpnt-265'

		}
	],
	// Week 15
	[
		{
			date: '2023-04-17',
			type: 'lesson',
			code: 'cpnt-265'
		},
		{
			date: '2023-04-18',
			type: 'lesson',
			code: 'cpnt-265'
		},
		{
			date: '2023-04-19',
			type: 'lesson',
			code: 'cpnt-265'
		},
		{
			date: '2023-04-20',
			type: 'lesson',
			code: 'cpnt-265'
		},
		{
			date: '2023-04-21',
			type: 'lesson',
			code: 'cpnt-265'
		}
	],
];

let days = {}; // tracker for course iteration counts

let lessonsObj = {};
lessons.forEach((lesson) => {
  lessonsObj[`${lesson.code}/${parseInt(lesson.day)}`] = lesson;
});
let prevLessonId = '';

const schedule = writable(scheduleByWeek.map((week) => {
  return week.map((day) => {
    let lessonId = '';

    if(day.type === 'lesson') {
			let title = 'TBA';
			let excerpt = null;
			let status = 'draft';
			let path = null;
			let fileName = null;

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
				({title, excerpt, status, path, fileName } = lessonsObj[lessonId]);
			}
			prevLessonId = lessonId;

      const codeLabel = day.code.toUpperCase().replace('-', ' ');
      return {...day, title, excerpt, status, codeLabel, path, fileName};
    } else {
      return day;
    }
  })
})
);


const courses = writable([
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

const lessonsById = writable(lessonsObj);

export { courses as c, lessonsById as l, schedule as s };
