import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        {/* Input for name attribute */}
        <input 
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder="Contact Name"
        />
      </label>
      <br />
      <label>
        {/* Input for phone attribute */}
        <input 
          type="tel"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          // Regex for US phone Numbers
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          placeholder="Contact Phone (###-###-####)"
        />
      </label>
      <br />
      <label>
        {/* input for email attribute */}
        <input 
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Contact Email"
        />
      </label>
      <br />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
