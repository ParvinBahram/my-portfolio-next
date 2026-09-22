import Image from "next/image";

async function SingleProject({params}) {
const {slug} =await params;
console.log(slug);

  const res = await fetch("http://localhost:5000/projects");
  const data = await res.json();
 console.log(data);
 
 const project = data.find((item) => item.title === slug);
  return (
    <div className='container p-4 space-y-4' dir="rtl">
      <h1 className="mb-4">{project.title}</h1>
      <a href={project.link} className="block text-blue-700" target="_blank">  <span className="text-foreground">لینک مشاهده آنلاین پروژه</span>  {project.link} </a>
      <Image width={300} height={300} className="w-100 h-90 rounded-lg mb-4" src={project.image} alt={project.title}/>
      <p className="">{project.description}</p>
    </div>
  )
}

export default SingleProject