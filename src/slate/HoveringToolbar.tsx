import React, { useRef, useEffect } from "react";
import { ReactEditor, useSlate } from "slate-react";
import { Editor, Transforms, Text, createEditor, Node } from "slate";
import { css } from "@emotion/css";
import { Menu, Portal } from "./components";
import { Range } from "slate";
import { Button, Icon } from "./components";
import CustomEditor from "./CustomEditor";

const HoveringToolbar = () => {
  const ref = useRef<HTMLDivElement | null>();
  const editor = useSlate();

  useEffect(() => {
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
          background-color: #222;
          border-radius: 4px;
          transition: opacity 0.75s;
        `}
      >
        <FormatButton format="bold" icon="B" />
        <FormatButton format="italic" icon="i" />
        <FormatButton format="underlined" icon="__" />
        <FormatButton format="code" icon="<>" />
      </Menu>
    </Portal>
  );
};

const isFormatActive = (editor: any, format: any) => {
  const [match]: any = Editor.nodes(editor, {
    match: (n) => n[format] === true,
    mode: "all",
  });
  return !!match;
};

const toggleFormat = (editor: any, format: any) => {
  switch (format) {
    case "code":
      CustomEditor.toggleCodeBlock(editor);
      break;
    default:
      const isActive = isFormatActive(editor, format);
      Transforms.setNodes(
        editor,
        { [format]: isActive ? null : true },
        { match: Text.isText, split: true }
      );
  }
};
const FormatButton = ({ format, icon }: any) => {
  const editor = useSlate();
  return (
    <Button
      reversed
      active={isFormatActive(editor, format)}
      onMouseDown={(event: MouseEvent) => {
        event.preventDefault();
        toggleFormat(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};
export default HoveringToolbar;
