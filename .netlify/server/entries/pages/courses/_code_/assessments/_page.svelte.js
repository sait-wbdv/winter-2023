import { c as create_ssr_component, g as escape, f as each } from '../../../../../chunks/index.js';

/* src/routes/courses/[code]/assessments/+page.svelte generated by Svelte v3.55.0 */

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data } = $$props;
	const courseLabel = data.code.toUpperCase().replace('-', ' ');
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);

	return `${($$result.head += '<!-- HEAD_svelte-1dobvxu_START -->' + `${($$result.title = `<title>${escape(courseLabel)} Assessments</title>`, "")}` + '<!-- HEAD_svelte-1dobvxu_END -->', "")}

<h1>${escape(courseLabel)} Assignments</h1>

${data.code === 'cpnt-262'
	? `<h2>Course Breakdown</h2>
<ul><li><strong>Part 1 - Vanilla Javascript: 40%</strong></li>
  <li><strong>Part 2 - VueJS and Nuxt: 60%</strong></li></ul>`
	: ``}

${data.assessments.length
	? `${each(data.assessments, assessment => {
			return `${assessment.type === 'assignment' || assessment.type === 'achievements'
			? `${assessment.status === 'published'
				? `<a href="${"assessments/" + escape(assessment.slug, true)}"><article><h3>${escape(assessment.title)}</h3>
						<p>Weight: ${escape(assessment.points)}%</p>
						${assessment.due
					? `<p>Due: ${escape(assessment.due)}</p>`
					: `<p>Due: TBA</p>`}</article>
				</a>`
				: `<article><h3>${escape(assessment.title)}</h3>
					<p>Weight: ${escape(assessment.points)}%</p>
					${assessment.due
					? `<p>Due: ${escape(assessment.due)}</p>`
					: `<p>Due: TBA</p>`}
				</article>`}`
			: ``}`;
		})}`
	: `<p>To Be Announced</p>`}`;
});

export { Page as default };
