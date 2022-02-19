
export class Comment
{
  constructor
  ({
    content,
    studentName,
    studentRole = "estudiante",
  })
  {
    this.content = content;
    this.studentName = studentName,
    this.studentRole = studentRole,
    this.like = 0;
  }

  publicar()
  {
    console.log(`${this.studentName} (${this.studentRole})`);
    console.log(`${this.likes} Likes`);
    console.log(this.content);
  }
}