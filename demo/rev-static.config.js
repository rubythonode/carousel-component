module.exports = {
    inputFiles: [
        "demo/vue.bundle.js",
        "demo/vue/index.ejs.html",
        "demo/react.bundle.js",
        "demo/react/index.ejs.html",
    ],
    excludeFiles: [
        "demo/*-*.*",
        "demo/*.config.js",
    ],
    outputFiles: file => file.replace(".ejs", ""),
    json: false,
    ejsOptions: {
        rmWhitespace: true
    },
    sha: 256,
    customNewFileName: (filePath, fileString, md5String, baseName, extensionName) => baseName + "-" + md5String + extensionName,
    noOutputFiles: [],
    es6: false,
    less: false,
    scss: false,
};
