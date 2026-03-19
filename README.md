# SigilForge 🔮✨

**Forge your own arcane power with custom sigils**  
*An interactive magical circle generator inspired by anime, RPGs, and esoteric symbolism.*

---

## 📜 Overview

**SigilForge** is a fully client‑side web application that lets you create intricate, procedurally generated magical circles and sigils. Every line, symbol, and color is imbued with intent – whether you need a ritual circle for your next TTRPG session, a mystical emblem for a character, or simply a piece of generative art to admire.

The generator offers deep customization: adjust tiers, symmetry, colors, text rings, and choose from five distinct symbol libraries (Alchemical, Celestial, Runic, Misc, Geometric). All symbols are drawn with canvas paths – no external fonts or images – ensuring a crisp, scalable, and purely vector‑style output. You can even animate the rotation to watch your creation come alive.

---

## ✨ Features

- **Deterministic Randomization** – Every circle is seeded; you can reproduce any design or generate endless variations.
- **5 Symbol Libraries** – Over 60 hand‑drawn sigils (12 per set) covering alchemical, celestial, runic, esoteric, and geometric themes.
- **Multi‑Tier Architecture** – Build circles with up to 8 concentric tiers, each with its own symmetry and connections.
- **Text Rings** – Add two rings of custom text (in pseudo‑Latin by default) that wrap around the circle. Fonts are automatically matched to the selected symbol set.
- **Real‑time Controls** – Tweak everything via sliders, number inputs, and color pickers – the canvas updates instantly.
- **Animation** – Toggle a slow, hypnotic rotation to see your sigil turn.
- **Export to PNG** – Save your creation as a high‑resolution PNG with one click.
- **Fully Self‑Contained** – No dependencies, no server, no tracking. Just a single HTML file that runs anywhere.

---

## 🛠️ Technologies Used

- **HTML5 / CSS3** – Semantic structure and a dark, arcane‑themed UI.
- **Vanilla JavaScript** – All logic, RNG, and drawing are hand‑coded.
- **Canvas API** – All symbols, lines, and text are drawn procedurally.
- **Xorshift32 PRNG** – A seeded random generator for reproducible designs.
- **Google Fonts** – Decorative typefaces that match each symbol library’s mood.

---

## 🚀 How to Use

1. **Download** the `SigilForge.html` file.
2. **Open** it in any modern browser (Chrome, Firefox, Edge, Safari).
3. **Play** with the controls on the left sidebar:
   - **Global Settings** – Border width, margins, line width, background and accent colors.
   - **Circle Generation** – Number of tiers, symmetry points, complexity, etc.
   - **Draw Options** – Enable/disable specific geometric elements (connecting lines, inner circles, symbols at points, etc.).
   - **Text Rings** – Edit the two text rings and adjust their size/spacing.
   - **Symbol Library** – Choose a symbol set and symbol size.
4. **Randomize** for instant inspiration or enter your own seed.
5. **Export** your masterpiece as a PNG.

---

## 🎛️ Detailed Control Reference

| Section | Control | Description |
|--------|---------|-------------|
| **Global** | Border Width | Thickness of the outermost ring. |
| | Margin | Space from canvas edge to outer border. |
| | Border Space | Gap between outer border and inner rings. |
| | Line Width | Default thickness for all inner lines. |
| | BG / Line / Accent | Three‑color palette for the whole circle. |
| **Circle Gen.** | Tiers | Number of concentric vertex rings. |
| | Num Sym | Base number of symmetry points. |
| | Complexity | Density of inner connecting lines. |
| | Sub Circ Scale | Size of the small circles around the first tier. |
| | Delta Symmetry | How symmetry changes per tier (+/‑). |
| | Border Spacing | Gap between the inner boundary and the first tier. |
| | Connect Skip | Step size for inter‑point connections. |
| **Draw Options** | (9 toggles) | Enable/disable specific layers: border connections, mid‑point lines, point‑to‑point lines, inscribed points, lines to center, symbol ring, symbols at points, sub‑circles, inner geometry web. |
| **Text Rings** | Ring 1 / 2 | Editable text that wraps around the circle. |
| | Text Size / Spacing | Control the appearance of the text rings. |
| **Symbol Library** | Set | Choose from Alchemical, Celestial, Runic, Misc, Geometric. |
| | Symbol Size | Scale of symbols placed on the circle. |

---

## 🔣 Symbol Libraries

Each library contains 12 distinct sigils, drawn directly with canvas paths. They are designed to evoke different mystical traditions:

- **Alchemical** – Fire, water, earth, air, sulfur, mercury, salt, planetary metals.
- **Celestial** – Sun, moon, stars, planetary symbols, conjunctions.
- **Runic** – Elder Futhark inspired shapes (ᚠ, ᚢ, ᚦ, ᚨ …).
- **Misc** – Esoteric icons: eye of providence, ankh, pentagram, ouroboros, yin‑yang, spiral.
- **Geometric** – Platonic solids, star polygons, nested shapes, vesica piscis.

The symbols are not font‑based, so they scale perfectly and match the hand‑drawn aesthetic.

---

## 🧪 Randomness & Seeding

- The **“New Seed”** button generates a new random seed and updates the circle.
- The **“Randomize”** button randomizes most numeric parameters **and** the seed, giving you a completely new style.
- The current seed is displayed at the top of the sidebar. You can manually set it by editing the `SEED` variable in the code (for reproducibility).

---

## 📸 Export

Click **“Export PNG”** to save the current canvas as a PNG file. The filename includes a timestamp. The exported image has the same dimensions as shown on screen (up to 900×900 pixels, responsive to your window size).

---

## 💡 Inspiration & Use Cases

- **TTRPGs** – Create unique ritual circles for Dungeons & Dragons, Pathfinder, or Call of Cthulhu.
- **Worldbuilding** – Design faction emblems, magical seals, or ancient glyphs.
- **Generative Art** – Explore the endless combinations of geometry and symbolism.
- **Meditation & Decoration** – Generate a personal mandala or a desktop wallpaper.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute it – just keep the original attribution.

---

## 🙏 Acknowledgements

- Inspired by the intricate magic circles from anime like *Fate/stay night*, *Overlord*, and classic JRPGs.
- Symbol designs draw from historical alchemy, astrology, runic alphabets, and sacred geometry.
- Built with love for the generative art and tabletop communities.

---

**Happy forging, arcanist!** 🧙‍♂️  
*May your sigils always hold power.*
