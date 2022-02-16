class Student 
{
  constructor
  ({
    name,
    email,
    username,
    instagram = undefined,
    twitter = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = []
  })
  {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = 
    {
      twitter,
      facebook,
      instagram,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths  = learningPaths;
  }
}

class course
{
  constructor
  ({
    name,
    teacher,
    lessons = []
  })
  {
    this.name = name;
    this.teacher = teacher;
    this.lessons = lessons;
  }
}


class learningPaths
{
  constructor
  ({
    name,
    courses = [],
  })
  {
    this.name = name;
    this.courses = courses;
  }
  addCourse(name, teacher)
  {
    let nuevoCurso = new course
    ({
      name: `${name}`,
      teacher: `${teacher}`,
    });
    this.courses.push(nuevoCurso);
  }
  removeCourse(course)
  {
    let buscador = this.courses.indexOf(course);
    this.courses.splice(buscador, 1);
  }
}

const desarrolloWeb = new learningPaths
({
  name: "Escuela de desarrollo Web",
  courses: 
  [
    new course
    ({
      name: "Curso de programación básica",
      teacher: "Freddy Vega",
    }),
    new course
    ({
      name: "Curso intrducción a JavaScript",
      teacher: "Juan David Castor",
    }),
  ]
})


const marco = new Student
({
  name: "Marco Antonio",
  username: "marc0147",
  email: "marc0147@hotmail.com",
  twitter: "marm__dev"
})

const juan = new Student
({
  name: "Juan Perez",
  username: "juanete",
  email: "juanito_amigo@hotmail.com",
})
