import { type ReactNode, createElement } from "react";

import "./App.css";

export default function App(): ReactNode {
  return createElement(
    "div",
    {
      className: "salutation",
    },
    "Hello, World!",
  );
}

type Attributes = Record<string, string>;

export function rezaCreateElement(
  tag: string,
  attributes: Attributes,
  ...children: string[]
): HTMLElement {
  const element = document.createElement(tag);

  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  element.append(...children);

  return element;
}
