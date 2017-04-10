const pages = {
    index: { path: '/' }
};

module.exports = {
    getPages: () => pages,

    getPagesList: () => Object.keys(pages)
        .map((pageType) => Object.assign({ type: pageType }, pages[pageType]))
};
