export const mediaType = {
    VIDEO: 'video',
    FIGMA: 'figma',
    IMAGE: 'image',
  };

export const other_projects = [
    {
        title: "Augmented Reality Virtual Tour App (work in progress)",
        subtitle: "Group project",
        link: "https://vimeo.com/816084730?share=copy",
        relatedLink: ["https://github.com/LenaWang03/see-ubc"],
        description: "An iOS mobile app that displays AR objects at set geographical coordinates on the UBC campus and shows informational alerts when they are tapped.",
        tags: ['Swift', 'ARKit', 'MapKit'],
        selected: true,
        type: mediaType.VIDEO,
    },
    {
        title: "Wordle Solver",
        subtitle: "Personal project",
        link: "https://vimeo.com/787240599?share=copy",
        relatedLink: ["https://github.com/isa-leroux448/WordleSolver"],
        description: "A Java desktop application that generates the correct solution to Wordle within the guess limit.",
        tags: ['Java', 'Iterator Pattern', 'Java Swing'],
        selected: false,
        type: mediaType.VIDEO,
    },
    {
        title: "Soccer Game Scheduler",
        subtitle: "School project",
        link: "https://vimeo.com/787239109?share=copy",
        relatedLink: ["https://github.com/isa-leroux448/SoccerGameScheduler"],
        description: "A Java desktop application that can create player profiles, create and report game events, and view team, game and player statistics.",
        tags: ['Java', 'JUnit', 'org.json library', 'Java Swing'],
        selected: false,
        type: mediaType.VIDEO,
    },
]