import Card from "./componets/page"
import { Tstudent } from "./componets/page"

let Students: Tstudent[] =[{
  name:"Aina",
  id:8901,
  course:"CloudClimb",
  batch:"2016",
  img:"https://img.freepik.com/premium-photo/korean-girl-with-brown-hair-close-up-looking-viewer-with-turtleneck-sweater_999735-2.jpg",
},
{
  name:"Jessica",
        id:8910,
        course:"Cybersecurity",
        batch:"2020", 
        img:"https://img.freepik.com/premium-photo/portrait-beautiful-korean-women-with-studio-background_825367-1401.jpg",
},
{
  name:"Hazel",
  id:8920,
  course:"Photography",
  batch:"2023", 
  img:"https://img.freepik.com/premium-photo/young-asian-beauty-office-lady-brown-hair-with-korean-makeup-style-face-with-studio-background_825367-3394.jpg?w=360",
}
]

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-400">
    <div className="grid xl:grid-cols-3 grid-cols-1 gap-16 sm:p-10 my-5">
    {Students.map((student, index) => (
          <Card
            key={index}
            name={student.name}
            id={student.id}
            course={student.course}
            batch={student.batch}
            img={student.img}
          />
        ))}
    </div>
  </div>
  )
}

export default Home 