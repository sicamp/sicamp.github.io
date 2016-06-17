module.exports = (bh) => {
    bh.match('enrollment', (ctx) => {
        const admittedProfile = 'https://docs.google.com/forms/d/1rNxlVOLInHklrP6y5zapi6QZ6kjeNGeLYvuFlC2y8U0/viewform?usp=send_form';

        ctx.param('title', 'Зачисление');
        ctx.param(
            'text',
            `<p>Всем зачисленным мы отправили электронное письмо. Если вы не собираетесь в ЛКЛ,
            сообщите нам об&nbsp;этом: ответьте на&nbsp;письмо о&nbsp;зачислении или&nbsp;напишите
            на&nbsp;<a href="mailto:permolymp@yandex.ru">permolymp@yandex.ru</a>.</p>

            <p>Если вы зачислены, то заполните <a href="${admittedProfile}">анкету&nbsp;зачисленного</a> как можно скорее.
            Не волнуйтесь, если вы не можете ответить на&nbsp;некоторые вопросы
            анкеты. Заполните, что можете. Потом анкету можно будет исправить. Для этого после нажатия на&nbsp;кнопку
            «Готово» используйте ссылку «Изменить ответ».</p>
            `
        );
    });
};
