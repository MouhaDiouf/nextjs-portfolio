import React from "react";
import FeaturedProjectStyles from "./featuredproject.module.scss";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
function Project({ title, description, technologies, github, website, image, slug }) {
    return (
        <div className={FeaturedProjectStyles.projectContainer}>
            <div className={FeaturedProjectStyles.imageContainer}>
                <Image src={image} alt={slug} style={{ width: "100%", objectFit: "cover" }} />
            </div>
            <div className={FeaturedProjectStyles.textContainer}>
                <span>Featured Project</span>
                <h3>{title}</h3>
                <p className={FeaturedProjectStyles.description}>{description}</p>
                <div className={FeaturedProjectStyles.technologies}>
                    {technologies.map((technology, idx) => (
                        <span key={idx}>{technology}</span>
                    ))}
                </div>
                <div className={FeaturedProjectStyles.links}>
                    <a href={github} target="_blank">
                        {" "}
                        <AiFillGithub />
                    </a>
                    <a href={website} target="_blank">
                        {" "}
                        <FiExternalLink />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;
