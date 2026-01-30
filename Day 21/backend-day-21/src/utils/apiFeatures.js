// const apiFeatures = (query, queryString) => {

//     let features = {};

//     features.query = query;
//     features.queryString = queryString;


//     features.filter = () => {
//         const queryObj = { ...features.queryString };

//         const excludeFields = ["page", "limit", "sort"];
//         excludeFields.forEach(field => delete queryObj[field]);

//         let queryStr = JSON.stringify(queryObj);
//         queryStr = queryStr.replace(
//             /\b(gte|gt|lte|lt)\b/g,
//             match => `$${match}`
//         );

//         features.query = features.query.find(JSON.parse(queryObj));

//         return features;
//     }

//     features.sort = () => {

//         if(features.queryString.sort){
//             if(features.query.sort.startsWith("-")){
//                 features.queryString = {[features.query.sort.substring(1)]: -1}
//             }else{
//                 features.queryString = {[features.query.sort]:1}
//             }
//         }

//         return features;
//     }


//     features.paginate = ()=>{

//         const page = Number(features.queryString.page) || 1;
//         const limit = Number(features.queryString.limit) || 10;
//         const skip = (page -1) * limit;

//         features.query = features.query.skip(skip).limit(limit);
//         return features
//     }


//     return features;
// }



// module.exports = apiFeatures;



class apiFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filter() {
        const queryStringObj = { ...this.queryString };

        const excludedFields = ["page", "limit", "sort"];
        excludedFields.forEach(field => delete queryStringObj[field]);

        const queryStr = JSON.stringify(queryStringObj);
        queryStr = queryStr.replace(
            /\b(gte|gt|lte|lt)\b/g,
            match => `$${match}`
        );

        this.query = this.query.find(JSON.parse(queryStr));

        return this;
    }


    sort() {
        if (this.queryString.sort) {
            this.query = this.query.sort(this.queryString.sort);
        } else {
            this.query = this.query.sort("-createdAt")
        }

        return this;
    }


    paginate() {

        const page = Number(this.queryString.page) || 1
        const limit = Number(this.queryString.limit) || 10
        const skip = (page - 1) * limit;


        this.query = this.query.skip(skip).limit(limit);

        return this;
    }
}


module.exports=apiFeatures;