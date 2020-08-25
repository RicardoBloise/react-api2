import React from "react";

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center>
        <h1>Datos de Alturas de Mareas</h1>
      </center>
      {contacts.map((contact) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              <span>ID: {contact.features[1].id} </span>
              <p>TYPE: {contact.type}</p>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              {contact.features[1].type}
            </h6>
            {contact.features[1].geometry["coordinates"][0]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
