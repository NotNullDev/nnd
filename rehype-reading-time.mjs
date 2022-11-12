import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

export default function remarkReadingTime() {
  return function (tree, { data }) {
    console.log("a");
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);

    // visit(tree, "ParagraphNode", (node) => {
    //   console.log(node);
    // });
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
    // data.astro.frontmatter.minutesRead = "10 minutes to read (fake)";
  };
}
