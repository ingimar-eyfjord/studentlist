window.addEventListener("DOMContentLoaded", event => {
  fetch("students1991.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.forEach(e => {
        const template = document.querySelector(".studentlist-template")
          .content;
        const clone = template.cloneNode(true);
        const name = e.fullname;
        const house = e.house;
        const sname = clone.querySelector(".studentdetails");
        sname.innerHTML = name;
        sname.dataset.house = house;
        const innername = clone.querySelector(".Nameinner");
        innername.innerHTML = name;
        const img = clone.querySelector(".img");
        img.src = `images/` + house + `.svg`;
        const houseinner = clone.querySelector(".houseinner");
        houseinner.innerHTML += house;
        const houses = document.querySelectorAll(".list");
        const modal = clone.querySelector(".seemore");
        modal.setAttribute("data-houseTheme", `` + e.house + ``);
        houses.forEach(e => {
          if (e.classList.contains(house)) {
            e.appendChild(clone);
          }
        });
      });
    });
});
const images = document.querySelectorAll(".house1");
let reply = function() {
  console.log(this.dataset.house);
  images.forEach(e => {
    if ((e.dataset.active = "active")) {
      e.setAttribute("data-active", "");
    }
  });
  this.setAttribute("data-active", "active");
  const lists = document.querySelectorAll(".list");
  lists.forEach(e => {
    if ((e.dataset.active = "list")) {
      e.classList.add("hide");
      e.setAttribute("data-active", "");
    }
    if (this.dataset.house == e.dataset.house) {
      e.classList.remove("hide");
      e.setAttribute("data-active", "list");
    }
  });
};

images.forEach(e => {
  e.addEventListener("click", (e = reply));
});

document.body.addEventListener("click", function(event) {
  if (event.target.classList.contains("studentdetails")) {
    var target = event.target;
    target.classList.add("hide");
    var title = event.target.nextElementSibling;

    if (title.classList.contains("hide")) {
      title.classList.remove("hide");
    } else {
      title.classList.add("hide");
      remove.classList.remove("hide");
    }
  }
});
document.body.addEventListener("click", function(event) {
  if (event.target.classList.contains("x")) {
    var title = event.target.parentElement;
    var prev = title.previousElementSibling;
    if (title.classList.contains("hide")) {
      title.classList.remove("hide");
    } else {
      title.classList.add("hide");
      prev.classList.remove("hide");
    }
  }
});

const list = document.querySelectorAll(".list");
list.forEach(e => {
  e.classList.add("hide");
});
