module.exports = (bh) => {
    bh.match('documents', (ctx) => {
        const dogovorLink = 'http://school9.perm.ru/camp/files/dogovor.doc';
        const soglasieLink = 'http://school9.perm.ru/camp/files/soglasie.docx';

        ctx.param('title', 'Документы, которые надо взять с собой');
        ctx.param('list', [
            {
                icon: 'fa-files-o',
                title: 'Договор',
                text:
                    `Заполненный и&nbsp;подписанный родителями. В&nbsp;двух экземплярах.
                    В&nbsp;одном договоре может быть только один школьник.
                    <br><a href="${dogovorLink}">Скачать</a>`
            },
            {
                icon: 'fa-check-square-o',
                title: 'Согласие на&nbsp;обработку персональных данных',
                text:
                    `Подписанное родителями заявление о&nbsp;согласии на обработку персональных данных ребенка.
                    <br><a href="${soglasieLink}">Скачать</a>`
            },
            {
                icon: 'fa-file-text-o',
                title: 'Медицинская справка',
                text:
                    `По форме 079/у «Для детского лагеря». В&nbsp;ней должна быть информация о&nbsp;прививках,
                    основных перенесённых и&nbsp;хронических заболеваниях и&nbsp;фраза «здоров».`
            },
            {
                icon: 'fa-medkit',
                title: 'Копия медполиса',
                text: 'Чтобы оказать ребёнку медицинскую помощь, если потребуется.'
            }
        ]);
    });
};
