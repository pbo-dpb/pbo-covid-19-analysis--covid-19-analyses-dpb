// vue.config.js
module.exports = {
    lintOnSave: process.env.NODE_ENV === 'production' ? 'error' : 'warning',
    filenameHashing: process.env.NODE_ENV !== 'production',

}