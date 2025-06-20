document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contatti-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    try {
      const response = await fetch("http://localhost:3000/contatti", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.text();
        console.log('Risposta dal server:', result);
        alert('Messaggio inviato con successo!');
        form.reset();
      } else {
        console.error('Errore invio:', response.status);
        alert('Errore durante l’invio.');
      }
    } catch (error) {
      console.log("Errore di rete: " + error);
      alert("Errore di rete!");
    }
    
  })
})