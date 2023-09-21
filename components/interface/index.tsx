interface IProjectData {
    title: String;
    about: String;
    image: string;
    listImages: string[];
    color: string;
    technologies: {
        fe: String[];
        be: String[];
    };
    website: string;
    source: string;
    year: number;
}
