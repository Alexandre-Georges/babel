import { join } from 'path';

const include = join(__dirname, 'src');

export default {
    entry: './src/random',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'random'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', include }
        ]
    }
}