import React, { useCallback, useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import CodeElement from "./CodeElement";
import DefaultElement from "./DefaultElement";
import Bold from "./Bold";
import CustomEditor from "./CustomEditor";
import HoveringToolbar from "./HoveringToolbar";
function Main() {
  const editor = useMemo(() => withReact(createEditor()), []);
  // https://docs.slatejs.org/walkthroughs/06-saving-to-a-database
  // use localStorage to save the changes,
  // also you can serlize the data incase you need to save them as text or other forms then josn.
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem("content")!) || [
      {
        children: [
          {
            text:
              "xxx the editor is based on a recursive tree model, similar to an HTML document, you can create complex nested structures, like tables:",
          },
        ],
      },
      {
        type: "table",
        children: [
          {
            type: "table-row",
            children: [
              {
                type: "table-cell",
                children: [{ text: "" }],
              },
              {
                type: "table-cell",
                children: [{ text: "Human", bold: true }],
              },
              {
                type: "table-cell",
                children: [{ text: "Dog", bold: true }],
              },
              {
                type: "table-cell",
                children: [{ text: "Cat", bold: true }],
              },
            ],
          },
          {
            type: "table-row",
            children: [
              {
                type: "table-cell",
                children: [{ text: "# of Feet", bold: true }],
              },
              {
                type: "table-cell",
                children: [{ text: "2" }],
              },
              {
                type: "table-cell",
                children: [{ text: "4" }],
              },
              {
                type: "table-cell",
                children: [{ text: "4" }],
              },
            ],
          },
          {
            type: "table-row",
            children: [
              {
                type: "table-cell",
                children: [{ text: "# of Lives", bold: true }],
              },
              {
                type: "table-cell",
                children: [{ text: "1" }],
              },
              {
                type: "table-cell",
                children: [{ text: "1" }],
              },
              {
                type: "table-cell",
                children: [{ text: "9" }],
              },
            ],
          },
        ],
      },
      {
        children: [
          {
            text:
              "This table is just a basic example of rendering a table, and it doesn't have fancy functionality. But you could augment it to add support for navigating with arrow keys, displaying table headers, adding column and rows, or even formulas if you wanted to get really crazy!",
          },
        ],
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
      <HoveringToolbar />
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
