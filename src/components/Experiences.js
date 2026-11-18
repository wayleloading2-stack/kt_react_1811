
import "./Experiences.css"; // Подключаем стили компонента

// Категории и пути к их PNG-иконкам
const categories = [
  { icon: "/assets/icons/category-icons.png", name: "Icons" },
  { icon: "/assets/icons/amazing-pools.png", name: "Amazing pools" },
  { icon: "/assets/icons/farms.png", name: "Farms" },
  { icon: "/assets/icons/amazing-views.png", name: "Amazing views" },
  { icon: "/assets/icons/lakefront.png", name: "Lakefront" },
  { icon: "/assets/icons/caves.png", name: "Caves" },
  { icon: "/assets/icons/rooms.png", name: "Rooms" },
  { icon: "/assets/icons/cabins.png", name: "Cabins" },
  { icon: "/assets/icons/countryside.png", name: "Countryside" },
  { icon: "/assets/icons/treehouses.png", name: "Treehouses" },
  { icon: "/assets/icons/omg.png", name: "OMG!" },
  { icon: "/assets/icons/luxe.png", name: "Luxe" },
  { icon: "/assets/icons/beach.png", name: "Beach" },
  { icon: "/assets/icons/historical-homes.png", name: "Historical homes" },
  { icon: "/assets/icons/mansions.png", name: "Mansions" },
  { icon: "/assets/icons/domes.png", name: "Domes" },
  { icon: "/assets/icons/national-parks.png", name: "National parks" },
  { icon: "/assets/icons/castles.png", name: "Castles" }
];

// Три карточки верхнего блока

const liveExperiences = [
    {
      image: "/assets/images/beetlejuice-house.png",
      title: "Haunt the Beetlejuice house",
      location: "Hosted by Delia Deetz"
    },
    {
      image: "/assets/images/living-room-session.png",
      title: "Join the Living Room Session with D...",
      location: "Hosted by Bela"
    },
    {
      image: "/assets/images/purple-rain-house.png",
      title: "Stay in Prince's Purple Rain house",
      location: "Hosted by Wendy"
    }
  ];
  
  const pastExperiences = [
    { image: "polly-pocket-playdate.png", title: "Playdate at Polly Pocket's Compact" },
    { image: "polly-pocket-sleepover.png", title: "Sleepover at Polly Pocket's Compact" },
    { image: "kevin-hart-vip.png", title: "Go VIP with Kevin Hart" },
    { image: "x-mansion-training.png", title: "Train at the X-Mansion" },
    { image: "janhvi-kapoor.png", title: "Live like Bollywood star Janhvi Kapoor" },
    { image: "olympic-games.png", title: "Open the Olympic Games at Musée" },
    { image: "musee-orsay.png", title: "Wake up in the Musée d'Orsay" },
    { image: "inside-out.png", title: "Make core memories inside Out" },
    { image: "incredibles-supersuit.png", title: "Design your Incredibles Supersuit" },
    { image: "feid-tour.png", title: "Go on tour with Feid" },
    { image: "khaby-lame.png", title: "Game with Khaby Lame" },
    { image: "x-mansion.png", title: "Crash at the X-Mansion" },
    { image: "ferrari-museum.png", title: "Spend the night in the Ferrari Museum" },
    { image: "up-house.png", title: "Drift off in the Up house" },
    { image: "shreks-swamp.png", title: "Shrek's Swamp" },
    { image: "barbie-dreamhouse.png", title: "Barbie's Malibu DreamHouse" },
    { image: "ted-lasso-pub.png", title: "Ted Lasso's Favorite Pub" },
    { image: "houseplant-retreat.png", title: "Houseplant Retreat" },
    { image: "home-alone-holiday.png", title: "Home Alone Holiday" },
    { image: "last-blockbuster.png", title: "The Last Blockbuster" }
  ];
  

// Основной компонент со всеми карточками
function Experiences() {
  return (
    <main className="experiences">

      {/* Категории */}
      <div className="categories">
        {categories.map((category) => (
          <div className="category" key={category.name}>
            <img src={category.icon} alt="" className="category-icon" />
            <span>{category.name}</span>
          </div>
        ))}
      </div>

      {/* Верхний ряд из трёх карточек */}
      <section className="live-section">
        <div className="live-grid">
          {liveExperiences.map((item) => (
            <article className="experience-card" key={item.title}>
              <div className="experience-image">
                <img src={item.image} alt={item.title} />
                <span className="share-icon">↗</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.location}</p>
              <span className="sold-out">Sold out</span>
            </article>
          ))}
        </div>
      </section>

      {/* Раздел прошлых впечатлений */}
      <section className="past-section">
        <h2>Past experiences</h2>

        {/* Сетка из шести карточек в ряд */}
        <div className="past-grid">
          {pastExperiences.map((item, index) => (
            <article className="experience-card" key={index}>
              <div className="experience-image">
                <img
                  src={`/assets/images/${item.image}`}
                  alt={item.title}
                />

                <span className="share-icon">↗</span>
                <div className="image-dots">•••••</div>
              </div>

              <h3>{item.title}</h3>
              <p>Hosted by Airbnb</p>
              <span className="sold-out">Sold out</span>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Experiences; // Экспортируем компонент
