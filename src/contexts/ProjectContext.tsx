import { createContext, useReducer, useContext, useEffect } from "react";

interface ProjectProps {
  title: string;
  description: string;
  btnContent: string;
  detail: string;
  imgs: Array<string>;
  detailPics: Array<string>;
}

const projectInfos = [
  {
    title: "Manage",
    description: `This project required me to build a fully responsive landing page to the designs provided. 
    I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, 
    such as the testimonial slider.`,
    btnContent: "View Project",

    detail: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
    enables you to practice building websites to a design and project brief. Each challenge 
    includes mobile and desktop designs to show how the website should look at different 
    screen sizes. Creating these projects has helped me refine my workflow and solve 
    real-world coding problems. I’ve learned something new with each project, helping 
    me to improve and adapt my style.`,
    imgs: [
      "./portfolio/mobile/image-portfolio-manage.jpg",
      "./portfolio/mobile/image-portfolio-manage@2x.jpg",
    ],
    detailPics: [
      "../../detail/mobile/image-manage-hero.jpg",
      "../../detail/mobile/image-manage-hero@2x.jpg",
      "./detail/mobile/image-manage-preview-1.jpg",
      "./detail/mobile/image-manage-preview-1@2x.jpg",
      "./detail/mobile/image-manage-preview-2.jpg",
      "./detail/mobile/image-manage-preview-2@2x.jpg",
    ],
  },
  {
    title: "Bookmark",
    description: `This project required me to build a fully responsive landing page to the designs provided. I 
    used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such 
    as the features section.`,
    btnContent: "View Project",
    imgs: [
      "./portfolio/mobile/image-portfolio-bookmark.jpg",
      "./portfolio/mobile/image-portfolio-bookmark@2x.jpg",
    ],
    detailPics: [
      "./detail/mobile/image-bookmark-hero.jpg",
      "./detail/mobile/image-bookmark-hero@2x.jpg",
      "./detail/mobile/image-bookmark-preview-1.jpg",
      "./detail/mobile/image-bookmark-preview-1@2x.jpg",
      "./detail/mobile/image-bookmark-preview-2.jpg",
      "./detail/mobile/image-bookmark-preview-2@2x.jpg",
    ],
  },
  {
    title: "Insure",
    description: `This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive 
    landing page. The only JavaScript this project required was to enable the toggling of the 
    mobile navigation.`,
    btnContent: "View Project",
    imgs: [
      "./portfolio/mobile/image-portfolio-insure.jpg",
      "./portfolio/mobile/image-portfolio-insure@2x.jpg",
    ],
    detailPics: [
      "./detail/mobile/image-insure-hero.jpg",
      "./detail/mobile/image-insure-hero@2x.jpg",
      "./detail/mobile/image-insure-preview-1.jpg",
      "./detail/mobile/image-insure-preview-1@2x.jpg",
      "./detail/mobile/image-insure-preview-2.jpg",
      "./detail/mobile/image-insure-preview-2@2x.jpg",
    ],
  },
  {
    title: "Fylo",
    description: `This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and 
    built it so that it was fully-responsive. I took a mobile-first approach and used modern 
    CSS like Flexbox and Grid for layout purposes.`,
    btnContent: "View Project",
    imgs: [
      "./portfolio/mobile/image-portfolio-fylo.jpg",
      "./portfolio/mobile/image-portfolio-fylo@2x.jpg",
    ],
    detailPics: [
      "./detail/mobile/image-fylo-hero.jpg",
      "./detail/mobile/image-fylo-hero@2x.jpg",
      "./detail/mobile/image-fylo-preview-1.jpg",
      "./detail/mobile/image-fylo-preview-1@2x.jpg",
      "./detail/mobile/image-fylo-preview-2.jpg",
      "./detail/mobile/image-fylo-preview-2@2x.jpg",
    ],
  },
];

type statues = "init";
interface StateProps {
  projects: Array<ProjectProps>;
}

type Action = { type: statues; payload: unknown };

type ContextType = {
  projects: Array<ProjectProps>;
  getProjects: () => Array<ProjectProps>;
  getProjectByTitle: (title: string) => ProjectProps;
};

const AuthContext = createContext<ContextType | null>(null);

const initialState: StateProps = {
  projects: [],
};

function reducer(state: StateProps, action: Action) {
  switch (action.type) {
    case "init":
      return {
        ...state,
        projects: action.payload as Array<ProjectProps>,
      };
    default:
      throw new Error("Unknown action");
  }
}

interface ProjectProviderProps {
  children: React.ReactNode;
}
function ProjectProvider({ children }: ProjectProviderProps) {
  const [{ projects }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    dispatch({ type: "init", payload: projectInfos });
  }, []);

  function getProjects() {
    return projects;
  }

  function getProjectByTitle(title: string) {
    return projects.filter((e) => e.title === title)[0];
  }

  return (
    <AuthContext.Provider value={{ projects, getProjects, getProjectByTitle }}>
      {children}
    </AuthContext.Provider>
  );
}

function useProject() {
  const context = useContext(AuthContext);
  if (context === undefined || context === null)
    throw new Error("ProjectContext was used outside ProjectProvider");
  return context;
}

export { ProjectProvider, useProject };
