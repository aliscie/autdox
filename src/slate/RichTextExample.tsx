import React, { useCallback, useMemo, useState } from "react";
import isHotkey from "is-hotkey";
import { Editable, withReact, Slate } from "slate-react";
import { createEditor, Node } from "slate";
import { withHistory } from "slate-history";
import HoverToolbar from "./HoverToolbar";
import Element from "./Element";
import Leaf from "./Leaf";

const HOTKEYS: any = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

const RichTextExample = () => {
  const [value, setValue] = useState<Node[]>(
    JSON.parse(localStorage.getItem("content2")!)
  );
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(value) => {
        setValue(value);
        const content2 = JSON.stringify(value);
        localStorage.setItem("content2", content2);
      }}
    >
      <HoverToolbar />

      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={(event) => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event as any)) {
              event.preventDefault();
              // 🔴 what this sposed to do?
              // const mark = HOTKEYS[hotkey];
              // toggleMark(editor, mark);
            }
          }
        }}
      />
    </Slate>
  );
};

export default RichTextExample;
