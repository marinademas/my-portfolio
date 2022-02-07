import React from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    

    function encode(data){
        return Object.keys(data)
        .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="contact-section ">
            <div className="contact-container">
                <div className="contact-map-container">
                    <iframe
                      width="100%"
                      height="100%"
                      title="map"
                      className="contact-iframe"
                      frameBorder={0}
                      marginHeight={0}
                      marginWidth={0}
                      style={{ filter: "opacity(0.7)" }}
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d99388.39882562135!2d-77.10215604999999!3d38.88081650000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1643854119747!5m2!1sen!2sus"
                    />
                    <div className="contact-map-info">
                        <div className="contact-address">
                            <h2 className="contact-address-h2">
                                ADDRESS
                            </h2>
                            <p className="contact-address-p">
                                Arlington, VA 22201
                            </p>
                        </div>
                        <div className="contact-email">
                            <h2 className="contact-email-h2">
                                EMAIL
                            </h2>
                            <a className="contact-email-a ">
                                marina.o.demas@gmail.com
                            </a>
                            <h2 className="contact-phone-h2">
                                PHONE
                            </h2>
                            <p className="contact-phone-a">802-598-5861</p>
                        </div>
                    </div>
                </div>
                <form
                  netlify
                  name="contact"
                  onSubmit={handleSubmit}
                  className="contact-form">
                  <h2 className="contact-form-h2">
                    Contact Me
                  </h2>
                  <p className="contact-form-p">
                    If you have any questions or comments, please feel free to send me a message.
                  </p>
                  <div className="contact-form-name">
                    <label htmlFor="name" className="label-name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="input-name"
                        onChange={(e) => setName(e.target.value)}
                      />
                  </div>
                  <div className="contact-form-name">
                    <label htmlFor="email" className="label-name">
                        Email
                    </label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        className="input-name"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="contact-form-name">
                    <label
                        htmlFor="message"
                        className="label-name">
                        Message
                    </label>
                    <textarea 
                        id="message"
                        name="message"
                        className="input-name"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="button-contact">
                    Submit
                  </button>
                </form>
            </div>
        </section>
    );
}