const fs = require('fs');
const path = require('path');

module.exports = (bh) => {
    bh.match('enlisted', (ctx) => {
        ctx.param('title', 'Список зачисленных');
        ctx.param(
            'disclaimer',
            '<p>Если вы уверены, что должны были попасть в другую параллель, напишите нам.</p>'
        );

        const fields = [ 'lastname', 'firstname', 'city', 'school', 'class', 'parallel' ];
        const csv = fs.readFileSync(path.resolve(__dirname, 'enlisted.csv')).toString();

        function clearField(field) {
            return field
                .replace(/(^"|"$)/g, '')
                .replace(/(^\s+|\s+$)/g, '')
                .replace(/""/g, '"');
        }

        function compareParallel(a, b) {
            if (a === b) {
                return 0;
            }

            return b < a ? 1 : -1;
        }

        function formatSchool(school) {
            if (/^\d+$/.test(school)) {
                return 'Школа&nbsp;' + school;
            }

            return school;
        }

        const list = csv.split('\n')
            .slice(1)
            .filter(Boolean)
            .map((line) => {
                const arr = line.split(',');
                const data = {};

                fields.forEach((field, i) => {
                    data[field] = clearField(arr[i]);
                });

                data.school = formatSchool(data.school);

                return data;
            })
            .sort(function(a, b) {
                if (a.parallel !== b.parallel) {
                    return compareParallel(a.parallel, b.parallel);
                } else {
                    return b.lastname < a.lastname ? 1 : -1;
                }
            });

        ctx.param('list', list);
    });
};
