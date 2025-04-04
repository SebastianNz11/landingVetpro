export const Seccion2 = () => {
  return (
    <div className="container-fluid fondo vh-100 d-flex justify-content-center" id="seccion2">
      <div className="row align-items-center">
        <div className="col-6 ps-5">
          <img
            src="/section2.2.png"
            alt=""
            className="img-fluid ms-5"
            style={{ height: "75vh", width: "100%" }}
          />
        </div>
        <div className="col-6 d-flex justify-content-center text-white pe-4">
          <div className="row me-2">
            <div className="col-12 mt-5">
              <h1 className="display-3 fw-bold me-5 ms-5">
                ¿Quiénes somos?
              </h1>
              <p className="fs-5 me-5 ms-5 ">
                Somos una clínica veterinaria que se preocupa por la salud y el
                bienestar de tus mascotas. Contamos con un equipo de
                profesionales altamente capacitados y con una amplia experiencia
                en el cuidado de animales. En VetPro, nos esforzamos por brindar
                un servicio de calidad y por establecer una relación de
                confianza con nuestros clientes .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
