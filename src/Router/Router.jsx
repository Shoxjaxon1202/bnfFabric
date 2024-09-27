import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";

import safari from "../assets/img/Safari.jpg";
import Multicolored from "../assets/img/Multicolored Amethyst.jpg";
import Stucco from "../assets/img/Stucco ornament.jpg";
import Emerald from "../assets/img/Emerald.jpg";
import Malachite from "../assets/img/Malachite box.jpg";
import spring from "../assets/img/Scents of Spring.jpg";
import Autumn from "../assets/img/Autumn leaf fall.jpg";
import Blue from "../assets/img/Blue Breeze.jpg";
import Water from "../assets/img/Water Blue.jpg";
import Plaid from "../assets/img/Plaid.jpg";

//Summer
import disney from "../assets/img/Disney.jpg";
import bears from "../assets/img/Funny bears.jpg";
import vintage from "../assets/img/Vintage style.jpg";
import flutter from "../assets/img/Forest chamomile.jpg";
import French from "../assets/img/French Riviera.jpg";
import Dolly from "../assets/img/Dolly the Sheep.jpg";
import Alpine from "../assets/img/Alpine herbs.jpg";
import Inspirational from "../assets/img/Inspired.jpg";
import lotus from "../assets/img/Green Lotus.jpg";
import Mountain from "../assets/img/Mountain cornflower.jpg";
import sakura from "../assets/img/Sakura branch.jpg";
import Olive from "../assets/img/Olive branch.jpg";

//winter
import square from "../assets/img/Squares.jpg";
import ikat from "../assets/img/Ikat.jpg";
import Circles from "../assets/img/Circles.jpg";
import Geometry from "../assets/img/Geometry blue.jpg";
import Tropical from "../assets/img/Trembling Dandelion.jpg";
import Bambi from "../assets/img/Bambi.jpg";
import Byzantium from "../assets/img/Byzantium.jpg";
import garden from "../assets/img/Evening Garden.jpg";
import Marquis from "../assets/img/Marquis's Feather.jpg";
import roses from "../assets/img/Lavender roses.jpg";
import Collection from "../Pages/Collection";
import Item from "../UI/Item/Item";
import Gadjets from "../components/Gadjets/Gadjets";
import Gadjets2 from "../components/Gadjets2/Gadjets2";
import Gadjets3 from "../components/Gadjets3/Gadjets3";

const Router = () => {
  const data = [
    {
      id: 1,
      name: "Safari",
      img: safari,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Squares",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 2,
      name: "Multicolored amethyst",
      img: Multicolored,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Ikat bedding set",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 3,
      name: "Stucco ornament",
      img: Stucco,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Circles",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 4,
      name: "Emerald (AB)",
      img: Emerald,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Emerald (AB)",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 5,
      name: "Malachite",
      img: Malachite,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Malachite",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 6,
      name: "spring",
      img: spring,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "spring bedding set",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 7,
      name: "Autumn leaf fall",
      img: Autumn,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Autumn leaf fall (AB)",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 8,
      name: "Blue Breeze (AB)",
      img: Blue,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bed linen set Blue Breeze (AB)",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 9,
      name: "Feather Marquis",
      img: Water,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Feather Marquis",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 10,
      name: "Lavender Plaid",
      img: Plaid,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Lavender Plaid",
      category: "Autumn collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },

    {
      id: 11,
      name: "Vintage style",
      img: vintage,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Squares",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 12,
      name: "fluttering dandelion",
      img: flutter,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Ikat bedding set",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 13,
      name: " French Riviera ",
      img: French,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Circles",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 14,
      name: "Dolly the Sheep",
      img: Dolly,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Emerald (AB)",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 15,
      name: "Alpine herbs",
      img: Alpine,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Malachite",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 16,
      name: "Inspirational",
      img: Inspirational,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "spring bedding set",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 17,
      name: "Green lotus",
      img: lotus,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Autumn leaf fall (AB)",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 18,
      name: "Mountain cornflower",
      img: Mountain,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bed linen set Blue Breeze (AB)",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 19,
      name: "Sakura branch",
      img: sakura,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Feather sakura",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 20,
      name: "Olive  branch",
      img: Olive,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Lavender Plaid",
      category: "Summer collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },

    {
      id: 21,
      name: "Squares",
      img: square,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Squares",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 22,
      name: "Ikat",
      img: ikat,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Ikat bedding set",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 23,
      name: "Circle",
      img: Circles,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Circles",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 24,
      name: "Geometry blue",
      img: Geometry,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Geometry blue",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 25,
      name: "Tropical leaves",
      img: Tropical,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Tropical leaves",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 26,
      name: "Bambi",
      img: Bambi,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bambi bedding set",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 27,
      name: "Bzyantyum",
      img: Byzantium,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Byzantium",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 28,
      name: "Evening garden",
      img: garden,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bed linen set Evening garden",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 29,
      name: "Feather marquis",
      img: Marquis,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Feather Marquis",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 30,
      name: "Lavender roses",
      img: roses,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Lavender roses",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 31,
      name: "Disney",
      img: disney,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Lavender roses",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
    {
      id: 32,
      name: "Funny bears",
      img: bears,
      text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
      title: "Bedding set Lavender roses",
      category: "Winter collection",
      Material: "100% cotton flannel",
      Pillowcase: "50x70 cm (2 pcs.)",
      sheet: "Bed sheet:",
      Duvet: "Duvet cover",
      Size: "Special size",
      Manufacturer: "Bukhara Natural Product",
    },
  ];

  return (
    <Routes>
      <Route path="/home" element={<Home data={data} />} />
      <Route path="/" element={<Home data={data} />} />
      <Route path="/about" element={<About />} />
      <Route path="/collection" element={<Collection data={data} />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/productItem" element={<Item />} /> */}
      <Route path="/Item/:id" element={<Item data={data} />} />
      <Route path="*" element={<NotFound />} />
      <Route path="gadjets1" element={<Gadjets />} />
      <Route path="gadjets2" element={<Gadjets2 />} />
      <Route path="gadjets3" element={<Gadjets3 />} />
    </Routes>
  );
};

export default Router;
