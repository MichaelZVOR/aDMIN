const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

//close sidebaR
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//Cchange theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

//FILL ORDERS=============

Orders.forEach((order) => {
    console.log(order)
  const tr = document.createElement("tr");
  const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${
                          order.shipping === "Отклонен"
                            ? "danger"
                            : order.shipping === "pending"
                            ? "warning"
                            : "primary"
                        }">${order.shipping}</td>
                        <td class="primary">Детали</td>`;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
