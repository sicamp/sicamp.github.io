const pages = {
    index: { path: '/' },
    entrance: { path: '/entrance' },
    forms: { path: '/forms' },
    letsgo: { path: '/letsgo' },
    things: { path: '/things' }
};

module.exports = {
    getPages: () => pages,

    getPagesList: () => Object.keys(pages)
        .map((pageType) => Object.assign({ type: pageType }, pages[pageType]))
};
