import { useState } from "react";
import { ModeContext } from "../context/mode";
import { HighlightContext } from "../context/highlight";
import {
  JwSharpIcon,
  NightIcon,
  DayIcon,
  FaceIcon,
  InfoIcon,
  PaintIcon,
  MapIcon,
  LearnaxIcon,
  SprintsIcon,
  TrackIcon,
  EyeOpenIcon,
  EyeClosedIcon,
} from "./icons";
import IconButton from "./homepage/IconButton";
import HeadlineButton from "./homepage/HeadlineButton";
import Headline from "./homepage/Headline";
import Callout from "./homepage/Callout";
import Stripe from "./homepage/Stripe";
import styles from "./HomepageInteractive.module.css";

export default function HomepageInteractive() {
  const [mode, setMode] = useState<string[]>(["dark"]);
  const [revealed, setRevealed] = useState(false);
  const [highlight, setHighlight] = useState<string | undefined>(undefined);

  const toggleDarkMode = () => {
    setMode((prev) => {
      if (prev.includes("dark")) {
        return prev.filter((m) => m !== "dark");
      }
      return ["dark", ...prev.filter((m) => m !== "dark")];
    });
  };

  const toggleHighlight = (cat: string) => {
    if (highlight === cat) {
      setHighlight(undefined);
      setMode((prev) => {
        if (revealed && !prev.includes("reveal")) {
          return [...prev, "reveal"];
        } else if (!revealed && prev.includes("reveal")) {
          return prev.filter((m) => m !== "reveal");
        }
        return prev;
      });
    } else {
      setHighlight(cat);
      setMode((prev) => {
        if (!prev.includes("reveal")) {
          return [...prev, "reveal"];
        }
        return prev;
      });
    }
  };

  const toggleRevealed = () => {
    setRevealed((prev) => !prev);
    setMode((prev) => {
      if (prev.includes("reveal")) {
        return prev.filter((m) => m !== "reveal");
      }
      return [...prev, "reveal"];
    });
  };

  const isDark = mode.includes("dark");
  const isReveal = mode.includes("reveal");

  return (
    <ModeContext.Provider value={mode}>
      <HighlightContext.Provider value={highlight}>
        <div
          className={`${styles.root} ${isDark ? styles.dark : ""} ${isReveal ? styles.reveal : ""}`}
        >
          <Callout />

          <Stripe
            name="likeness"
            label="a likeness"
            category="about"
            color="mint"
            icon={<FaceIcon />}
            highlighted={highlight === "about"}
            lowlighted={highlight === "work"}
            labelIsVisible={isReveal}
          />

          <Stripe
            name="words"
            label="some words"
            category="about"
            color="yellow"
            icon={<InfoIcon />}
            highlighted={highlight === "about"}
            lowlighted={highlight === "work"}
            labelIsVisible={isReveal}
          />

          <Headline
            first={
              <HeadlineButton
                word="Jeff"
                label={highlight === "about" ? "close about jeff" : "* about jeff"}
                symbol="*"
                color="purple"
                onClick={() => toggleHighlight("about")}
              />
            }
            end={
              <HeadlineButton
                word="design"
                label={highlight === "work" ? "close product design" : "\u2020 product design"}
                symbol="\u2020"
                color="purple"
                onClick={() => toggleHighlight("work")}
              />
            }
          />

          <Stripe
            name="ui"
            label="ui design"
            category="work"
            color="orange"
            icon={<PaintIcon />}
            highlighted={highlight === "work"}
            lowlighted={highlight === "about"}
            labelIsVisible={isReveal}
          />

          <Stripe
            name="ux"
            label="ux design"
            category="work"
            color="blue"
            icon={<MapIcon />}
            highlighted={highlight === "work"}
            lowlighted={highlight === "about"}
            labelIsVisible={isReveal}
          />

          <Stripe
            name="learnin"
            label="learnin'"
            category="about"
            color="green"
            icon={<LearnaxIcon />}
            highlighted={highlight === "about"}
            lowlighted={highlight === "work"}
            labelIsVisible={isReveal}
          />

          <Stripe
            name="service"
            label="service design"
            category="work"
            color="red"
            icon={<SprintsIcon />}
            highlighted={highlight === "work"}
            lowlighted={highlight === "about"}
            labelIsVisible={isReveal}
          />

          <Stripe
            name="tracks"
            label="tracks"
            category="about"
            color="purple"
            icon={<TrackIcon />}
            highlighted={highlight === "about"}
            lowlighted={highlight === "work"}
            labelIsVisible={isReveal}
          />

          <nav className={styles.nav}>
            <div className={styles.navLeft}>
              <IconButton
                icon={isReveal ? <EyeClosedIcon /> : <EyeOpenIcon />}
                label={isReveal ? "hide labels" : "show labels"}
                onClick={toggleRevealed}
              />
            </div>
            <div className={styles.navRight}>
              <a href="/design" title="jeff wade">
                <IconButton
                  label="jeff wade"
                  icon={<JwSharpIcon />}
                />
              </a>
              <IconButton
                icon={isDark ? <DayIcon /> : <NightIcon />}
                label={isDark ? "switch to light mode" : "switch to dark mode"}
                onClick={toggleDarkMode}
              />
            </div>
          </nav>
        </div>
      </HighlightContext.Provider>
    </ModeContext.Provider>
  );
}
