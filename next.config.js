module.exports = {
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': __dirname,
        };
        return config;
    },
    output: 'export',
    basePath: '/StartUp_2024',  // Add this line
    assetPrefix: '/StartUp_2024/', // Add this line
    images: {
        unoptimized: true,
    },
}
