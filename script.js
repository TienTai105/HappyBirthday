const profiles = {
  "Ngọc Thảo": {
    img: "assets/img2.jpg",
    wish: "Chúc mừng sinh nhật bạn Thảo! Tuổi mới đến rồi, mong bạn luôn giữ được trái tim đầy yêu thương, sự dịu dàng trong cách sống và niềm tin vững chắc vào những điều tốt đẹp. Cuộc sống có thể không phải lúc nào cũng như mong đợi, nhưng mong rằng bạn luôn đủ mạnh mẽ để mỉm cười, đủ dũng cảm để đi tiếp và đủ ấm áp để yêu thương chính mình và mọi người. Mỗi ngày trôi qua, hãy sống chậm một chút, trân trọng bản thân nhiều hơn, vì bạn xứng đáng với những điều đẹp đẽ nhất 🎂",
    extra: ["assets/thao1.jpg", "assets/thao2.jpg", "assets/thao3.jpg"]
  },
  "Xuân Thư": {
    img: "assets/img2.jpg",
    wish: "Chúc Thư có một sinh nhật ngọt ngào, luôn xinh đẹp và thành công. Mong bạn luôn được là chính mình trong phiên bản rực rỡ nhất: vui vẻ, sáng tạo, không ngừng thay đổi để phát triển – nhưng cũng đừng quên tận hưởng từng khoảnh khắc giản dị xung quanh. Chúc bạn một tuổi mới ‘bùng nổ’ năng lượng và thành công 🎂",
    extra: ["assets/thu1.jpg", "assets/thu2.jpg", "assets/thu3.jpg"]
  },
  "Hà Nhi": {
    img: "assets/nhi1.jpg",
    wish: "Chúc Nhi sinh nhật vui vẻ, luôn mạnh khỏe và hạnh phúc nhé. Mong rằng bạn sẽ luôn giữ được sức khỏe dồi dào, trái tim bình yên và tinh thần vui vẻ mỗi ngày. Hạnh phúc không phải là những điều to tát, mà chính là những phút giây bạn được sống là chính mình, được yêu thương và được làm điều mình thích. Chúc bạn một tuổi mới thật trọn vẹn và ý nghĩa 🎂",
    extra: ["assets/nhi1.jpg", "assets/nhi2.jpg", "assets/nhi3.jpg"]
  }
};

function setName() {
  const name = document.getElementById("nameInput").value.trim();
  const profile = profiles[name];
  const music = document.getElementById("birthdayMusic");

  if (profile) {
    document.getElementById("profileImg").src = profile.img;
    const extraDiv = document.getElementById("extraImages");
    extraDiv.innerHTML = '';
    profile.extra.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.className = "extra-img";
      img.addEventListener("click", showHeart);
      extraDiv.appendChild(img);
    });

    const wishEl = document.getElementById("personalWish");
    typeText(wishEl, profile.wish);

    document.getElementById("mainContent").style.display = "block";
    music.currentTime = 0;
    music.play();

    launchConfetti();
    createBubbles();
    document.getElementById("mainContent").scrollIntoView({ behavior: 'smooth' });
  } else {
    alert("Tên không hợp lệ. Vui lòng nhập đúng tên có trong danh sách!");
  }
}

function typeText(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

function showHeart(e) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 800);
}

function launchConfetti() {
  const duration = 5000;
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 5,
      spread: 60,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
      colors: ['#ff0', '#f0f', '#0ff']
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

function createBubbles() {
  const bubbleContainer = document.getElementById('bubbles');
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.left = Math.random() * 100 + 'vw';
  bubble.style.animationDuration = (5 + Math.random() * 5) + 's';
  bubbleContainer.appendChild(bubble);
  setTimeout(() => bubble.remove(), 10000);
}

function createShootingStar() {
  const star = document.createElement('div');
  star.className = 'shooting-star';
  star.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1000);
}
setInterval(createShootingStar, 3000);

function launchFloatingHearts() {
  const colors = ['#ff69b4', '#ff1493', '#ff8da1', '#e75480', '#ffc0cb'];
  const size = 15 + Math.random() * 15;
  const heart = document.createElement('div');
  heart.className = 'heart-float';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  heart.style.background = colors[Math.floor(Math.random() * colors.length)];
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(launchFloatingHearts, 300);

window.onload = () => {
  typeText(document.querySelector(".neon-text"), "Happy Birthday 🎉", 200);
};
