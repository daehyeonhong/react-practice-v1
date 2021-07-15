const path = require(`path`);
const RefreshWebpackPlugin = require(`@pmmmwh/react-refresh-webpack-plugin`);
// process.env.NODE_ENV = `production`;

module.exports = {

    name: `word-replay`,
    mode: `development`, // 실 서비스 production
    devtool: `eval`,
    resolve: {extensions: [`.js`, `.jsx`]},

    entry: {
        app: [`./client`]
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: `babel-loader`,
            options: {
                presets: [
                    [`@babel/preset-env`, {
                        targets: {
                            browsers: [`> 1% in KR`]
                        },
                        debug: true
                    }], `@babel/preset-react`
                ],
                plugins: [
                    `@babel/plugin-proposal-class-properties`,
                    `react-refresh/babel`
                ]
            }
        }]
    },

    plugins: [
        new RefreshWebpackPlugin()
    ],

    output: {
        path: path.join(__dirname, `dist`),
        filename: `app.js`,
        publicPath: `/dist/`
    },

    devServer: {
        publicPath: `/dist/`,
        hot: true
    }

};