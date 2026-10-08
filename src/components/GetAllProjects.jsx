import Link from "next/link";
import Image from "next/image";
import {projectList} from "@/database/data";

async function getAllProjects() {
  //    const res = await fetch("http://localhost:5000/projects");
  // const data = await res.json();
  return (
    <div>
      <div
        className="container  grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch"
        dir="rtl"
      >
        {projectList.map((p) => (
          <Link href={`projects/${p.title}`} key={p.id}>
            <li
              className="animation rounded-xl shadow-lg list-none p-4 bg-white dark:bg-zinc-800 text-black h-full space-y-4"
              dir="ltr"
            >
              <Image
                width={200}
                height={200}
                src={p.image}
                alt={p.title}
                className="w-80 h-60 rounded-xl justify-center mx-auto"
              />
              <div className="flex ">
                <p className=" flex-1 dark:text-white">{p.title}</p>
                <p className=" bg-amber-400 text-xs rounded-lg py-1 px-2">
                  {p.category[0]}
                </p>
                <p className=" bg-amber-400 text-xs rounded-lg py-1 px-2 ml-2">
                  {p.category[1]}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default getAllProjects;
