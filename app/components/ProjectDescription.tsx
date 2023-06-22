import React from "react";
interface ProjectDescription {
  description: string;
}

const ProjectDescription: React.FC<ProjectDescription> = ({ description }) => {
  const renderDescription = (description: string) => {
    const paragraphs = description.split("\n\n");
    return paragraphs.map((paragraph, index) => (
      <p key={index} className="mb-4 text-lg">
        {paragraph}
      </p>
    ));
  };
  return <>{renderDescription(description)}</>;
};

export default ProjectDescription;
