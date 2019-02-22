import React from "react";

export interface Attribut extends React.HTMLAttributes<HTMLElement> {
  teg: string;
  key: string;
  text?: string;
}
