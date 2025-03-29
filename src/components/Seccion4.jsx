export const Seccion4 = () => {
  return (
    <div className="container-fluid vh-100 fondo" id="seccion4">
      <div className="row">
        <div className="col-6 d-flex align-items-center justify-content-center">
          <img
            src="/servicios.png"
            alt=""
            className="img-fluid"
            style={{ height: "90%", width: "100%" }}
          />
        </div>
        <div
          className="col-6 d-flex flex-column justify-content-center align-items-start p-0"
          style={{ minHeight: "100vh" }}
        >
          <h3 className="display-3 fw-bold text-white w-100">
            Nuestros servicios
          </h3>
          <div className="w-100">
            <ul>
              <li className="text-white fs-2">Servicios médicos</li>
              <li className="text-white fs-2">Emergencias</li>
              <li className="text-white fs-2">Grooming</li>
              <li className="text-white fs-2">Vacunación</li>
              <li className="text-white fs-2">Desparacitación</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
