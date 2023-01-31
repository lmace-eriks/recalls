import React, { useEffect, useState, ReactChildren, useRef } from "react";
import { canUseDOM } from "vtex.render-runtime";
// import { createPortal } from "react-dom";

import styles from "./styles.css";

interface RecallsProps {

}

const Recalls: StorefrontFunctionComponent<RecallsProps> = ({ }) => {

  return <>Recalls</>
}

Recalls.schema = {
  title: "Recalls",
  type: "object",
  properties: {

  }
}

export default Recalls;