import React, { FC, Fragment } from "react";
import { Attribut } from "./interface";

export const TegArray: FC<{ array: Attribut[] }> = ({ array }) => (
  <Fragment>
    {array.map(({ teg, text, key, ...attribut }: Attribut) => (
      <div key={key} {...attribut}>{text}</div>)
    )}
  </Fragment>
);

export default TegArray;
