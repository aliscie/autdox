import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Editor, createEditor, Transforms } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import CodeElement from "./CodeElement";
import DefaultElement from "./DefaultElement";
function Main() {
  const renderElement = useCallback((props: any) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const editor = useMemo(() => withReact(createEditor()), []);
  // Add the initial value when setting up our state.
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue: any) => setValue(newValue)}
    >
      <Editable
        renderElement={renderElement}
        onKeyDown={(event: any) => {
          if (event.key === "`" && event.ctrlKey) {
            event.preventDefault();
            // Determine whether any of the currently selected blocks are code blocks.
            const [match]: any = Editor.nodes(editor, {
              match: (n) => n.type === "code",
            });
            // Toggle the block type depending on whether there's already a match.
            Transforms.setNodes(
              editor,
              { type: match ? "paragraph" : "code" },
              { match: (n) => Editor.isBlock(editor, n) }
            );
          }
        }}
      />
    </Slate>
  );
}

export default Main;
