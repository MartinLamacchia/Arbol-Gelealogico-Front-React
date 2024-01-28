import React, { useState } from "react";
import Logo from "../../assets/descarga.png";
import style from "./Register.module.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    username: "",
    image: "",
  });

  const handleChange = (e) => {
    const property = e.target.name
    const value = e.target.value

    setForm({...form, [property]: value})
  }

  const handleChangeUploadImage = (e) => {
    const imageFile = e.target.files[0]

    setForm({...form, image: URL.createObjectURL(imageFile)})
  }

  console.log(form);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.containerLogo}>
          <img src={Logo} alt="" />
          <h3>Registrarse</h3>
        </div>
        <form action="" className={style.containerForm}>
          <input type="text" placeholder="Nombre" name="name" value={form.name} onChange={handleChange}/>
          <input type="text" placeholder="Apellido" name="lastname" value={form.lastname} onChange={handleChange}/>
          <input type="text" placeholder="Email" name="email" value={form.email} onChange={handleChange}/>
          <input type="text" placeholder="Password" name="password" value={form.password} onChange={handleChange}/>
          <input type="text" placeholder="Username" name="username" value={form.username} onChange={handleChange}/>
          <div className={style.containerInputImage}>
            <input type="file" accept="image/*" name="image" onChange={handleChangeUploadImage}/>
            {form.image && <img src={form.image} alt="Imagen del Usuario en Registro" />}
          </div>
          <button type="button">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
