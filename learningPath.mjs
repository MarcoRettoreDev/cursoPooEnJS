import { Course } from "./course.mjs"

export class learningPaths
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

// Learning Paths

const desarrolloWeb = new learningPaths
({
  name: "Escuela de desarrollo Web",
  courses: 
  [
    new Course
    ({
      name: "Curso de programación básica",
      teacher: "Freddy Vega",
    }),
    new Course
    ({
      name: "Curso intrducción a JavaScript",
      teacher: "Juan David Castor",
    }),
  ]
});