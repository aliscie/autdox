import React from "react";
import { Menu, Portal } from "./components";
import { css } from "@emotion/css";
import { ReactEditor, useSlate } from "slate-react";
import { Editor, Transforms, Text, createEditor, Node, Range } from "slate";

function HoverToolbar() {
  const ref = React.useRef<HTMLDivElement | null>();
  const editor = useSlate();
  React.useEffect(() => {
    const el = ref.current;
    const { selection } = editor;

    if (!el) {
      return;
    }

    if (
      !selection ||
      !ReactEditor.isFocused(editor) ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ""
    ) {
      el.removeAttribute("style");
      return;
    }

    const domSelection = window.getSelection()!;
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    el.style.opacity = "1";
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
    el.style.left = `${
      rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
    }px`;
  });
  return (
    <Portal>
      <Menu
        ref={ref}
        className={css`
          padding: 8px 7px 6px;
          position: absolute;
          z-index: 1;
          top: -10000px;
          left: -10000px;
          margin-top: -6px;
          opacity: 0;
          background-color: gray;
          border-radius: 4px;
          transition: opacity 0.75s;
        `}
      >
        <button>xxx</button>
      </Menu>
    </Portal>
  );
}

export default HoverToolbar;
