import css from "./Contact.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.container}>
      <div>
        <p className={css.name}>
          <i className="fas fa-user"></i>
          {name}
        </p>
        <p className={css.number}>
          <i className="fas fa-phone"></i>
          {number}
        </p>
      </div>
      <button className={css.btnDelete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
