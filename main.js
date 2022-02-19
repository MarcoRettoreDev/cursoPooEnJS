import {FreeStudent, BasicStudent, ExpertStudent, TeacherStudent} from "./student.mjs";
import { Comment } from "./comment.mjs";
// import { learningPaths } from "./learningPath.mjs";
// import { Course } from "./course.mjs";
// import { Teacher } from "./teacher.mjs";






// ESTUDIANTES

const marco = new ExpertStudent
({
  name: "Marco Antonio",
  username: "marc0147",
  email: "marc0147@hotmail.com",
  twitter: "marm__dev"
});


const juan = new FreeStudent
({
  name: "Juan Perez",
  username: "juanete",
  email: "juanito_amigo@hotmail.com",
});


const freddy = new TeacherStudent
({
  name: "Freddy Vega",
  username: "freddier",
  email: "fredyvega@hotmail.com",
  instagram: "fredyelcrack",
})

console.log(Comment);





function videoPlay(id)
{
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.log("Se reproduce desde la URL: " + urlSecreta);
};

function videoStop(id)
{
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.log("Pausamos desde la URL: " + urlSecreta);
};

class PlatziClass
{
  constructor
  ({
    name,
    videoID,
  })
  {
    this.name = name;
    this.videoID = videoID;
  };

  reproducir()
  {
    videoPlay(this.videoID);
  }
  pausar()
  {
    videoStop(this.videoID);
  };
};
