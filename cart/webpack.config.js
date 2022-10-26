const HtmlWebpackPlugin = require("html-webpack-plugin");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports={
    mode:"development",
    devServer : {
        port : 8082
    },
    plugins : [
        new ModuleFederationPlugin({
            name : 'cart',
            filename : 'remoteEntry.js',
            exposes:{
                './CartShow' : './src/bootstrap',
            },
             shared:['faker'] // We Can Use it in this Format as Well inCase of Multiple Values
            // shared : {
            //     faker : {
            //         singleton : true 
            //     }
            // }
            // singleton true means that we will use only one Copy of Faker Library
            // Used for Shared Modules  , Faker Module is Being used in both Products and Cart
            //When We Mark Faker as a Shared Module , that Causes it to be loaded up by default Asynchronuosly
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}