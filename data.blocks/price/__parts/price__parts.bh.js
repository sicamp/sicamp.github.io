module.exports = (bh) => {
    bh.match('price__parts', (ctx) => {
        ctx.param('parts', [
            {
                name: 'accommodation',
                title: 'Проживание и питание',
                price: '25&thinsp;500&nbsp;руб.',
                text:
                    `<p>Отправьте безналичный перевод по реквизитам ООО «Элпис», указанным в договоре.
                    В назначении платежа укажите, за кого производится оплата.
                    Банк
                    может брать комиссию за перевод. После оплаты отправьте копию квитанции 
                    на&nbsp;<a href="mailto:gm_shulgina@mail.ru">gm_shulgina@mail.ru</a>. Если вам нужен счёт, напишите
                    на&nbsp;тот&nbsp;же адрес.</p>
                    <p>Если вам неудобно платить безналичным переводом, можно оплатить проживание по&nbsp;приезде
                    в&nbsp;лагерь. Тогда вам дадут квитанцию об оплате.</p>
                    <p>В конце смены мы отдадим вам договор об оказании услуг и корешок путёвки.</p>`
            },
            {
                name: 'education',
                title: 'Обучение',
                price: '7000&nbsp;руб.',
                text:
                    `<p>Цена обучения 7000&nbsp;рублей независимо от сертификата. Можете сдать деньги вместе 
                    с&nbsp;сертификатом, если живёте в&nbsp;Перми. Или заплатить в&nbsp;первый день в&nbsp;лагере.</p>`
            }
        ]);
    });
};
