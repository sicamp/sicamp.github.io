module.exports = (bh) => {
    bh.match('enlisted__student', (ctx, json) => {
        const student = json.student;
        const name = `${student.firstname} ${student.lastname}`;

        ctx.tag('li');

        ctx.attr('data-name', name.toLowerCase());
        ctx.attr('data-city', student.city.toLowerCase());

        ctx.content([
            {
                elem: 'student-parallel',
                content: student.parallel
            },
            {
                elem: 'student-main',
                content: name
            },
            {
                elem: 'student-school',
                content: `${student.city}, ${student.school}, ${student.class}&nbsp;класс`
            }
        ]);
    });

    bh.match([
        'enlisted__student-main',
        'enlisted__student-parallel',
        'enlisted__student-school'
    ], (ctx) => {
        ctx.tag('span');
    });
};
