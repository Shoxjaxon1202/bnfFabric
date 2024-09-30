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
import { useTranslation } from "react-i18next"; // Tarjimalarni olish

const Collection = ({ data }) => {
  const { t } = useTranslation(); // i18next dan tarjima funksiyasini olish
  const [base, setBase] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
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

  let filteredData = selectedCategory
    ? base.filter((item) => item.category === selectedCategory)
    : base;

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
              placeholder={t("collection.search")} // "Search here" tarjimasi
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
              {t("collection.title")} {/* "Collection" tarjimasi */}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="collection_accordion_menus">
            <Typography
              className={`collection_accordion_menu ${
                selectedCategory === "Spring collection" ? "active" : ""
              }`}
              onClick={() => handleCategorySelect("Spring collection")}>
              {t("collection.spring")} {/* "Spring Collection" tarjimasi */}
            </Typography>
            <Typography
              className={`collection_accordion_menu ${
                selectedCategory === "Winter collection" ? "active" : ""
              }`}
              onClick={() => handleCategorySelect("Winter collection")}>
              {t("collection.winter")} {/* "Winter Collection" tarjimasi */}
            </Typography>
            <Typography
              className={`collection_accordion_menu ${
                selectedCategory === "Summer collection" ? "active" : ""
              }`}
              onClick={() => handleCategorySelect("Summer collection")}>
              {t("collection.summer")} {/* "Summer Collection" tarjimasi */}
            </Typography>
            <Typography
              className={`collection_accordion_menu ${
                selectedCategory === "Autumn collection" ? "active" : ""
              }`}
              onClick={() => handleCategorySelect("Autumn collection")}>
              {t("collection.autumn")} {/* "Autumn Collection" tarjimasi */}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="collection_right">
        <div className="collection_top">
          <div className="collection_top_left">
            <h3 className="collection_title">
              {selectedCategory
                ? t(`collection.${selectedCategory.toLowerCase()}`)
                : t("collection.title")}
            </h3>
            <p className="collection_text">
              {t("collection.showing")} {(page - 1) * itemsPerPage + 1}–{" "}
              {Math.min(page * itemsPerPage, filteredData.length)}{" "}
              {t("collection.of")} {filteredData.length}
            </p>
          </div>
          <div className="collection_top_right">
            <button className="collection_btn">
              {t("collection.sorting")}
            </button>{" "}
            {/* "Initial Sorting" tarjimasi */}
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
