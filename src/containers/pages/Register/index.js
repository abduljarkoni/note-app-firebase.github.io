import React, { Component } from "react";
import "./Register.scss";
import firebase from "../../../config/firebase";

class Register extends Component {
  //1. membuat state email dan password
  state = {
    email: "",
    password: "",
  };

  //2.membuat fungsi handleperubahan text
  handleChangeText = (e) => {
    // 5.buat consolelog e disini adalah element
    //tambahkan pada console.log e.target.id
    //maka akan tau perubahan mana yang sedang di rubah dalam texinput dalam id
    //tambah kan juga id dalam inputan
    // console.log(e);

    // 6.buat seState untuk menangkap inputan
    //buat pembeda setiap inputanya karena nilai inputan
    //akan sama jika valuenya sma
    this.setState({
      // untuk tes inputan yg sma
      //>>
      // email: e.target.value,
      // password: e.target.value,

      // 9. disini kita gunakan targetnya adalah id
      //agar form nya di namis nangkap value berdasarkan id
      [e.target.id]: e.target.value,
    });
  };

  //3. membuat fungsi handle button
  handleRegisterSubmit = () => {
    // 8.inputan yang di hasil value yang sama di console.log
    //untuk tes inputan
    // console.log("email : ", this.state.email);
    // console.log("password : ", this.state.password

    // 10. buat const para meter email dan password
    //agar kodingan jdi lebih sedikit
    const { email, password } = this.state;

    // 12 tambahkan ini untuk mengetahui data yg sebelum di krim
    console.log("data sebelum dikirim :", email, password);

    // 9. kodingan dari documentasi firebaase
    //jangan lupa IMPORT FIREBASE DI ATAS

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      // .then((userCredential) => {
      //   // Signed in
      //   var user = userCredential.user;
      //   // ...
      // })

      // 11.tambah kan ini jika sukses
      .then((res) => {
        console.log("success", res);
      })
      .catch((error) => {
        // jika ada error maka akan di tampilkan
        var errorCode = error.code;
        var errorMessage = error.message;

        //buat konsole jik terjadi erros
        console.log(errorCode, errorMessage);
      });
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Register page</p>

          {/* 4. masukan fungsi ongchange dalam inputan email dan password */}
          <input
            id="email"
            className="input"
            type="text"
            placeholder="email"
            onChange={this.handleChangeText}
          />
          <input
            id="password"
            className="input"
            type="password"
            placeholder="password"
            onChange={this.handleChangeText}
          />

          {/* 7. untuk memanggil fungsi handleRegisterSubmit menggunakn fungsi onclick */}
          <button className="btn" onClick={this.handleRegisterSubmit}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
