document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const noise = document.querySelector(".noise");
  const headBoxContent = document.querySelector(".head-box-content");

  if (!logo || !noise || !headBoxContent) return;

  let isGlitchActive = false;

  const setGlitchState = (activate) => {
    isGlitchActive = activate;
    if (activate) {
      logo.classList.add("devolver");
      noise.classList.remove("oculto");
      headBoxContent.classList.add("glitch");
    } else {
      logo.classList.remove("devolver");
      noise.classList.add("oculto");
      headBoxContent.classList.remove("glitch");
    }
  };

  const toggleGlitchState = () => {
    setGlitchState(!isGlitchActive);
  };

  // Detectar si el dispositivo es principalmente táctil
  const isTouchDevice = window.matchMedia("(hover: none)").matches;

  if (isTouchDevice) {
    logo.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleGlitchState();
    });

    // Desactivar al tocar fuera
    document.addEventListener("click", () => {
      if (isGlitchActive) {
        setGlitchState(false);
      }
    });
  } else {
    // En escritorio con cursor: activación precisa por entrada/salida del ratón
    logo.addEventListener("mouseenter", () => {
      setGlitchState(true);
    });

    logo.addEventListener("mouseleave", () => {
      setGlitchState(false);
    });

    // También permitir click para toggle persistente si se desea
    logo.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleGlitchState();
    });
  }
});
