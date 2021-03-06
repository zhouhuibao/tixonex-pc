module.exports = {
    publicPath: './',
    lintOnSave: true,
    // chainWebpack: (config)=>{
    //     config.resolve.symlinks(true)    // 热更新
    //     // config.resolve.alias.set('@', resolve('src'))  // 设置@代表src路径
    // },
    devServer: {
        hot: true,
        open: true,
        port:8846,
        proxy: "http://192.168.0.109:8088"
        // proxy: {
        //     '/gcgj-web': {
        //         target: 'http://91gcgj.com/',   
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/gcgj-web': '/gcgj-web'
        //         }
        //     },
        //     '/gcgj-fdfs': {
        //       target: 'http://91gcgj.com/',
        //       ws: true,
        //       changeOrigin: true,
        //       pathRewrite: {
        //           '^/gcgj-fdfs': '/gcgj-fdfs'
        //       }
        //   },
        // }
    },
    css: {
        loaderOptions: {
            sass:{
                data: `@import "~@/style/element-var.scss";`
            },
            scss: {
                prependData: `@import "~@/style/element-var.scss";`
            },
        }
    }
    
}

