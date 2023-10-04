import {useState} from "react";
import {Howl, Howler} from "howler";
import {Icon} from "@iconify/react";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import LoggedInContainer from "../containers/LoggedInContainer";

const focusCardsData = [
  {
    title: "Relax",
    description: "Relax and indulge with beautiful beats",
    imgUrl:
      "https://i.pinimg.com/564x/b4/2a/1b/b42a1bd9bd34eb6428795d4885389a9a.jpg",
    followers: "999,243 Followers",
  },
  {
    title: "Illuminate ",
    description: "Connect with the music and discover yourself",
    imgUrl:
      "https://i.pinimg.com/564x/e7/3e/9e/e73e9e2901e20d7530c03258704475d5.jpg",
    followers: "73,243 Followers",
  },
  {
    title: "Dream & Drive",
    description: "Music to fly you to the clouds",
    imgUrl:
      "https://i.pinimg.com/564x/4d/6b/60/4d6b609a2726a6003f6acac67bbac348.jpg",
    followers: "1,934 Followers",
  },
  {
    title: "Alone Again",
    description: "Sad beats to give you company in your sorrows",
    imgUrl:
      "https://i.pinimg.com/564x/6d/71/9a/6d719ac2efe3b375c3c60c19aa5355e5.jpg",
    followers: "13,32 Followers",
  },
  {
    title: "Hearbeat",
    description: "Focus with deep techno and tech house",
    imgUrl:
      "https://i.pinimg.com/564x/cc/ea/dc/cceadc2a14ce9cb497121f813037af60.jpg",
    followers: "123,243 Followers",
  },
];

const spotifyPlaylistsCardData = [
  {
    title: "Deep & Dark",
    description: "Enjoy your lustful journey",
    imgUrl:
      "https://i.pinimg.com/564x/ed/99/3c/ed993cb3b2bdf43a3509f58ae217be4b.jpg",
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with this music",
    imgUrl:
      "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
  },
  {
    title: "Instrumental Study",
    description: "Focus with soft study music in the background.",
    imgUrl:
      "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Focus Flow",
    description: "Up tempo instrumental hip hop beats",
    imgUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "Beats to think to",
    description: "Focus with deep techno and tech house",
    imgUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
];


const Home = () => {
    return (
        <LoggedInContainer curActiveScreen="home">
            <PlaylistView titleText="Focus" cardsData={focusCardsData} />
            <PlaylistView
                titleText="Spotify Playlists"
                cardsData={spotifyPlaylistsCardData}
            />
            <PlaylistView
                titleText="Sound of India"
                cardsData={focusCardsData}
            />
        </LoggedInContainer>
    );
};

const PlaylistView = ({titleText, cardsData}) => {
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{titleText}</div>
            <div className="w-full flex justify-between space-x-4">
                {
                    // cardsData will be an array
                    cardsData.map((item) => {
                        return (
                            <Card
                                title={item.title}
                                description={item.description}
                                imgUrl={item.imgUrl}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

const Card = ({title, description, imgUrl}) => {
    return (
        <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md" src={imgUrl} alt="label" />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};

export default Home;









// const Home = () => {
//   return (
//     <div className='h-full w-full flex'>
//       <div className='h-full w-full flex'>
//         {/* This first div will be the left panel */}
//         <div className='h-9/10 w-1/5 flex flex-col justify-between pb-10 bg-black'>
//           <div>
//             {/* This div is for logo */}
//             <div className='logoDiv p-1 flex items-center justify-center'>
//               <img
//                 src={LOGO}
//                 alt='spotify logo'
//                 // height={125}
//                 className='p-3 max-w-full h-auto'
//               />
//             </div>
//             <div className='py-5'>
//               <IconText
//                 iconName={"material-symbols:home"}
//                 displayText={"Home"}
//                 active
//               />
//               <IconText
//                 iconName={"material-symbols:search-rounded"}
//                 displayText={"Search"}
//               />
//               <IconText
//                 iconName={"icomoon-free:books"}
//                 displayText={"Library"}
//               />
//               <IconText
//                 iconName={"material-symbols:library-music-sharp"}
//                 displayText={"My Music"}
//               />
//             </div>
//             <div className='pt-5'>
//               <IconText
//                 iconName={"material-symbols:add-box"}
//                 displayText={"Create Playlist"}
//               />
//               <IconText
//                 iconName={"mdi:cards-heart"}
//                 displayText={"Liked Songs"}
//               />
//             </div>
//           </div>
//           <div className='px-5'>
//             <div className='border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer'>
//               <Icon icon='carbon:earth-europe-africa' />
//               <div className='ml-2 text-sm font-semibold'>English</div>
//             </div>
//           </div>
//         </div>

//         {/* This second div will be the right part(main content) */}
//         <div className='h-9/10 w-4/5 overflow-auto bg-gradient-to-t from-black via-gray-800 to-black'>
//           <div className='navbar w-full h-1/10  bg-opacity-30 flex items-center justify-end'>
//             <div className='w-1/2 flex h-full'>
//               <div className='w-3/5 flex justify-around items-center'>
//                 <TextWithHover displayText={"Premium"} />
//                 <TextWithHover displayText={"Support"} />
//                 <TextWithHover displayText={"Download"} />
//                 <div className='h-1/2 border-r border-white'></div>
//               </div>
//               <div className='w-2/5 flex justify-around h-full items-center'>
//                 <TextWithHover displayText={"Upload Song"} />
//                 <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer '>
//                   VD
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='content p-8 pt-0 overflow-auto'>
//             <PlaylistView 
//                 titleText='Focus' 
//                 cardsData={focusCardsData} />
//             <PlaylistView
//               titleText='Spotify Playlists'
//               cardsData={spotifyPlaylistsCardData}
//             />
//             <PlaylistView
//               titleText='Sound of India'
//               cardsData={focusCardsData}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const PlaylistView = ({ titleText, cardsData }) => {
//   return (
//     <div className='text-white mt-8'>
//       <div className='text-2xl font-semibold mb-5'>{titleText}</div>
//       <div className='w-full flex justify-between space-x-4  '>
//         {
//           // cardsData will be an array
//           cardsData.map((item) => {
//             return (
//               <Card
//                 title={item.title}
//                 description={item.description}
//                 imgUrl={item.imgUrl}
//                 followers={item.followers}
//               />
//             );
//           })
//         }
//       </div>
//     </div>
//   );
// };

// const Card = ({ title, description, imgUrl, followers }) => {
//   return (
//     <div className='bg-black bg-opacity-40 w-1/5 p-4 rounded-lg '>
//       <div className='pb-4 pt-2'>
//         <img
//           className='w-full h-40 rounded-md object-cover'
//           src={imgUrl}
//           alt='label'
//         />
//       </div>
//       <div className='text-white font-semibold py-3'>{title}</div>
//       <div className='text-gray-500 text-sm'>{description}</div>
//       <div className='text-gray-500 text-sm pt-3 font-semibold'>
//         {" "}
//         {followers}
//       </div>
//     </div>
//   );
// };


