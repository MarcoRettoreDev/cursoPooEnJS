import { Comment } from "./comment.mjs";


class Student 
{
  constructor
  ({
    name,
    email,
    username,
    points,
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
    this.points = points;
  };
  publicarComentario(commentContent)
  {
    const comment = new Comment
    ({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}

class FreeStudent extends Student
{
  constructor(props)
  {
    super(props);
  }

  approveCourse(newCourse)
  {
    if (newCourse.isFree)
    {
      this.approveCourse.push(newCourse);
    }
    else
    {
      console.warn(`Srry, you cant access to ${this.name}`)
    }
  }
}

class BasicStudent extends Student
{
  constructor(props)
  {
    super(props);
  }
  approveCourse(newCourse)
  {
    if (newCourse.lang !== 'english')
    {
      this.approveCourse.push(newCourse);
    }
    else
    {
      console.warn(`Srry, you cant access to ${this.name}`)
    }
  }
}

class ExpertStudent extends Student
{
  constructor(props)
  {
    super(props);
  }
  approveCourse(newCourse)
  {
    this.approveCourse.push(newCourse);
  }
}


class TeacherStudent extends Student
{
  constructor(props)
  {
    super(props);
  }
  approveCourse(newCourse)
  {
    this.approveCourse.push(newCourse);
  };
  publicarComentario(commentContent)
  {
    const comment = new Comment
    ({
      content: commentContent,
      studentName: this.name,
      studentRole: 'Platzi Team',
    });
    comment.publicar();
  }
}


export {FreeStudent, BasicStudent, ExpertStudent, TeacherStudent};