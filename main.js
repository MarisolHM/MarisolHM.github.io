let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #7270ad;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #7270ad;">Atraída por el mundo🌍 de la tecnología💻</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
