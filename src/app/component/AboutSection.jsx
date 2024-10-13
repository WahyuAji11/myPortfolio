"use client"
import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc py-2">
                <li>PHP</li>
                <li>Javascript</li>
                <li>Next.js</li>
                <li>React.js</li>
                <li>Laravel</li>
                <li>Wordpress</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc py-2">
                <li>Foundamental Front End Web Development in Coding Studio</li>
                <li>Build Website With Laravel in Coding Studio</li>
                <li>Web Developer in MySkill</li>
                <li>RevoU Tech Academy - Data & Software Engineering</li>
            </ul>
        )
    },
    {
        title: "Sertification",
        id: "sertification",
        content: (
            <ul className="list-disc py-2">
                <li>Foundamental Front End Web Development</li>
                <li>RevoU Tech Academy - Data & Software Engineering</li>
                <li>Skilled At Creating Websites With Laravel 9</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about.jpeg" alt="about image" width={500} height={500} />
                <div className="mt-4 md-mt0 text-left flex flex-col">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">I&apos;m a web developer passionate about making cool websites. I&apos;ve worked with HTML, CSS, JavaScript, PHP, Express, Next.js, React.js, Laravel, and Git. I love learning new things and I&apos;m eager to team up with others to build awesome website!</p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("sertification")} active={tab === "sertification"}>Sertification</TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
