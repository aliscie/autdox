import React, { useCallback, useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import CodeElement from "./CodeElement";
import DefaultElement from "./DefaultElement";
import Bold from "./Bold";
import CustomEditor from "./CustomEditor";
function Main() {
  const editor = useMemo(() => withReact(createEditor()), []);
  // https://docs.slatejs.org/walkthroughs/06-saving-to-a-database
  // use localStorage to save the changes,
  // also you can serlize the data incase you need to save them as text or other forms then josn.
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem("content")!) || [
      {
        type: "paragraph",
        children: [{ text: "A line of text in a paragraph." }],
      },
    ]
  );

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Bold {...props} />;
  }, []);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(value: any) => {
        setValue(value);

        // Save the value to Local Storage.
        const content = JSON.stringify(value);
        localStorage.setItem("content", content);
      }}
    >
      {/* buttoms tool. */}
      <div>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleBoldMark(editor);
          }}
        >
          Bold
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleCodeBlock(editor);
          }}
        >
          Code Block
        </button>
      </div>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return;
          }

          switch (event.key) {
            case "`": {
              event.preventDefault();
              CustomEditor.toggleCodeBlock(editor);
              break;
            }

            case "b": {
              event.preventDefault();
              CustomEditor.toggleBoldMark(editor);
              break;
            }
          }
        }}
      />
    </Slate>
  );
}

export default Main;
