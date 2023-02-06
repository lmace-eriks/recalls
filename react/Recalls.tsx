import React, { useEffect } from "react";

import styles from "./styles.css";

interface RecallsProps {
  blankMessage: string
  years: Array<YearObject>
}

interface YearObject {
  __editorItemTitle: string
  recalls: Array<RecallObject>
}

interface RecallObject {
  title: string
  link: string
}

const Recalls: StorefrontFunctionComponent<RecallsProps> = ({ years, blankMessage }) => {

  if (!years.length) {
    return <h2 className={styles.year}>{blankMessage}</h2>;
  } else {
    return (<div className={styles.container}>
      {years?.map(year => (
        <section className={styles.wrapper}>
          <h2 className={styles.year}>{year.__editorItemTitle}</h2>
          <ul className={styles.list}>
            {year?.recalls?.map(recall => (
              <li className={styles.title}>
                <a href={recall.link} target="_blank" className={styles.link}>{recall.title}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>)
  }
}

Recalls.schema = {
  title: "Recalls",
  type: "object",
  properties: {
    blankMessage: {
      title: "Blank Message",
      description: "Text to display when there are no current recalls.",
      type: "string"
    },
    years: {
      type: "array",
      title: "Years",
      description: "Description",
      items: {
        properties: {
          __editorItemTitle: {
            title: "Year",
            type: "string"
          },
          recalls: {
            type: "array",
            title: "Recalls",
            description: "List of Recalls for this year.",
            items: {
              properties: {
                __editorItemTitle: {
                  title: "Name",
                  description: "Site Editor Name.",
                  type: "string"
                },
                title: {
                  title: "Title",
                  description: "Output Title.",
                  type: "string"
                },
                link: {
                  title: "Link",
                  description: "Full URL to recall information. Opens in new tab.",
                  type: "string"
                }
              }
            }
          }
        }
      }
    }
  }
}

export default Recalls;