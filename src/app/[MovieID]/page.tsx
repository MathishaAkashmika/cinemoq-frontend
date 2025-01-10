import Banner from "../components/Banner";
import Footer from "../components/FooterNew";
import MovieDetails from "../components/MovieDetails";
import Navbar from "../components/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';

async function fetchMovie(MovieID: string) {

const mockMovies = [
  {
    id: "2",
    title: "Heretic",
    imdb: "7.3",
    description: "In 'Heretic', a group of archaeologists uncover an ancient relic that has been buried for centuries. Their discovery takes them on a thrilling journey through remote and dangerous locations, but they soon realize that the artifact is cursed. As the team delves deeper into the mystery, they begin experiencing strange phenomena, leading to terrifying consequences. The group is forced to confront their fears as they fight to survive against an unstoppable force. Tensions rise as trust among the team members breaks down, and their efforts to break the curse only seem to make things worse. With their lives on the line, they must work together to unravel the artifact's dark history and escape its deadly grip. Can they overcome the curse before it's too late?",
    poster: "/images/2.jpg",
  },
  {
    id: "3",
    title: "Anora",
    imdb: "8.4",
    description: "Anora is a skilled thief who lives by a strict moral code, stealing from the rich to survive. When she is approached by a mysterious employer with an offer she can't refuse, Anora finds herself involved in a high-stakes mission to perform inception on a powerful businessman. As she enters the minds of her targets, she discovers a world of secrets, lies, and manipulation that threatens not only her mission but her life. With time running out, Anora must outsmart both her enemies and her own doubts to complete the job. But the deeper she goes into the minds of her targets, the harder it becomes to distinguish between reality and illusion. She must find a way to escape before her enemies turn the tables on her. 'Anora' is a psychological thriller that explores the boundaries of the mind and the consequences of tampering with it.",
    poster: "/images/3.jpg",
  },
  {
    id: "4",
    title: "Conclave",
    imdb: "7.8",
    description: "Set against a backdrop of global political turmoil, 'Conclave' follows a secretive group that has the power to shape world events from the shadows. These individuals, known as the Conclave, operate from the highest levels of government, influencing key decisions to maintain control over the world's future. However, a young journalist uncovers their existence and begins a dangerous investigation to expose their manipulations. As the journalist digs deeper, they realize that the Conclave's power extends far beyond what anyone could have imagined. With allies turning against them and their own safety at risk, the journalist must decide whether to continue the investigation or protect their loved ones. The stakes escalate as the conspiracy unravels, leading to a climactic showdown that will change the course of history. 'Conclave' is a gripping political thriller that explores power, corruption, and the cost of truth.",
    poster: "/images/4.jpg",
  },
  {
    id: "5",
    title: "Emilia Perez",
    imdb: "6.9",
    description: "Emilia Perez, a young woman with big dreams, finds herself caught in the dangerous world of drug trafficking after a series of unfortunate events. Forced to make difficult choices, Emilia becomes deeply entangled in the criminal underworld while trying to protect her family and secure a future for herself. As she rises through the ranks, Emilia is confronted with the harsh realities of the trade—betrayal, violence, and the ever-present threat of law enforcement. As she tries to escape the grip of the drug lord she works for, Emilia realizes that there is no easy way out. Her journey is one of survival, as she must outwit both her enemies and the authorities while seeking redemption. 'Emilia Perez' is a powerful story of resilience and the choices one woman makes when faced with impossible circumstances.",
    poster: "/images/5.jpg",
  },
  {
    id: "6",
    title: "Trap",
    imdb: "7.0",
    description: "'Trap' follows a group of strangers who find themselves trapped in a high-tech underground facility with no way to escape. As they begin to explore their surroundings, they quickly realize that the facility is filled with dangerous and deadly traps designed to test their survival skills. The group is forced to work together in order to survive, but the stakes are raised when they discover that one of them may be sabotaging their efforts. As the group descends into paranoia and distrust, the tension escalates, and the traps become more insidious. The situation turns from bad to worse as they uncover the sinister reason behind their entrapment. In a race against time, they must find a way out before the facility's deadly mechanisms claim them one by one. 'Trap' is a pulse-pounding thriller about survival and the human will to escape impossible odds.",
    poster: "/images/6.jpg",
  },
  {
    id: "7",
    title: "Smile 2",
    imdb: "6.5",
    description: "In the chilling sequel 'Smile 2', a young woman named Sarah finds herself plagued by a sinister curse that forces its victims to smile uncontrollably before they meet a horrific end. As Sarah tries to track down the origin of the curse, she discovers that it has been passed on to others in a horrifying chain. Determined to break the cycle and save herself, Sarah teams up with a group of other victims who have been marked by the curse. Together, they must find a way to stop the supernatural force before it claims more lives. As they race against time, Sarah must confront her darkest fears and the terrifying truth behind the curse. Will they be able to stop it before they are consumed by it? 'Smile 2' is a terrifying tale that explores the power of fear and the lengths people will go to survive.",
    poster: "/images/7.jpg",
  },
  {
    id: "8",
    title: "Arcadia",
    imdb: "8.2",
    description: "In a dystopian future where society is controlled by a totalitarian regime, a group of rebels known as the Arcadians fight for freedom. The story follows a young woman, Mara, who is thrust into the revolution when her family is caught in the crossfire of the regime's cruelty. As Mara joins the Arcadians, she learns the harsh realities of the rebellion and the sacrifices it requires. The group must navigate through enemy territory, where dangers lurk at every turn. As they uncover shocking truths about the regime's control over society, the stakes become even higher. Mara faces the ultimate challenge: to continue the fight for freedom or give in to the overwhelming pressure of an oppressive system. 'Arcadia' is an action-packed, thought-provoking tale of resistance, sacrifice, and the pursuit of justice in a world where hope is the greatest weapon.",
    poster: "/images/8.jpg",
  },
  {
    id: "9",
    title: "Road House",
    imdb: "7.1",
    description: "Dalton is a professional bouncer who is hired to clean up a rough-and-tumble bar in a small town. But as he gets to work, he quickly learns that the town is under the control of a corrupt businessman, Brad Wesley. As Dalton faces off against the local thugs and tries to restore order to the bar, he finds himself caught in a violent struggle for control of the town. The stakes grow higher as Dalton's past catches up with him, and the conflict escalates into a final showdown between him and Wesley. With a mix of action, suspense, and intense fight scenes, 'Road House' delivers a thrilling ride as Dalton fights for justice in a corrupt world. With his skills and wit, Dalton proves that he's not just a bouncer—he's a force to be reckoned with.",
    poster: "/images/9.jpg",
  },
  {
    id: "14",
    title: "Dune",
    imdb: "8.6",
    description: "'Dune' is a monumental science fiction epic set in the distant future on the desert planet of Arrakis. Paul Atreides, a young nobleman, must navigate a world of political intrigue, family betrayal, and power struggles as he becomes embroiled in the fight for control of Arrakis, the most valuable planet in the universe. Arrakis is the source of the spice melange, which is crucial for interstellar travel, and whoever controls it holds the key to the universe's future. As Paul learns of his family's legacy and the ancient prophecies that surround him, he begins to understand his true destiny. With stunning visuals, intense action, and a compelling story, 'Dune' explores themes of power, survival, and the price of destiny. Paul's journey will change not only his life but the fate of all of Arrakis.",
    poster: "/images/14.jpg",
  },
  {
    id: "15",
    title: "US",
    imdb: "7.5",
    description: "In 'US', a family on vacation is stalked by their terrifying doppelgangers, who seem to know their every move. As the two families face off in a brutal confrontation, the visitors must confront the dark and twisted truth behind the invasion. The protagonist, Adelaide, struggles to make sense of the bizarre events unfolding around her, leading to shocking revelations about her past and the true identity of the invaders. The tension mounts as the family must fight for survival against their own darker selves, facing the ultimate question: who are the true monsters? With intense horror and a mind-bending twist, 'US' is a chilling tale about identity, survival, and the haunting power of the self. Can Adelaide protect her family and uncover the truth before it’s too late?",
    poster: "/images/15.jpg",
  },
  {
    id: "16",
    title: "Walk Alone",
    imdb: "7.2",
    description: "'Walk Alone' is a heartfelt journey of a man named Henry who embarks on a solitary trek across a desolate wilderness to escape the painful memories of his past. Struggling with feelings of guilt and loss, Henry's journey becomes a quest for redemption and healing. Along the way, he faces harsh weather conditions, treacherous terrain, and the isolation of being completely alone. As he confronts the ghosts of his past, Henry begins to reflect on his life and the choices that brought him to this point. His journey is one of personal growth and discovery, as he learns that true healing comes from within. With stunning cinematography and an emotional storyline, 'Walk Alone' is a moving exploration of grief, self-reflection, and the search for peace.",
    poster: "/images/16.webp",
  },
  {
    id: "17",
    title: "Split",
    imdb: "8.0",
    description: "In 'Split', Kevin, a man with 23 distinct personalities, kidnaps three teenage girls and locks them in a basement. As the girls attempt to escape, they encounter various personalities within Kevin, each with its own motives and behaviors. The most terrifying of these is 'The Beast,' a dangerous and superhuman alter-ego that threatens to kill the girls. As they struggle to survive, the girls must learn how to manipulate Kevin's personalities in order to gain their freedom. The film explores the complexities of dissociative identity disorder and the impact of trauma on the human mind. With a gripping storyline and intense performances, 'Split' keeps viewers on the edge of their seats until the very end.",
    poster: "/images/17.jpg",
  },
  {
    id: "18",
    title: "Mean Girls",
    imdb: "7.0",
    description: "Cady Heron, a high school student who was homeschooled in Africa, enters a new public school and quickly becomes entangled with the school's most popular and ruthless clique, known as 'The Plastics.' Led by the manipulative Regina George, The Plastics are known for their beauty, wealth, and social status. As Cady navigates the complex social dynamics of high school, she becomes increasingly caught up in the games and drama that Regina and her friends create. What begins as a way to fit in soon turns into a battle for social dominance, as Cady's own morals and identity begin to clash with the toxic behavior of her peers. 'Mean Girls' is a sharp, witty comedy that satirizes high school cliques, friendships, and the pursuit of popularity, all while delivering important lessons about self-worth and the dangers of conformity.",
    poster: "/images/18.jpg",
  },
  {
    id: "19",
    title: "Alien Romulus",
    imdb: "6.8",
    description: "'Alien Romulus' is a gripping sci-fi thriller that follows the story of a group of astronauts sent to explore a distant planet. Upon landing, they encounter a strange alien species whose motives are unclear, and as they begin to explore further, they realize that the aliens are not what they seem. Uncovering terrifying secrets about the planet and the beings that inhabit it, the astronauts must work together to survive the growing threats from both the environment and the aliens. As the tension mounts, the crew begins to question their mission and whether they will ever make it back to Earth. With its atmospheric tension and stunning visuals, 'Alien Romulus' explores themes of fear, isolation, and the unknown dangers that lie beyond our world.",
    poster: "/images/19.jpg",
  },
  {
    id: "20",
    title: "Tenet",
    imdb: "8.0",
    description: "Christopher Nolan’s 'Tenet' is a mind-bending thriller that explores the concept of time manipulation. The film follows a protagonist, known only as 'The Protagonist,' as he embarks on a dangerous mission to prevent World War III. Armed with the concept of 'time inversion,' where objects and people can move backward in time, he must navigate a world where the normal laws of physics no longer apply. As he uncovers a global conspiracy involving the mysterious arms dealer Sator, The Protagonist teams up with a group of allies to unravel the mystery before it’s too late. With stunning action sequences, complex narrative twists, and a deep philosophical core, 'Tenet' challenges the audience’s understanding of time, fate, and free will.",
    poster: "/images/20.jpg",
  },
  {
    id: "21",
    title: "Twisters",
    imdb: "6.7",
    description: "In 'Twisters,' a team of storm chasers, led by a fearless meteorologist, embark on a daring mission to study a newly emerging series of super-tornadoes that threaten to destroy everything in their path. As they venture into the heart of the storm, they must confront their fears and the unpredictability of nature. The team races against time to gather critical data that could save millions of lives while battling treacherous weather conditions. But as the storms grow more intense and unpredictable, they realize that they might not be able to escape the destructive power of the tornadoes. Filled with intense action, breathtaking visuals, and edge-of-your-seat moments, 'Twisters' is an exhilarating disaster film about survival and human determination in the face of nature's fury.",
    poster: "/images/21.jpg",
  },
  {
    id: "22",
    title: "Abigail",
    imdb: "6.9",
    description: "In the mysterious city of Abigail, a young girl named Abigail discovers that her once-prosperous city has been cut off from the outside world for many years. A secret society controls the city's magical resources, and Abigail soon learns that she possesses a unique ability to manipulate these powers. As she delves deeper into the mysteries of the city, she uncovers dark secrets that could change the course of history. Abigail must navigate a dangerous path between loyalty, betrayal, and the unknown, as she begins to question the true purpose of her powers and the oppressive regime controlling the city. 'Abigail' is an atmospheric fantasy film filled with action, mystery, and a coming-of-age story about one girl's journey to uncover the truth about her past and future.",
    poster: "/images/22.jpg",
  },
  {
    id: "23",
    title: "Moonlight",
    imdb: "8.0",
    description: "'Moonlight' is a poignant and deeply emotional story that follows the life of Chiron, a young African-American man growing up in a rough neighborhood in Miami. The film is divided into three acts, each focusing on a different stage in Chiron's life: his childhood, adolescence, and adulthood. As Chiron navigates the challenges of growing up in a world marked by poverty, crime, and his own internal struggles with his sexuality, the film explores themes of identity, love, and the impact of societal expectations. With its stunning cinematography and powerful performances, 'Moonlight' is a transformative film that highlights the complexity of human relationships and the search for personal truth in the face of adversity.",
    poster: "/images/23.jpg",
  },
  {
    id: "24",
    title: "Pearl",
    imdb: "7.4",
    description: "'Pearl' is a psychological thriller that follows a young woman named Pearl who struggles with isolation and the loss of her family. Living in a small town with no friends and a broken past, Pearl’s life takes a dark turn when she begins to develop a dangerous obsession with a new neighbor. Her fascination grows to the point where she is willing to do anything to get closer to the neighbor, including engaging in increasingly disturbing behavior. As Pearl's obsession spirals out of control, she begins to lose touch with reality, and her quest for connection becomes more violent and unpredictable. 'Pearl' is a chilling exploration of obsession, loneliness, and the fine line between sanity and madness.",
    poster: "/images/24.jpg",
  }
];
const movie = mockMovies.find((movie) => movie.id === MovieID);
  return movie || null;
}

export default async function MovieDetailPage({ params }: { params: { MovieID: string } }) {
  const { MovieID } = params;
  
  const movie = await fetchMovie(MovieID);  
  

  if (!movie) {
    return <div className="text-center text-white">Movie not found.</div>;
  }

  return (
    <div className="bg-gradient-to-t from-purple-800 via-black to-black min-h-screen flex flex-col">
      <Navbar />
      <Banner title={movie.title} starring={[]} imageUrl={movie.poster} />
      <MovieDetails
        title={movie.title}
        imdb={movie.imdb}
        description={movie.description}
        poster={movie.poster}
        starring={[]}
        MovieID={MovieID}  
      />
      <Footer />
    </div>
    
  );
}
