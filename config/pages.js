const pages = {
    index: { path: '/' },
    entrance: { path: '/entrance' },
    letsgo: { path: '/letsgo' }
};

module.exports = {
    getPages: () => pages,

    getPagesList: () => Object.keys(pages)
        .map((pageType) => Object.assign({ type: pageType }, pages[pageType]))
};
