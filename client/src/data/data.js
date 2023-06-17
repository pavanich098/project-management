const data = [
    {
        id: 1,
        title: "Dashboard Design for Task Manager App",
        desc: "Project Managing app by using Mern ",
        tags: ["React", "Node", "MongoDB"],
        time: "1 days ago",
        status: "Working",
        image: "https://cdn.dribbble.com/userupload/3800319/file/original-54a969b772fca3ef0ec9b3b39f0f1b48.jpg?compress=1&resize=450x338&vertical=top",
        members: [
            // { name: "John", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUB8kqGZ74kvQczb_fL00a6LecB331zRp5SQ&usqp=CAU" },
            {name:"Project",image:"data:image/png;base64,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"},
            { name: "pavani", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDh7L9AqsLxfxd5Qjx1xXrzdLnimCMvBUHqg&usqp=CAU" },
            { name: "pavani", image: "https://source.unsplash.com/random" },
        ],
    },
    {
        id: 2,
        title: "Project 2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        tags: ["React", "Node", "MongoDB"],
        time: "2 days ago",
        status: "In Progress",
        image: "",
        members: [
            { name: "Sindhu", image: "https://source.unsplash.com/random" },
            { name: "Sneha", image: "https://source.unsplash.com/random" },
            { name: "Kalyan", image: "https://source.unsplash.com/random" },
        ],
    },
    {
        id: 3,
        title: "Project 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        tags: ["Android", "MERN", "MongoDB"],
        time: "2 days ago",
        status: "In Progress",
        image: "",
        members: [
            { name: "swarna", image: "https://source.unsplash.com/random" },
            { name: "sandeep", image: "https://source.unsplash.com/random" },
            { name: "shannu", image: "https://source.unsplash.com/random" },
        ],
    },
    {
        id: 4,
        title: "Project 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        tags: ["React", "Node", "MongoDB"],
        time: "2 days ago",
        status: "Completed",
        image: "",
        members: [
            { name: "pradeep", image: "https://source.unsplash.com/random" },
            { name: "saranya", image: "https://source.unsplash.com/random" },
            { name: "John", image: "https://source.unsplash.com/random" },
        ],
    },
    {
        id: 5,
        title: "Project 2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        tags: ["React", "Node", "MongoDB"],
        time: "2 days ago",
        status: "Completed",
        image: "https://cdn.dribbble.com/userupload/3801107/file/original-1a14267f7088e99ef74ced21616a4137.png?compress=1&resize=1504x1128",
        members: [
            { name: "John", image: "https://source.unsplash.com/random" },
            { name: "John", image: "https://source.unsplash.com/random" },
            { name: "John", image: "https://source.unsplash.com/random" },
        ],
    },
    {
        id: 6,
        title: "Project 3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        tags: ["React", "Node", "MongoDB"],
        time: "2 days ago",
        status: "Completed",
        image: "",
        members: [
            { name: "John", image: "https://source.unsplash.com/random" },
            { name: "John", image: "https://source.unsplash.com/random" },
            { name: "charansai", image: "https://source.unsplash.com/random" },
        ],
    },
];
const statuses = [
    {
        status: "Working",
        icon: "⭕️",
        color: "#EB5A46",
    },
    {
        status: "In Progress",
        icon: "🔆️",
        color: "#00C2E0",
    },
    {
        status: "Completed",
        icon: "📝",
        color: "#C377E0",
    },
];

const tagColors = [
    "#FF69B4",
    "#9932CC",
    "#FFA07A",
    "#FFD700",
    "#90EE90",
    "#20B2AA",
    "#AFEEEE",
    "#FFF0F5",
    "#B5E4CA",
    "#CABDFF",
    "#B1E5FC",
    "#FFBC99",
    
]

const tools = [
    {
        name: "Slack",
        icon: "https://cdn.worldvectorlogo.com/logos/slack-1.svg",
    },
    {
        name: "Figma",
        icon: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
    },
    {
        name: "Adobe XD",
        icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg",
    },
    {
        name: "Github",
        icon: "https://cdn.worldvectorlogo.com/logos/github-icon.svg",
    },
    {
        name: "GitLab",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
    },
    {
        name: "Bitbucket",
        icon: "https://cdn.worldvectorlogo.com/logos/bitbucket.svg",
    },
]

const members = [
    {
        name: "John Abharim",
        email: "pavanichinthalapudi123@gmail.com",
        role: "Manager",
        access: "Owner",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUB8kqGZ74kvQczb_fL00a6LecB331zRp5SQ&usqp=CAU",
    },
    {
        name: "John Abharim",
        email: "kodhaarisindhu@gmail.com",
        role: "Developer",
        access: "Editor",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUB8kqGZ74kvQczb_fL00a6LecB331zRp5SQ&usqp=CAU",
    },
    {
        name: "John Abharim",
        email: "charansaigonugunta@gmail.com",
        role: "Designer",
        access: "View Only",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUB8kqGZ74kvQczb_fL00a6LecB331zRp5SQ&usqp=CAU",
    }, 
]

const ideas = [
    "Lorem ipsum dolor sit amet, adipiscing elit. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
]


export  {  statuses, data , tagColors, tools, members, ideas  };
