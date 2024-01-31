import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";

const Page1 = () => {
  return (
    <Layout>
      <h1 >Dashboard</h1>

      <div
        style={{
          backgroundColor: "amber",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          height: "75%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "wheat",
             width: "70%",
          }}
        >
          <div
            style={{
            
              padding: "20px",
              margin: "20px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              border: "1px solid #ddd",
              overflow: 'hidden',
            //   justifyContent: "center",
            //   alignItems: "center",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa non
            sunt cum commodi adipisci saepe eum rerum officia, iusto, obcaecati
            reiciendis asperiores mollitia, natus aperiam repellat. Sint facere
            ratione libero? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Reiciendis minima fugiat labore officia harum modi, soluta,
            expedita, provident doloremque voluptatem similique placeat.
            Blanditiis recusandae dignissimos tenetur cupiditate numquam nobis
            dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Velit, praesentium doloribus tempora at corporis labore ullam, amet
            quisquam dolores rem reprehenderit perspiciatis laudantium eligendi,
            ad rerum sint delectus? Quis, explicabo.
          </div>
          <div
            style={{
              padding: "20px",
              margin: "20px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              border: "1px solid #ddd",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
            tempore id aliquid, laudantium soluta, qui quibusdam odio amet harum
            quidem nesciunt. Perspiciatis sit ipsum illum ratione corrupti!
            Minus, debitis non? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum nobis ex perferendis iste similique eius
            fugiat dolorem distinctio, assumenda earum, dicta ipsam cupiditate
            explicabo inventore nostrum, aspernatur consectetur quia amet! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Magni alias
            cumque deserunt. Odio, dignissimos distinctio culpa fuga voluptates
            hic tempora cum modi officia nostrum? Et saepe nulla modi
            accusantium excepturi. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Labore fugit, blanditiis, fuga repellendus quidem
            modi saepe reiciendis fugiat iusto laboriosam vero id explicabo
            eligendi sit eos pariatur ipsa, ut quis?
          </div>
        </div>
        <div
          style={{
            padding: "100px",
            margin: "10px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            border: "1px solid #ddd",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste
          inventore fugiat, consectetur explicabo necessitatibus, accusamus
          ipsum cupiditate quam doloremque ad unde autem adipisci temporibus,
          sequi sunt aliquid aperiam laudantium.
        </div>
      </div>
    </Layout>
  );
};

export default Page1;
