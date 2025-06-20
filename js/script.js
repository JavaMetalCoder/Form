document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contatti-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value.trim(),
      surname: document.getElementById("surname").value.trim(),
      email: document.getElementById("email").value.trim(),
      message: document.getElementById("message").value.trim()
    };

    try {
      // URL ASSOLUTO per Live Server
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