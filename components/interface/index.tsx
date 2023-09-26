interface IProjectData {
    id: String;
    title: String;
    about: String;
    image: string;
    listImages: string[];
    color: string;
    technologies: {
        fe: String[];
        be: String[];
        primary: String[];
    };
    type: string;
    website: string;
    source: string;
    year: string;
}

interface IExperienceData {
    id: string;
    time: String;
    job: String;
    company: String;
    position: String;
    about: String;
    technologiesUsed: String[];
    web: string;
}
