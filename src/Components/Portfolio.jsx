/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Child Safety QR AI",
    description:
      "Innovatively designed to enhance child safety, the project involves a mobile app where users input child details, generating a personalized QR code stored in a PDF. Leveraged API integration for efficient data processing, resulting in a unique URL. Implemented AI configuration options for customizable QR code designs, showcasing adaptability and creativity in addressing real-world challenges.",
    url: "https://youtu.be/q7eXclpiRsc",
  },
  {
    title: "AI Dermatologist",
    description:
      "Leveraged advanced AI technologies, including the GPT-3.5 API and a custom-trained model, to accurately classify ten different skin diseases with a remarkable 97 percent accuracy. The project's user-friendly interface allows individuals to upload images of skin conditions, receive disease predictions, and interact with the system by asking questions. Successfully designed and launched a dedicated website for the project, providing a platform for users to access comprehensive reports, recommended articles, and treatment information. This initiative showcases my proficiency in AI application development, problem-solving, and collaborative teamwork.",
    url: "https://www.youtube.com/watch?v=eJbUr5cVQB4",
  },
  {
    title: "Whatsapp Seeker",
    description:
      "Whatsapp Seeker is an innovative tool designed to analyze your Whatsapp chats effortlessly. Deployed on Streamlit, it efficiently converts exported Whatsapp chats into a pandas DataFrame, offering insightful visualizations such as monthly and daily timelines, emoji counts, popular words, and word clouds. Whether you're exploring personal messaging habits or delving into group dynamics, Whatsapp Seeker provides comprehensive analysis capabilities.",
    url: "https://github.com/SparklinStar/Whatsapp_Seeker",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Medical waste classifier eliminates the problem of throwing wrong waste in wrong dustbin. The user only needs to throw the waste in central bin and then the waste gets classified using computer Vision and Deep Learning and then the waste gets disposed at the apt bin.",
    url: "https://drive.google.com/file/d/1a8VVaX327jG0gDLqN2pHVnn7p-o-YYv_/view",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
