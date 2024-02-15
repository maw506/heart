// script.js
function mostrarAlerta() {
  function preguntarNuevamente() {
    Swal.fire({
      icon: "",
      html: `
          <div class="rosa-icon-container">
            <i class="bi bi-arrow-through-heart rosa-icon"></i>
          </div>
          <div class="rosa-text-container">
            <h2 class="text-center">¿Te queria preguntar si querias ser mi San valentin?</h2>
          </div>
        `,
      showCancelButton: true,
      confirmButtonColor: "#FF69B4",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      customClass: {
        content: "rosa-content",
        confirmButton: "rosa-btn",
        cancelButton: "rosa-btn",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          html: `
                <div class="rosa-icon-container latido">
                    <i class="bi bi-balloon-heart"></i>
                    </div>
                    <div class="rosa-text-container">
                    <p>Mas te valia ah jajaj</p>
                    <h3 class="text-center">!! TE AMOO !!</h3>
                </div>
        `,
          icon: "",
          confirmButtonColor: "#FF69B4",
          confirmButtonText: "Chi",
          customClass: {
            content: "rosa-content",
            confirmButton: "rosa-btn",
          },
        });
      } else {
        preguntarNuevamente();
      }
    });
  }

  preguntarNuevamente();
}

function showAlert() {
  Swal.fire({
    icon: "question",
    title: "",
    html: `
    <p class="mb-4 mt-2">Queria hacerte una tarjetita mas original, y como programo todo el dia, se me ocurrio estoo</p>
    <h2 class="mb-4 mt-3"><b>Hace click en el corazoncito</b></h2>
    `,
    customClass: {
      content: "rosa-content",
      confirmButton: "rosa-btn",
      cancelButton: "rosa-btn",
    },
    showCancelButton: false,
  });
}
