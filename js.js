// JavaScript Document
window.addEventListener("DOMContentLoaded", getData);
function getData() {
  fetch("https://petlatkea.dk/2020/hogwarts/students.json")
    .then(res => res.json())
    .then(handleData)
    .then(appendFunc);
}
const Student = {
  firstName: "",
  middleName: "",
  lastName: "",
  house: "",
  gender: ""
};
studentArray = [];
let number = 0;
function handleData(myData) {
  myData.forEach(e => {
    number++;
    const names = e.fullname.split(" ");
    const index = names.indexOf("");
    if (index !== -1) names.splice(index, 1);
    const house = e.house.split(" ");
    const index1 = house.indexOf("");
    if (index1 !== -1) house.splice(index1, 1);
    const gender = e.gender.split(" ");
    const index2 = gender.indexOf("");
    if (index2 !== -1) gender.splice(index2, 1);

    let studentIndex = Object.create(Student);
    studentIndex.firstName =
      names[0].charAt(0).toUpperCase() + names[0].substring(1).toLowerCase();
    if (names.length == 3) {
      studentIndex.middleName =
        names[1].charAt(0).toUpperCase() + names[1].substring(1).toLowerCase();
      studentIndex.lastName =
        names[2].charAt(0).toUpperCase() + names[2].substring(1).toLowerCase();
    }
    if (names.length == 2) {
      studentIndex.lastName =
        names[1].charAt(0).toUpperCase() + names[1].substring(1).toLowerCase();
    }
    studentIndex.house =
      house[0].charAt(0).toUpperCase() + house[0].substring(1).toLowerCase();
    studentIndex.gender =
      gender[0].charAt(0).toUpperCase() + gender[0].substring(1).toLowerCase();
    studentArray.push(studentIndex);
  });
}

function appendFunc() {
  studentArray.forEach(e => {
    const template = document.querySelector(".studentlist-template").content;
    const clone = template.cloneNode(true);
    const sname = clone.querySelector(".studentdetails");

    const firstname = e.firstName;
    const middleName = e.middleName;
    const lastname = e.lastName;
    sname.innerHTML = firstname + `&nbsp` + middleName + `&nbsp` + lastname;

    const house = e.house;
    sname.dataset.house = house;

    const innername = clone.querySelector(".Nameinner");
    innername.innerHTML = firstname + `&nbsp` + middleName + `&nbsp` + lastname;

    const img = clone.querySelector(".img");
    img.src = `images/` + house + `.svg`;

    const gender = clone.querySelector(".gender");
    gender.innerHTML = e.gender;

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
}
const images = document.querySelectorAll(".house1");
let reply = function() {
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
    const target = event.target;
    target.classList.add("hide");
    const title = event.target.nextElementSibling;

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
    const title = event.target.parentElement;
    const prev = title.previousElementSibling;
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
