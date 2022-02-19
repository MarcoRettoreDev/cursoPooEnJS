export class Course
{
  constructor
  ({
    name,
    teacher,
    language = "spanish",
    isFree = false
  })
  {
    this._name = name;
    this.teacher = teacher;
    this.language = language;
    this.isFree = isFree;
  }
  
  get name() 
  {
    return this._name;
  }

  set name(nuevoNombrecito)
  {
    if(nuevoNombrecito === "Curso Malito de programación básica")
    {
      console.error('Te vamos a ir a buscar');
    }
    else
    {
      return this._name = nuevoNombrecito;
    }
  }
}


// Cursos

const cursoProgBasica = new Course
({
  name: "Curso Gratis de Programación Básica",
  isFree: true,
})

const cursoPracticoHTML = new Course
({
  name: "Curso Gratis de Programación Básica",
  isFree: false,
  language: "english",
})

