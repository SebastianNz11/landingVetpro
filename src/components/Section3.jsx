import { useForm } from "react-hook-form";
export const Section3 = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container-fluid vh-75" id="seccion3">
      <h2 className=" display-1 fw-bold color-text text-center mt-5">
        Agenda tu cita
      </h2>
      <div className="row">
        <div className="col-6 mt-5 pt-3 d-flex justify-content-end">
          <form
            className="form-width ms-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              className="mb-3 form-control-lg w-100 form-border form-height"
              placeholder="Nombre"
              {...register("nombre", {
                required: true,
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 letras",
                },
                maxLength: {
                  value: 10,
                  message: "El nombre debe tener máximo 10 letras",
                },
              })}
            />
            {errors.nombre && <p className="text-danger">{errors.nombre.message}</p>}
            <input
              type="text"
              className="mb-3 form-control-lg w-100 form-border form-height"
              placeholder="Apellido"
              {...register("apellido", {
                required: true,
                minLength: {
                  value: 2,
                  message: " El apellido debe tener al menos 2 letras",
                },
                maxLength: {
                  value: 10,
                  message: " El apellido debe tener al máximo 10 letras",
                },
              })}
            />
            {errors.apellido && <p className="text-danger">{errors.apellido.message}</p>}
            <input
              type="text"
              maxLength="8"
              className="mb-3 form-control-lg w-100 form-border form-height"
              placeholder="Teléfono"
              {...register("telefono", {
                required: true,
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Solo se permiten números",
                },
              })}
            />
            {errors.telefono && <p className="alerta">{errors.telefono.message}</p>}
            <input
              type="email"
              className="mb-3 form-control-lg w-100 form-border form-height"
              placeholder="Correo"
              {...register("correo", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Ingrese un correo válido (ej: usuario@correo.com)",
                },
              })}
            />
            {errors.correo && <p className="text-danger">{errors.correo.message}</p>}
            <input
              type="text"
              className="mb-3 form-control-lg w-100 form-border form-height"
              placeholder="Asunto"
              {...register("asunto", {
                required: true,
                minLength: {
                  value: 5,
                  message: "El asunto debe tener al menos 5 caracteres",
                },
                maxLength: {
                  value: 25,
                  message: "El asunto debe tener al menos 25 caracteres",
                },
              })}
            />
            {errors.asunto && <p className="text-danger">{errors.asunto.message}</p>}
            <button
              className="btn boton mb-5 fw-bold fs-5"
              style={{ width: "250px", height: "50px" }}
            >
              Enviar
            </button>
          </form>
        </div>

        <div className="col-6">
          <img
            src="/contact.jpg"
            alt=""
            className="img-fluid"
            style={{ height: "90%", width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
};
