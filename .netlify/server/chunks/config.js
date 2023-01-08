/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

const siteTitle = 'Web Developer Fast Track';
const siteAuthor = 'Tony Grimes and Ashlyn Knox';

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
const navItems = [
	{
		title: 'Courses',
		route: '/courses'
	},
	{
		title: 'Library',
		route: '/library' 
	},
	{
		title: 'House Rules',
		route: '/house-rules'
	},
	{
		title: 'Live Stream',
		route: '' 
	},
];

export { siteAuthor as a, navItems as n, siteTitle as s };
