module.exports = (bh) => {
    bh.match('documents', (ctx) => {
        const dogovorLink = 'https://school9.perm.ru/camp/Dogovor_Kometa.doc';
        const prilozenieLink = 'https://school9.perm.ru/camp/Prilozhenie_1_pravila.doc';
        const soglasieLink = 'https://school9.perm.ru/camp/Dobrovolnoe_soglasie.docx';

        ctx.param('title', 'Документы, которые надо взять с собой');
        ctx.param('list', [
            {
                icon: 'fa-file-text-o',
                title: 'Договор',
                text:
                    `Заполненный и&nbsp;подписанный родителями. В&nbsp;двух экземплярах.
                    В&nbsp;одном договоре может быть только один школьник.
                    Дату заключения договора и его номер заполнят уже в лагере.
                    <br><a href="${dogovorLink}">Скачать</a>`
            },
            {
                icon: 'fa-files-o',
                title: 'Приложение к&nbsp;договору',
                text:
                    `Приложение к договору  — это ваше согласие с правилами пребывания в лагере. Обязательно
                    ознакомьтесь с ними. Приложение должны подписать родители, по одному на каждого ребёнка.
                    <br><a href="${prilozenieLink}">Скачать</a>`
            },
            {
                icon: 'fa-check-square-o',
                title: 'Согласие на&nbsp;медицинскую помощь',
                text:
                    `Подписанное родителями согласие на первичную медицинскую помощь. Заполните всё, кроме названия
                    медицинской организации и ФИО медицинского работника и даты.
                    <br><a href="${soglasieLink}">Скачать</a>`
            },
            {
                icon: 'fa-stethoscope',
                title: 'Медицинская справка',
                text:
                    `По форме 079/у «Для детского лагеря». В&nbsp;ней должна быть информация о&nbsp;прививках,
                    основных перенесённых и&nbsp;хронических заболеваниях и&nbsp;фраза «здоров».`
            },
            {
                icon: 'fa-sign-language',
                title: '«Инфекционная» справка',
                text:
                    `Справка об&nbsp;отсутствии контактов с&nbsp;инфекционными больными. Нужно получить
                    у&nbsp;педиатра не&nbsp;раньше, чем за&nbsp;три дня до&nbsp;начала смены.`
            },
            {
                icon: 'fa-medkit',
                title: 'Копия медполиса',
                text: 'Чтобы оказать ребёнку медицинскую помощь, если потребуется.'
            }
        ]);
    });
};
