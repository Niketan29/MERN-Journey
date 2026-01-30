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