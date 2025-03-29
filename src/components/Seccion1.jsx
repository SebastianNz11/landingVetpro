export const Seccion1 = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 d-flex">
          <div className="row">
            <div className="col-12 m-auto ps-5 ms-5">
              <h1 className="display-1 fw-bold ms-5 color-text">VetPro</h1>
              <h3 className="ms-5 color-text">
                Salud y bienestar para tus mascotas.
              </h3>
              <button
                className="btn boton ms-5 mt-3 text-white fs-5 fw-bold"
                style={{ width: "250px", height: "50px" }}
              >
                Agendar cita
              </button>
            </div>
          </div>
        </div>
        <div className="col-6 p-0">
          <img
            src="/section1.jpg"
            alt=""
            className="img-fluid pt-0 mt-0"
            style={{ height: "95%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
