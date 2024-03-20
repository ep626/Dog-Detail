const Gallery = ({ images }) => {
  return (
    <div>
      <h2> Your Screenshot Gallery!</h2>
      <div className="image-container">
      <ul style={{ listStyleType: 'none' }}>
        {images && images.length > 0 ? (
          images.map((pic, index) => (
            <li className="gallery" key={index}>
              <img
                className="gallery-screenshot"
                src={pic}
                alt="Undefined screenshot from query"
                width="200px"
              />
            </li>
          )
          )
        ) : (
          <div>
            <h3>You haven't made a screenshot yet!</h3>
          </div>
        )}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;