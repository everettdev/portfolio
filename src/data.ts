import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Frankie",
  role: "Graduate Level Designer",
  introduction: "A passionate and ready undergraduate looking to further my knowledge of level design within an industry setting.",
  description: "TELL_ABOUT_YOURSELF",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/FrankieEverett_Resume.pdf`,
  links: {
    github: "https://github.com/everettdev",
    itchIO: "https://NAME.itch.io",
    linkedIn: "https://www.linkedin.com/in/frankie-everett/",
  }
};

export const games: Game[] = [
  {
    name: "Level Design with Team Fortress 2",
    description: "King of the Hill type based level designed to expand upon the class-based gameplay loops with a design that focuses on allowing each of the nine playstyles to thrive.",
    genres: ["First-Person Shooter", "Class-Based Shooter"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.Steam, url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3348704032" },
    ],
    media: [
      { source: "/images/games/KOTH_CONCRETE/Screenshot_1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/oWU4NZoo3LQ", type: MediaType.YouTube },
      { source: "/images/games/KOTH_CONCRETE/Screenshot_2.jpg", type: MediaType.Image },
      { source: "/images/games/KOTH_CONCRETE/Screenshot_3.jpg", type: MediaType.Image },
      { source: "/images/games/KOTH_CONCRETE/Screenshot_4.jpg", type: MediaType.Image },
    ],
  },
  {
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];