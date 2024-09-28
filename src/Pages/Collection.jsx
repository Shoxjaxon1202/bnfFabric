import React, { useEffect, useState } from "react";
import "../styles/collection.scss";
import { Search } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from "@mui/material";
import CollectionCard from "./CollectionCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UndefinedProduct from "./Undefind";

const Collection = ({ data }) => {
  const [base, setBase] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // Qidirish so'zini saqlash uchun
  const itemsPerPage = 8;

  useEffect(() => {
    setBase(data);
  }, [data]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setPage(1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // filteredData ni to'g'ri joyda boshlang'ich qiymat bilan e'lon qilamiz
  let filteredData = selectedCategory
    ? base.filter((item) => item.category === selectedCategory)
    : base;

  // Qidiruv so'zi bo'lsa, unga qarab filtrlaymiz
  if (searchTerm) {
    filteredData = filteredData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const paginatedData = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="collection">
      <div className="collection_left">
        <div className="collection__subscribe">
          <form className="collection__subscribe-form">
            <input
              type="text"
              placeholder="Search here"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="collection_button">
              <Search className="collection_icon" />
            </button>
          </form>
        </div>

        <Accordion className="collection_accordion" defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header">
            <Typography className="collection_accordion_title">
              Collection
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="collection_accordion_menus">
            <Typography
              className={`collection_accordion_menu ${
                selectedCategory === "Spring collection" ? "active" : ""
              }`}
              onClick={() => handleCategorySelect("Spring collection")}>
              Spring Collection
            </Typography>
            <Typography
              className={`collection_accordion_menu ${
                selectedCategory === "Winter collection" ? "active" : ""
              }`}
              onClick={() => handleCategorySelect("Winter collection")}>
              Winter Collection
            </Typography>
            <Typography
              className={`collection_accordion_menu ${
                selectedCategory === "Summer collection" ? "active" : ""
              }`}
              onClick={() => handleCategorySelect("Summer collection")}>
              Summer Collection
            </Typography>
            <Typography
              className={`collection_accordion_menu ${
                selectedCategory === "Autumn collection" ? "active" : ""
              }`}
              onClick={() => handleCategorySelect("Autumn collection")}>
              Autumn Collection
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="collection_right">
        <div className="collection_top">
          <div className="collection_top_left">
            <h3 className="collection_title">
              {selectedCategory ? selectedCategory : "Collection"}
            </h3>
            <p className="collection_text">
              Showing {(page - 1) * itemsPerPage + 1}–{" "}
              {Math.min(page * itemsPerPage, filteredData.length)} of{" "}
              {filteredData.length}
            </p>
          </div>
          <div className="collection_top_right">
            <button className="collection_btn">Initial Sorting</button>
          </div>
        </div>

        <div className="collection_cards">
          {paginatedData.length > 0 ? (
            paginatedData.map((item) => (
              <CollectionCard key={item.id} {...item} />
            ))
          ) : (
            <UndefinedProduct />
          )}
        </div>

        <Stack spacing={2}>
          <Pagination
            className="pagination"
            count={Math.ceil(filteredData.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Collection;
