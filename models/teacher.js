class Teacher {
    constructor(id, firstName, lastName, rating, age, sex, job, lastSeen, description, email, password, telephone, pictureURL, active, cityId){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.rating = rating;
        this.age = age;
        this.sex = sex;
        this.job = job;
        this.lastSeen = lastSeen;
        this.description = description;
        this.email = email;
        this.password = password;
        this.telephone = telephone;
        this.pictureURL = pictureURL;
        this.active = active;
        this.cityId = cityId;
    }
}

export default Teacher;