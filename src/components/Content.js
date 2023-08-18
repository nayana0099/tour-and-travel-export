import Image1 from "../assets/0.jpg";
import Image2 from "../assets/boat.jpg";
import Image3 from "../assets/p2.jpg";
import Image4 from "../assets/paris.jpg";
import ContentData from "./ContentData";
import "./ContentStyles.css";
const Content = () => {
  return (
    <div className="content">
      <h1>Popular Destinations</h1>
      <p>Tours give you a oppurtunity to explore the world</p>
      <ContentData
        className="first-cont"
        heading="Taal volcano , Batangas"
        text="One of the most iconic views in Luzon,Mt.Tall Boats a volcano inside
     a lake inside an island.if tyou fancy a closer look,the hike up to
     crater is a mere 45 minutes, and is easy enough for beginners,Guides
     will assist you most of thw way.and you'll see the peculiar
     environment found pn an active volcano,including volcanic rocks and
     steam vents.The hike can be dusty and hot , so plan for an early
     moring trip,and then unwind with some bufalo before heading back
     home!."
        img1={Image1}
        img2={Image2}
      />
      <ContentData
        className="first-cont-reverse"
        heading="Paris, France"
        text="Paris has been the muse and a city to dream about for millions of people around the world.
     During the entire time, this city of love and enigma has captured the imaginations, captivated the hearts of thousands of poets, writers, architects, kings and queens, celebrities and travel lovers."
        text1="While the iconic landmark, the gorgeous Eiffel tower is everybody’s favourite, Paris boasts of many stunning architectural landmarks, from the Champs Elysees to the Notre Dame, adorable coffee shops, book stores, and all kinds of art at every corner."
        img1={Image3}
        img2={Image4}
      />
    </div>
  );
};
export default Content;
