import Typography from "typography"

// irvingTheme.baseFontSize = "18px";
// irvingTheme.bodyFont = ["Open Sans", "Helvetica", "sans-serif"];
// irvingTheme.headerFontFamily = ["Open Sans", "Helvetica", "sans-serif"];

const typography = new Typography(

{
  baseFontSize: "14px",
  baseLineHeight: 2,
  headerFontFamily: [
    "Open Sans",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  googleFonts: [
    {
        name: "Open Sans",
        styles: ["300", "400", "700"],
    }, {
        name: "Lora",
        styles: ["400", "700"]
    },
    {
        name: "Fira Code",
        styles: ["300"]
    }
    ]
}

)
export default typography