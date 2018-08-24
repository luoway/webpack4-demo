const DemoPlugin = require('./demo-plugin')
module.exports = {
    entry:{
        index: './index.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'demo-loader'//使用别名
            }
        ]
    },
    plugins:[
        new DemoPlugin()
    ],
    resolveLoader:{
        alias:{
            'demo-loader':'./demo-loader'//路径别名
        }
    }
}