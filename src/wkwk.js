var _ = require('lodash')

var wkwk = {

    hasError: function(errors,obj,field){
        if(!Array.isArray(errors)){
            throw new Error('Errors parameter must be an array')
        }
        return _.some(errors, [obj, field])
    }

}




module.exports = wkwk