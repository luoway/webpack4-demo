class DemoPlugin {
    constructor(context) {

    }

    apply(compiler){
        compiler.plugin('afterCompile', compilation => {
            Object.keys(compilation.assets).forEach(filename => {
                compilation.assets[filename]._value =
                    '// 用上了DemoPlugin\n' +
                    compilation.assets[filename]._value
            })
        })
    }
}

module.exports = DemoPlugin