import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/i.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Hungarian"
          text="Hungarian, Fisherman's Bastion is one of the best known monuments in Budapest,The present day lovely lookout towers / decorative fortification of Fisherman’s Bastion were built in the 19th century to serve as a lookout tower for the best panoramic views in Budapest, Hungary. "
        />
        <TripData
          image={Trip2}
          heading="Trip to Greece"
          text="Greece,  The Holy Monastery of Varlaam was named after its founder, the ascetic monk Varlaam who lived in a cave as a hermit and built a chapel on top of a rock. In the 16th century, two brothers, Theophanis and Nektarios Apsaradas who were both monks, enlarged the chapel and built a monastery."
        />
        <TripData
          image={Trip3}
          heading="Trip to Indonesia"
          text="Indonesia, Visit the top highlight destinations in Ubud in one day tour including the famous Ubud Monkey Forest, Ceking Rice Terrace at Tegalalang, Holy spring temple at Tirta Empul, Ubud Palace, and Ubud Art Market, and Tegenungan Waterfall."
        />
      </div>
    </div>
  );
}
export default Trip;
