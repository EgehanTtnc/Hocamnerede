class Course {
    constructor(
        id, 
        categoryId, 
        teacherId, 
        subcategoryId, 
        name, 
        rating, 
        content, 
        duration, 
        pictureURL,
        price, 
        teacherFirstName, 
        teacherLastName, 
        teacherAge, 
        teacherSex, 
        teacherJob, 
        teacherCityID, 
        categoryName, 
        subCategoryName){
            this.id = id;
            this.categoryId = categoryId;
            this.teacherId = teacherId;
            this.subcategoryId = subcategoryId;
            this.name = name;
            this.rating = rating;
            this.content = content;
            this.duration = duration;
            this.pictureURL = pictureURL;
            this.price = price;
            this.teacherFirstName = teacherFirstName;
            this.teacherLastName = teacherLastName;
            this.teacherAge = teacherAge;
            this.teacherSex = teacherSex;
            this.teacherJob = teacherJob;
            this.teacherCityID = teacherCityID;
            this.categoryName = categoryName;
            this.subCategoryName = subCategoryName;
    }
}

export default Course;