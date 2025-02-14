function createFlower(e) {
    let ele = document.createElement("div");
    ele.className = "element";
    ele.innerHTML = "🌸"; // Flower emoji
    document.body.appendChild(ele);

    ele.style.position = "absolute";
    ele.style.left = e.clientX + "px";
    ele.style.top = e.clientY + "px";
    ele.style.fontSize = "24px";
    ele.style.transition = "all 1s ease-out";
    ele.style.pointerEvents = "none";
    ele.style.userSelect = "none";

    setTimeout(() => {
        let directionX = Math.random() < 0.5 ? -1 : 1;
        let directionY = Math.random() < 0.5 ? -1 : 1;

        ele.style.left = parseInt(ele.style.left) - (directionX * (Math.random() * 50)) + "px";
        ele.style.top = parseInt(ele.style.top) - (directionY * (Math.random() * 50)) + "px";
        ele.style.opacity = 0;
        ele.style.transform = "scale(0.4)";
        ele.style.zIndex = "100";

        setTimeout(() => {
            ele.remove();
        }, 1000);
    }, 10);
}

// Trigger flowers on mousemove
document.addEventListener("mousemove", createFlower);
