const pages = {
    index: { path: '/' },
    entrance: { path: '/entrance' }
};

module.exports = {
    getPages: () => pages,

    getPagesList: () => Object.keys(pages)
        .map((pageType) => Object.assign({ type: pageType }, pages[pageType]))
};
