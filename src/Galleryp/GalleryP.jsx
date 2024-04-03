import React, { useState } from 'react';
import omkarNature from "../Json/JsonDaata";

function GalleryP() {
  const [items, setItems] = useState(omkarNature);

  const filterItems = (category) => {
    if (category === 'All') {
      setItems(omkarNature);
    } else {
      const updatedItems = omkarNature.filter((item) => item.category === category);
      setItems(updatedItems);
    }
  };

  return (
    <>
    <div className="container">

      <div className="homeScroll4">
        <div className="homeSection" id="home">
          <div className="homeText">
            <h1 style={{ color: "#fff" }}>Gallery</h1>
          </div>
        </div>
      </div>

      <section className="myGallery">
        <div className="titleSection">
          <h3>Browse our Gallery</h3>
        </div>
        <div className="filters filter-button-group">
          <ul>
            <li className="active">
              <a href="#all" onClick={() => filterItems('All')}>All</a>
            </li>
            <li>
              <a href="#room" onClick={() => filterItems('room')}>Room</a>
            </li>
            <li>
              <a href="#swimmingpool" onClick={() => filterItems('Swimmingpool')}>Swimming Pool</a>
            </li>
            <li>
              <a href="#events" onClick={() => filterItems('events')}>Events</a>
            </li>
            <li>
              <a href="#activities" onClick={() => filterItems('activity')}>Activities</a>
            </li>
          </ul>
        </div>

        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3 hero" style={{ marginBottom: "20px" }}>
              <div id="containergallery" className="isotope" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="grid-item" data-filter={item.category} data-page={1} style={{ left: 0, top: 0 }}>
                  <img src={item.imageUr1} alt="" style={{ marginBottom: "10px", maxWidth: "100%", alignSelf: "center" }} />
                  <div className="overlay">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}

export default GalleryP;
