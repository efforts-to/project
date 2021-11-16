module.exports = {
    configureWebpack:{
        resolve: {
          alias: {
            '@': __dirname + '/src',
            'assets': '@/assets',
            'common': '@/common',
            'components': '@/components',
            'network': '@/network',
            'views': '@/views'
          }
        }
    }
}
