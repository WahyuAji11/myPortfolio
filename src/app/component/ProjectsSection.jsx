"use client"
import React, {useState, useRef} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {motion, useInView} from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: "Harvest Abadi",
        description: "Company profile website featuring services, offerings, and an employee dashboard. Includes dark mode and light mode for better user experience.",
        image: "/images/projects/harvest-abadi.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/WahyuAji11/fe-harvestabadi.git",
        previewUrl: "https://harvestabadi.com/",
    },
    {
        id: 2,
        title: "Dishub Situbondo",
        description: "Transportation Department website with news, search, regional transport schedules, complaint submissions, and an employee dashboard.",
        image: "/images/projects/dishub-situbondo.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hooxie-id/fe-dishub-situbondo.git",
        previewUrl: "https://dishub.situbondokab.go.id/",
    },
    {
        id: 3,
        title: "React List Anime",
        description: "KangAnimeKisama",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/WahyuAji11/kanganimekisama",
        previewUrl: "https://kanganimekisama.vercel.app/",
    },
    {
        id: 4,
        title: "E-commerce Website",
        description: "Mermaid's Shop",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/WahyuAji11/ecommerce-reactjsAndTs",
        previewUrl: "https://ecommerce-reactjs-and-ts.vercel.app",
    },
    {
        id: 5,
        title: "Kedai kopi",
        description: "Project 2 description",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/WahyuAji11/coffe-shop",
        previewUrl: "https://wahyuaji11.github.io/coffe-shop/",
    },
];


const ProjectsSection = () => {
    const [tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})
    const handleTabChange = (newTag) => {
        setTag(newTag)
    }
    const filteredProject = projectsData.filter((project) => 
        project.tag.includes(tag)
    )

    const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    };

    return (
        <section ref={ref} id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag onClick={handleTabChange} name="All" isSelected={tag === "All"} active={"All"} />
                <ProjectTag onClick={handleTabChange} name="Web" isSelected={tag === "Web"} active={"Web"} />
                <ProjectTag onClick={handleTabChange} name="Mobile" isSelected={tag === "Mobile"} active={"Mobile"} />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProject.map((project, index) => 
                <motion.li 
                key={index}
                variants={cardVariants} 
                initial="initial" 
                animate={isInView ? "animate" : "initial"}
                transition={{duration:0.3, delay:index*0.4}}
                >
                    <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                    />
                </motion.li>
                )}
            </ul>
        </section>
    )
}

export default ProjectsSection