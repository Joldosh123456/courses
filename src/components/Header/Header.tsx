import React, {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { createTheme, styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link, useLocation } from "react-router-dom";

import css from "./Header.module.scss";
import mainLogoLight from "../../assets/Header/mainLogo-lightMode.svg";
import mainLogoDark from "../../assets/Header/mainLogo-darkMode.svg";
import searchIconLight from "../../assets/Header/searchIcon-lightMode.svg";
import languageIconLight from "../../assets/Header/languageIcon-lightMode.svg";
import burgerMenuIconLight from "../../assets/Header/burgerMenuIcon-lightMode.svg";
import crossIconLight from "../../assets/Header/crossIcon-lightMode.svg";
import { changeLang, changeScheme } from "../../redux";
import {
  useAppDispatch,
  useAppSelector,
  useOutsideClick,
} from "../../hooks/hooks";
import Button from "@mui/material/Button";

import {
  navSelectLinks,
  langSelectButtons,
  navLinks,
} from "../../constants/Header";


const MaterialUISwitch = styled(Switch)(({ theme }: any) => ({
  width: 62,
  height: 34,
  padding: 7,
  margin: "0!important",
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(0px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(25px)",
      "& .MuiSwitch-thumb": {
        boxShadow:
          "0px 1px 3px -1px #ffffff, 0px 1px 1px 0px #ffffff23, 0px 1px 3px 0px #ffffff1e;",
      },
      "& .MuiSwitch-thumb:before": {
        backgroundColor: "#001e3c",
        borderRadius: "100px",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#fff",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "105%",
      height: "105%",
      left: "-2.5%",
      top: "-2.5%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#001e3c"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));


function Header() {
  const darkScheme = useAppSelector((state) => state.general.darkScheme);
  const dispatch = useAppDispatch();

  const { t, i18n } = useTranslation();

  const lang = useAppSelector((state) => state.general.lang);
  const changeLanguage = (str: string) => {
    setTimeout(() => {
      i18n.changeLanguage(str);
      dispatch(changeLang(str));
    }, 200);
  };

  const location = useLocation();

  const [isMobileSelect, setMobileSelect] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [mobileInputValue, setMobileInputValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInputValue("");
    setMobileInputValue("");
  };

  const [isPinned, setPinned] = useState(false);
  const [isScrolledDown, setisScrolledDown] = useState(false);

  const header = useRef<HTMLHeadElement>(null);

  const selectModalRef = useRef<HTMLDivElement>(null);
  const [isSelectModal, setSelectModal] = useState(false);

  const searchModalRef = useRef(null);
  const [isSearchModal, setSearchModal] = useState(false);

  const langModalRef = useRef(null);
  const [isLangModal, setLangModal] = useState(false);

  const mobileSearchModalRef = useRef(null);
  const [isMobileSearchModal, setIsMobileSearchModal] = useState(false);

  const mobileMenuModalRef = useRef(null);
  const [isMobileMenuModal, setIsMobileMenuModal] = useState(false);

  const closeModal = (setValue: any) => {
    setValue(false);
  };

  useOutsideClick(
    selectModalRef,
    () => closeModal(setSelectModal),
    isSelectModal
  );
  useOutsideClick(
    searchModalRef,
    () => closeModal(setSearchModal),
    isSearchModal
  );
  useOutsideClick(langModalRef, () => closeModal(setLangModal), isLangModal);

  useOutsideClick(
    mobileSearchModalRef,
    () => closeModal(setIsMobileSearchModal),
    isMobileSearchModal
  );
  useOutsideClick(
    mobileMenuModalRef,
    () => closeModal(setIsMobileMenuModal),
    isMobileMenuModal
  );

  const toggleModal = (value: boolean, setValue: any) => {
    setValue(!value);
  };

  useEffect(() => {
    const body = document.querySelector("body");

    if (isMobileMenuModal) {
      body!.style.overflow = "hidden";
    } else if (!isMobileMenuModal) {
      body!.style.overflow = "auto";
    }
  }, [isMobileMenuModal]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1) {
        setisScrolledDown(true);
        setPinned(true);
      } else {
        setisScrolledDown(false);
        setPinned(false);
      }
    });
  }, []);

  useEffect(() => {
    if (isScrolledDown) {
      setPinned(true);
      return;
    }

    setPinned(false);
  }, [isScrolledDown]);

  const logoFunc = () => {
    if (darkScheme) {
      return mainLogoDark;
    } else {
      return mainLogoLight;
    }
  };

  const darkModeFunc = () => {
    if (darkScheme) {
      return "header-dark";
    } else {
      return " ";
    }
  };


  const handleNavSelectClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setSelectModal((v) => !v)
  }

  const renderNavLinks = navLinks.map((elem, index) => (
    <Link
      key={Date.now() + index}
      to={elem.to}
      className={`
        ${css['header__nav-link']} 
        ${elem.onClick ? `${css['header__nav-select']} ${isSelectModal ? css['header__nav-select_active'] : ''}` : ''}
      `}
      onClick={elem.onClick ? (e) => handleNavSelectClick(e) : undefined}
    >
      {t(elem.text)}
    </Link>
  ));

  const renderNavSelectLinks = navSelectLinks.map((elem, index) => (
    <Link
      key={Date.now() + index}
      to={elem.to}
      className={location.pathname === elem.to ? "link-disabled" : ""}
      onClick={() => 
        {
          setSelectModal(false) 
          setIsMobileMenuModal(false)
          setMobileSelect(false)
        }
      }
    >
      <Button disabled={location.pathname === elem.to}>{t(elem.text)}</Button>
    </Link>
  ));

  const renderLangSelectButtons = langSelectButtons.map((elem, index) => (
    <Button
      key={Date.now() + index}
      onClick={() => {
        changeLanguage(elem.lang);
        closeModal(setLangModal);
      }}
      disabled={elem.lang === lang}
    >
      {elem.lang}
    </Button>
  ));

  const renderMobileNavLinks = navLinks.map((elem, index) => (
    <Link
      key={Date.now() + index}
      to={elem.to}
      className={`
        ${css["header__nav-link"]} 
        ${
          elem.onClick
            ? `${css["header__nav-select"]} ${
                isMobileSelect ? css["header__nav-select_active"] : ""
              }`
            : ""
        }
      `}
      onClick={
        elem.onClick
          ? () => {
            toggleModal(isMobileSelect, setMobileSelect)
          }
          : () => {
            setSelectModal(false) 
            setIsMobileMenuModal(false)
            setMobileSelect(false)
          }
      }
    >
      <Button>{t(elem.text)}</Button>
    </Link>
  ));

  return (
    <header
      ref={header}
      className={`${css[darkModeFunc()]} ${
        isPinned ? css["is-pinned"] : ""
      } flex`}
    >
      <div
        className={`container ${css["header__container"]} flex justify-between`}
      >
        <nav className={css["header__container-links"]}>
          <Link to="/">
            <img
              className={css[`header__logo`]}
              src={logoFunc()}
              alt="main-logo.svg"
            />
          </Link>
          {renderNavLinks}

          <div
            ref={selectModalRef}
            className={`${css["header__select-modal"]} ${
              isSelectModal ? css["active"] : ""
            }`}
          >
            {renderNavSelectLinks}
          </div>
        </nav>

        <div className={css[`header__container-personals`]}>
          <FormControlLabel
            label={undefined}
            control={
              <MaterialUISwitch
                sx={{ m: 1 }}
                defaultChecked={darkScheme}
                onChange={() => dispatch(changeScheme(null))}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
          />

          <div className={css["search-wrapper"]}>
            <Button
              className={`${css["search-button"]} ${
                isSearchModal ? "hide" : ""
              }`}
              onClick={() => setSearchModal((v) => !v)}
            >
              <img src={searchIconLight} alt="search-icon.svg" />
            </Button>

            <div
              className={`${css["header__search-modal-wrapper"]} ${
                isSearchModal ? css["header__search-modal-wrapper_active"] : ""
              }`}
            >
              <form
                ref={searchModalRef}
                className={`${css["header__search-modal"]} ${
                  isSearchModal ? css["search-active"] : ""
                }`}
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  className={css["header__search-input"]}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className={css["header__search-submit"]}>
                  <img src={searchIconLight} alt="search-icon" />
                </button>
              </form>
            </div>
          </div>

          <div className={css["lang-wrapper"]}>
            <Button
              className={css[`lang-button`]}
              onClick={() => setLangModal(true)}
            >
              <img src={languageIconLight} alt="language icon" />
            </Button>

            <div
              ref={langModalRef}
              className={`${css["header__language-modal"]} ${
                isLangModal ? css["active"] : ""
              }`}
            >
              {renderLangSelectButtons}
            </div>
          </div>

          <hr />

          <Button className="login-button" size="medium">
            {t("header.login")}
          </Button>

          <Button
            className={`join-button`}
            variant="contained"
            size="medium"
            color="secondary"
          >
            {t("header.join-us")}
          </Button>
        </div>
      </div>

      {/* Mobile */}
      {/* <div className={`container ${css["header__container_mobile"]} justify-between`}> */}
      <div
        className={`container ${css["header__container_mobile"]} justify-between`}
      >
        <img
          className={css["header__logo"]}
          src={logoFunc()}
          alt="main-logo.svg"
        />

        <div className={`${css[`header__burger-menu`]}`}>
          <Button
            className={css[`burger-menu-button_mobile`]}
            onClick={() => toggleModal(isMobileMenuModal, setIsMobileMenuModal)}
          >
            <img src={burgerMenuIconLight} alt="burger menu icon" />
          </Button>

          <Button className={`${css['search-button_mobile']} ${isMobileSearchModal ? css['hide'] : ''}`} onClick={() => toggleModal(isMobileSearchModal, setIsMobileSearchModal)}>
            <img src={searchIconLight} alt='search icon' />
          </Button>


          <div
            className={`${css["header__search-modal-wrapper"]} ${
              isMobileSearchModal
                ? css["header__search-modal-wrapper_active"]
                : ""
            }`}
          >
            <form
              ref={mobileSearchModalRef}
              className={`${css["header__search-modal"]} ${
                css["header__search-modal-mobile"]
              } ${isMobileSearchModal ? css["search-active"] : ""}`}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className={`${css["header__search-input"]} ${css["header__search-input-mobile"]}`}
                value={mobileInputValue}
                onChange={(e) => setMobileInputValue(e.target.value)}
              />

              <button
                className={`${css["header__search-submit"]} ${css["header__search-submit-mobile"]}`}
              >
                <img src={searchIconLight} alt="search-icon" />
              </button>
            </form>
          </div>
        </div>

        <div
          ref={mobileMenuModalRef}
          className={`container ${css["mobile-header__menu-modal"]} ${
            isMobileMenuModal ? css["mobile-header__menu-modal_active"] : ""
          } ${darkScheme ? css["mobile-header__menu-modal-dark"] : ""}`}
        >
          <div
            className={`container ${css["mobile-header__menu-modal-header"]}`}
          >
            <Link to="/" onClick={() => setIsMobileMenuModal(false)}>
              <img
                className={`${css["header__logo"]} ${css["mobile-header__logo"]}`}
                src={darkScheme ? mainLogoDark : mainLogoLight}
                alt="main-logo.svg"
              />
            </Link>

            <div>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    defaultChecked={darkScheme}
                    onChange={() => dispatch(changeScheme(null))}
                  />
                }
                label={undefined}
              />
              <Button
                className={`${css['lang-button']} ${css['mobile-header__lang-button']}`}
                onClick={() => toggleModal(isLangModal, setLangModal)}
              >
                <img src={languageIconLight} alt="language icon" />
              </Button>
              <Button
                className={css[`mobile-header__close-button`]}
                onClick={() => setIsMobileMenuModal(false)}
              >
                <img src={crossIconLight} alt="cross icon" />
              </Button>
            </div>

            <div
              className={`${css["header__language-modal"]} ${
                css["mobile-header__language-modal"]
              } ${isLangModal ? css["active"] : ""}`}
            >
              {renderLangSelectButtons}
            </div>
          </div>

          <nav className={css[`mobile-header__links`]}>
            {renderMobileNavLinks}
            <div
              className={`${css["mobile-header__select-container"]} ${
                isMobileSelect
                  ? css["mobile-header__select-container_active"]
                  : ""
              }`}
            >
              {renderNavSelectLinks}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
