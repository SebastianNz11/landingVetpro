export const Seccion1 = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5 d-flex">
          <div className="row">
            <div className="col-12 m-auto">
              <h1 className="display-1 fw-bold ms-5">VetPro</h1>
              <h3 className="ms-5">Salud y bienestar para tus mascotas.</h3>
              <button className="btn btn-warning ms-5 mt-3">Agendar cita</button>
            </div>
          </div>
        </div>
        <div className="col-7">
          <img
            src="/public/section1.jpg"
            alt=""
            className="vh-100 img-fluid w-100 m-0 p-0"
          />
        </div>
      </div>
    </div>
  );
};
