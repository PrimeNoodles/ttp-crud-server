const { Campus, Student } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      description: "A college in Brooklyn",
    }),
    Campus.create({
      name: "College of Staten Island",
      address: "Staten Island",
      description: "A college on Staten Island",
    }),
    Campus.create({
      name: "John Jay College",
      address: "Manhattan",
      description: "A college in Manhattan",
    }),
    Student.create({ 
      firstName: "Daniel",
      lastName: "Shmoe",
      email: "123fake@mail.com",
      gpa: 2.1,
    }),
    Student.create({ 
      firstName: "Sally", 
      lastName: "Bajoe",
      email: "hellomyfriend@aol.com",
      gpa: 3.1,
      campusId: 1, 
    }),
    Student.create({ 
      firstName: "Hatch", 
      lastName: "Ling",
      email: "Tarkovski@bsg.com",
      gpa: 3.9,
      campusId: 2, 
    }),
  ]);
};

module.exports = seedDatabase;
