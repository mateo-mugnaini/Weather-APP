import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/database";
import { app } from "./Firebase";
import Navbar from "../NavBar/Navbar";
import styles from "./Comments.module.css";

const database = app.database();

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const snapshot = await database.ref("comments").once("value");
        const commentsData = snapshot.val();
        if (commentsData) {
          const commentsArray = Object.values(commentsData);
          setComments(commentsArray);
        }
      } catch (error) {
        console.log("Error al recuperar los comentarios:", error);
      }
    };

    fetchComments();

    const commentsRef = database.ref("comments");
    commentsRef.on("child_added", (snapshot) => {
      const comment = snapshot.val();
      setComments((prevComments) => [...prevComments, comment]);
    });
    commentsRef.on("child_removed", (snapshot) => {
      const comment = snapshot.val();
      setComments((prevComments) => prevComments.filter((c) => c !== comment));
    });

    return () => {
      commentsRef.off();
    };
  }, []);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (newComment.trim() !== "") {
      const commentWithAuthor = `${name}: ${newComment}`;
      try {
        await database.ref("comments").push(commentWithAuthor);
        setNewComment("");
        setName("");
        setError("");
      } catch (error) {
        console.log("Error al guardar el comentario:", error);
      }
    } else {
      setError("El comentario no puede estar vacío");
    }
  };

  return (
    <div className={styles.Contenedor_General}>
      <div>
        <Navbar />
      </div>
      <div className={styles.Contenedor_General2}>
        <h2 className={styles.Titulos}>
          Deja tu comentario para poder mejorar la APP
        </h2>
        <h3 className={styles.Titulos}>
          Se ruega compromiso y seriedad a la hora de dejar tu comentario.
        </h3>
        <div className={styles.Contenedor_Formulario}>
          <form className={styles.Formulario} onSubmit={handleCommentSubmit}>
            <input
              type="text"
              className={styles.Input_Name}
              value={name}
              onChange={handleNameChange}
              placeholder="Tu nombre"
            />
            <textarea
              className={styles.Input}
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Escribe tu comentario..."
            ></textarea>
            <button className={styles.Btn_Formulario} type="submit">
              Enviar comentario
            </button>
            {error && <p>{error}</p>}
          </form>
        </div>
        <div className={styles.Contenedor_Comentarios}>
          {comments.map((comment, index) => (
            <div key={index} className={styles.Contenedor_Contenido}>
              <div className={styles.Comentario}>{comment}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
