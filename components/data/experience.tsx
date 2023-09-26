export interface IExperienceData {
    id: string;
    time: String;
    job: String;
    company: String;
    position: String;
    about: String;
    technologiesUsed: String[];
}
export const experienceData: IExperienceData[] = [
    {
        id: '1',
        time: '10/2023 - present',
        job: 'Technical and Innovation Assistant',
        company: 'Mazars s.r.o.',
        position: 'Front-end',
        about: '',
        technologiesUsed: ['React', 'Javascript'],
    },
];
