export const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 d-flex align-items-center justify-content-center">
          <img
            src="/VETPROB.png"
            alt=""
            style={{ height: "90%", width: "50%" }}
          />
        </div>
        <div className="col-6 d-flex flex-column align-items-start p-0 justify-content-center">
          <h6 className="color-text fs-4">
            <span className="fw-bold"> Direccion:</span> 0 ave. No. 100, Antigua
            Guatemala{" "}
          </h6>
          <h6 className="color-text fs-4">
            <span className="fw-bold">Teléfono:</span> 0000-0000{" "}
          </h6>
          <h6 className="color-text fs-4">
            <span className="fw-bold">Correo:</span> vetevp@gmail.com{" "}
          </h6>
        </div>
      </div>
    </div>
  );
};
