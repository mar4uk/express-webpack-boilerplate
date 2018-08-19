const path = require('path');
const nodeExternals = require('webpack-node-externals');

const APP_ROOT = path.resolve(__dirname);
const RESOLVE_EXTENSIONS = ['*', '.js', '.jsx'];

module.exports = [
    {
        context: APP_ROOT,
        entry: './src/client.js',
        mode: 'development',
        output: {
            filename: 'client.js',
            path: `${APP_ROOT}/dist`
        },
        resolve: {
            modules: [APP_ROOT, 'node_modules'],
            extensions: RESOLVE_EXTENSIONS
        },
        target: 'web',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        }
    },
    {
        context: APP_ROOT,
        entry: './src/server.js',
        mode: 'development',
        output: {
            filename: 'server.js',
            path: `${APP_ROOT}/dist`
        },
        resolve: {
            modules: [APP_ROOT, 'node_modules'],
            extensions: RESOLVE_EXTENSIONS
        },
        externals: nodeExternals(),
        target: 'node',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        }
    }
];
