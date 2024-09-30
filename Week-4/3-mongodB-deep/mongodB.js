const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    email: String,
    password: String,
    purchasedCourses: [{                                // Here we create a nested object to list all the courses owned by user, thats smthing mongodb can do, sql cant
        type:mongoose.Schema.Types.ObjectId,            // This basically stores the objectIds of the course, we wont be saving course name,we would be saving ids
        ref:'Course'                                    // THis ref points at the Courses table which consists of all the courses, this actually initiates the connection
    }]
})

const CourseSchema=new mongoose.Schema({
    title: String,
    price: 5999
})

const User=mongoose.model('Users',UserSchema);          // Rhis bassically creates a User object that basically states that UserSchema points to Users table 
// We can now apply CRUD operations on this hereCreated User object, like User.create 
const Course=mongoose.model('Courses',CourseSchema);

//                                          CREATE
User.create({
    username: _,//:req.body.username
    password: _// :req.body.password 
})

//                                          Finding
User.findById("122ewsxed21");                           // Find entry by id
User.findOne({
    username:"akshit@gmail.com"                         // FInd only one entry with given username
})
User.find({
    username:"akshit@gmail.com"                         //Find all entries with given username
})

//                                          Update
User.updateOne(
    {"id":"1234vfdd"},
    { $push: {purchasedCourses: courseId}},              // To push a new course id in the list of the courses of provided user id
    {password:"newpassword"}
)

User.update({},{                                        // To update the whole thing
    premium:true
})

//                                          Delete
User.deleteMany({})

User.deleteOne({
    username:"akshit@gmail.com"
})

// we can explore rest of the fxns on our own

// After this we solved Assignments/Week3/03-mongo