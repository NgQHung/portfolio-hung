export const projectData: IProjectData[] = [
    {
        id: '1',
        title: 'Zalando Clone Web',
        color: '#f76600',
        about: 'A clone website designed to replicate the features and functionalities of the popular online fashion and lifestyle retailer. A clone website aims to provide a similar shopping experience to users.',
        type: 'personal',
        technologies: {
            fe: [
                'React',
                'Typescript',
                'Tailwind',
                'Redux',
                'HTML & CSS',
                'Framer motion',
                'Fontawesome',
            ],
            be: ['Express', 'Node', 'Axios', 'MongoDB', 'Bcrypt', 'Validator', 'Jsonwebtoken'],
            primary: ['React', 'Typescript', 'HTML & CSS', 'Node', 'MongoDB'],
        },
        image: '/zalando.png',
        listImages: [
            '/zalando.png',
            '/zalando.png',
            '/zalando.png',
            '/zalando.png',
            '/zalando.png',
            '/zalando.png',
        ],
        website: 'https://zalando-clone-five.vercel.app/',
        source: 'https://github.com/NgQHung/zalando-5/',
        year: '9 - 10/2022',
    },
    {
        id: '2',
        title: 'Cocktail Web',
        about: 'A clone website designed to allow users to view a list of cocktails. They can also see the details of each cocktail. For each registered user they can CRUD their own cocktails.',
        type: 'personal',
        color: '#dfe0e0',
        technologies: {
            fe: [
                'React',
                'Typescript',
                'Tailwind',
                'HTML & CSS',
                'Framer motion',
                'Fontawesome',
                'Redux',
            ],
            be: ['Express', 'Node', 'Axios', 'MongoDB', 'Bcrypt', 'Validator', 'Jsonwebtoken'],
            primary: ['React', 'Typescript', 'HTML & CSS', 'Node', 'MongoDB'],
        },
        image: '/cocktail.png',
        listImages: [''],
        website: 'https://cocktail-app-opal.vercel.app/',
        source: 'https://github.com/NgQHung/cocktail-app-typescript/',
        year: '8 - 9/2022',
    },
    // {
    //     title: 'Pokemon Card',
    //     about: '',
    //     technologies: {
    //         fe: [''],
    //         be: [''],
    //     },
    //     image: '/pokemon.png',
    //     website: '',
    //     year: 2022,
    // },
    // {
    //     title: 'Tavern Restaurant',
    //     about: '',
    //     technologies: {
    //         fe: [''],
    //         be: [''],
    //     },
    //     image: '/tavern.png',
    //     website: '',
    //     year: 2022,
    // },
];
