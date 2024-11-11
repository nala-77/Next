import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import peopleIcon from "./assets/images/people.svg";
import dateIcon from "./assets/images/date.svg";
import timeIcon from "./assets/images/clock.svg";
import tourIcon from "./assets/images/tour.svg";
import carIcon from "./assets/images/car.svg";
import destImg1 from "./assets/images/explore1.png";
import destImg2 from "./assets/images/explore2.png";
import destImg3 from "./assets/images/explore3.png";
import destImg4 from "./assets/images/explore4.png";
import guide1 from "./assets/images/Rectangle1.png";
import guide2 from "./assets/images/Rectangle2.png";
import guide3 from "./assets/images/Rectangle3.png";
import guide4 from "./assets/images/Rectangle4.png";
import package1 from "./assets/images/package1.png";
import package2 from "./assets/images/package2.png";
import package3 from "./assets/images/package3.png";
import iconOneDay from "./assets/images/icon_one day.svg";
import iconMap from "./assets/images/icon_map.svg";
import iconDiscount from "./assets/images/icon_discount.svg";
import iconSupp from "./assets/images/icon_support.svg";
import iconMountain from "./assets/images/icon_mountain bike.svg";
import iconGuide from "./assets/images/icon_guide.svg";
import iconWater from "./assets/images/icon_water.svg";
import iconTicket from "./assets/images/icon_ticket.svg";
import iconBus from "./assets/images/icon_bus.svg";
import iconCompanion from "./assets/images/icon_companion.svg";
import iconDriver from "./assets/images/icon_driver.svg";
import iconLocation from "./assets/images/icon_location.svg";
import iconBest from "./assets/images/icon_best price.svg";
import profilePic from "./assets/images/profile.png";
import map from "./assets/images/icon_about_map.svg";
import experience from "./assets/images/icon_experience.svg";

// nav
export const navLinks = [
  {
    to: "/",
    name: "home",
  },
  {
    to: "/aboutus",
    name: "about us",
  },
  {
    to: "/",
    name: "tour packages",
  },
  {
    to: "/",
    name: "Contact Us",
  },
];

// footer
export const FooterData = [
  {
    head: "Services",
    list: [
      {
        to: "/",
        name: "Bike and Rickshaw rental",
      },
      {
        to: "/",
        name: "Guided Tours of Lucca",
      },
      {
        to: "/",
        name: "Guided Bike Tour of Lucca",
      },
      {
        to: "/",
        name: "Trip In The Tuscan Hills",
      },
      {
        to: "/",
        name: "Transportation With Luxury Cars",
      },
      {
        to: "/",
        name: "Wine Tours By Bus With Guide",
      },
    ],
  },
  {
    head: "Home",
    list: [
      {
        to: "/",
        name: "Home",
      },
      {
        to: "/",
        name: "About Us",
      },
      {
        to: "/",
        name: "Tour Packages",
      },
    ],
  },
  {
    head: "Help",
    list: [
      {
        to: "/",
        name: "Terms of Use",
      },
      {
        to: "/",
        name: "Privacy Policy",
      },
    ],
  },
  {
    head: "Contacts",
    list: [
      {
        to: "/",
        name: "Piazza Napoleone, Lucca, Tuscany",
        icon: faLocationDot,
      },
      {
        to: "/",
        name: "+39 346 368 5708",
        icon: faPhone,
      },
      {
        to: "/",
        name: "italiainlimo@gmail.com",
        icon: faEnvelope,
      },
    ],
  },
];

export const social = [
  {
    to: "/",
    icon: faTwitter,
  },
  {
    to: "/",
    icon: faFacebookF,
  },
  {
    to: "/",
    icon: faInstagram,
  },
];

// hero tabs

export const tours = [
  {
    category: "public tours",

    img: peopleIcon,
    title: "Number of people",
    desc: "Choose number",
  },
  {
    category: "public tours",

    img: dateIcon,
    title: "Date",
    desc: "Choose Date",
  },
  {
    category: "public tours",

    img: timeIcon,
    title: "Time",
    desc: "Choose Time",
  },
  {
    category: "public tours",

    img: tourIcon,
    title: "Tour",
    desc: "Select Tour",
  },
  {
    category: "public tours",

    img: carIcon,
    title: "Transportation",
    desc: "Select Transportation",
  },

  {
    category: "private tours",

    img: dateIcon,
    title: "Date",
    desc: "Choose Date",
  },
  {
    category: "private tours",

    img: peopleIcon,
    title: "Number of people",
    desc: "Choose number",
  },
  {
    category: "private tours",

    img: timeIcon,
    title: "Time",
    desc: "Choose Time",
  },
  {
    category: "private tours",

    img: tourIcon,
    title: "Tour",
    desc: "Select Tour",
  },
  {
    category: "private tours",

    img: carIcon,
    title: "Transportation",
    desc: "Select Transportation",
  },
];

// DestinantionsCard

export const dest = [
  {
    image: destImg1,
    title: "Lucca Bike Tour",
    price: "34",
    date: "every day",
    time: "3 - 10",
    desc: "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    image: destImg2,
    title: "Lucca Bike Tour",
    price: "34",
    date: "every day",
    time: "3 - 10",
    desc: "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    image: destImg3,
    title: "Lucca Bike Tour",
    price: "34",
    date: "every day",
    time: "3 - 10",
    desc: "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    image: destImg4,
    title: "Lucca Bike Tour",
    price: "34",
    date: "every day",
    time: "3 - 10",
    desc: "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    image: destImg3,
    title: "Lucca Bike Tour",
    price: "34",
    date: "every day",
    time: "3 - 10",
    desc: "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    image: destImg1,
    title: "Lucca Bike Tour",
    price: "34",
    date: "every day",
    time: "3 - 10",
    desc: "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    image: destImg1,
    title: "Lucca Bike Tour",
    price: "34",
    date: "every day",
    time: "3 - 10",
    desc: "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    image: destImg1,
    title: "Lucca Bike Tour",
    price: "34",
    date: "every day",
    time: "3 - 10",
    desc: "A tour of the city and its surroundings led by a professional guide ...",
  },
];

// WelcomeSection

export const numbers = [
  {
    num: 20,
    txt: "Years Experience",
  },
  {
    num: 100,
    txt: "Happy Customer",
  },
  {
    num: 15,
    txt: "Choice of Services",
  },
  {
    num: 10,
    txt: "Professional Guides",
  },
];

// data for guide section
export const guide = [
  {
    img: guide1,
    title: "Bike and rickshaw rental",
    desc: "Book your quality vehicle quickly for an hour or all day!",
  },
  {
    img: guide2,
    title: "Guided tour of the countryside",
    desc: "Live the real Lucchese experience by visiting the suburbs by bike!",
  },
  {
    img: guide3,
    title: "Taxi and NCC service",
    desc: "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
  {
    img: guide4,
    title: "Bus Package",
    desc: "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
];

// book a bike
export const form = [
  {
    label: "Name and Surname",
    placeholder: "Enter your name and surname",
    type: "text",
  },
  {
    label: "Email Address",
    placeholder: "Enter your email address",
    type: "email",
  },
  {
    label: "Telephone Number",
    placeholder: "Enter your telephone number",
    type: "number",
  },
  {
    label: "Service Type",
    placeholder: "Select the service types",
    select: true,
  },
  {
    label: "Date",
    placeholder: "Select the date",
    type: "date",
  },
  {
    label: "Time",
    placeholder: "Select the time",
    type: "time",
  },
];

// Packages section
export const PackagesData = [
  {
    img: package1,
    note: "BIKE / RICKSHAW",
    price: 10,
    list: [
      {
        icon: iconOneDay,
        listItem: "Your bike for a day",
      },
      {
        icon: iconMap,
        listItem: "City App",
      },
      {
        icon: iconDiscount,
        listItem: "Discount on Rickshaw",
      },
      {
        icon: iconSupp,
        listItem: "Guaranteed Support",
      },
    ],
  },
  {
    img: package2,
    note: "BIKE TOURS",
    price: 30,
    list: [
      {
        icon: iconMountain,
        listItem: "Your bike for a day",
      },
      {
        icon: iconGuide,
        listItem: "City App",
      },
      {
        icon: iconWater,
        listItem: "Discount on Rickshaw",
      },
      {
        icon: iconSupp,
        listItem: "Guaranteed Support",
      },
    ],
  },
  {
    img: package3,
    note: "BUS TRIPS",
    price: 45,
    list: [
      {
        icon: iconTicket,
        listItem: "Your bike for a day",
      },
      {
        icon: iconBus,
        listItem: "City App",
      },
      {
        icon: iconCompanion,
        listItem: "Discount on Rickshaw",
      },
      {
        icon: iconSupp,
        listItem: "Guaranteed Support",
      },
    ],
  },
  {
    img: guide3,
    note: "TRANSFER",
    price: 10,
    list: [
      {
        icon: iconDriver,
        listItem: "Your bike for a day",
      },
      {
        icon: iconLocation,
        listItem: "City App",
      },
      {
        icon: iconBest,
        listItem: "Discount on Rickshaw",
      },
      {
        icon: iconSupp,
        listItem: "Guaranteed Support",
      },
    ],
  },
];

// customer

export const customer = [
  {
    img: profilePic,
    name: "Lyod Gomez",
    desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    img: profilePic,
    name: "selena",

    desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    img: profilePic,
    name: "william",
    desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    img: profilePic,
    name: "mohammed",

    desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
];

// about mini cards data
export const miniCards = [
  {
    img: map,
    head: "Complete Packages For All Your Wishes",
  },
  {
    img: experience,
    head: "Over 30 Years Of Experience",
  },
  {
    img: iconGuide,
    head: "Expert Guides For You",
  },
  {
    img: iconBest,
    head: "Guaranteed fun at the best price!",
  },
];


// data for create an account
export const signUp = [
  {
    label: "Name and Surname",
    value: "Enter your name and surname",
    type: "text",
  },
  {
    label: "Email Address",
    value: "Enter your email address",
    type: "email",
  },
  {
    label: "Password",
    value: "Enter your password",
    type: "password",
  },
]

export const logIn = [
  {
    label: "Email Address",
    value: "Enter your email address",
    type: "email",
  },
  {
    label: "Password",
    value: "Enter your password",
    type: "password",
  },
]