const HtmlWebpackPlugin = require('html-webpack-plugin');

const ModulePluginFederation = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode : 'development',
    devServer: {
        port : 8080
    },
    plugins : [
        new ModulePluginFederation({
            name:'container',  // Not Used , Added For Clarity , Only Needed for Remotes
            remotes:{   // Remotes Tag Lists Projects that the Container Can Search to Get Additional Code
                // Load the File at the Listed URL if anything in Container has as import like :- import abc from 'products
                products:'products@http://localhost:8081/remoteEntry.js', // URL fro the remoteEntry.js File
                cart:'cart@http://localhost:8082/remoteEntry.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
}