document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: false,
  });

  const typingText = document.getElementById("typing-text");
  const text = `I am a graduate of a Vocational High School with a major in Computer and Network Engineering. Currently, I am pursuing my Bachelor's degree in Applied Informatics Engineering at a well-known polytechnic in Indonesia. My background and expertise lie in the field of networking, and I am highly passionate about designing, implementing, and managing network infrastructures.

  As a Network Engineer, I have developed a strong foundation in network management, installation, troubleshooting, and optimization. My technical skills extend to working with various networking protocols, configuring network devices, and ensuring secure and efficient data communication.

  Beyond my academic and professional journey, I am always eager to expand my knowledge in software development, particularly in Python, C, HTML, and CSS. I am also deeply interested in integrating networking solutions with modern technologies to create efficient and scalable systems.

  I am committed to continuous learning and professional growth, always striving to stay updated with the latest advancements in networking and information technology. My goal is to contribute to the industry by providing innovative and reliable solutions in network engineering and IT infrastructure.`;

  typingText.innerText = "";
  let index = 0;
  const typingSpeed = 30;

  function type() {
    if (index < text.length) {
      typingText.innerText += text.charAt(index);
      index++;
      setTimeout(type, typingSpeed);
    }
  }

  // Mulai animasi typing setelah halaman dimuat
  window.onload = type;

  // Animate progress bars on scroll
  const progressBars = document.querySelectorAll(".progress-bar-fill");
  progressBars.forEach((bar) => {
    const skillLevel = bar.getAttribute("data-skill-level");
    bar.style.width = skillLevel + "%";
  });
});

function toggleMenu() {
  document.getElementById("navbar-menu").classList.toggle("hidden");
}
