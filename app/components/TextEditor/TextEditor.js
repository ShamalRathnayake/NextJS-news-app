import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌍</p>",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
  });

  const runCommand = (command, args) => {
    if (!editor) return; // Check if the editor is initialized
    const result = editor.chain().focus()[command](args).run();
    console.log(`Command: ${command}, Result: ${result}`); // Debugging line
    if (!result) {
      console.error(`Failed to execute command: ${command}`);
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <div className="mb-4 flex space-x-2">
        <button
          onClick={() => runCommand("toggleBold")}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          title="Bold"
        >
          <i className="fas fa-bold"></i>
        </button>
        <button
          onClick={() => runCommand("toggleItalic")}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          title="Italic"
        >
          <i className="fas fa-italic"></i>
        </button>
        <button
          onClick={() => runCommand("toggleHeading", { level: 1 })}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          title="Heading 1"
        >
          <i className="fas fa-heading"></i>
        </button>
        <button
          onClick={() => runCommand("toggleHeading", { level: 2 })}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          title="Heading 2"
        >
          <i className="fas fa-heading"></i>
        </button>
        <button
          onClick={() => runCommand("toggleHeading", { level: 3 })}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          title="Heading 3"
        >
          <i className="fas fa-heading"></i>
        </button>
        <button
          onClick={() => runCommand("toggleBulletList")}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          title="Bullet List"
        >
          <i className="fas fa-list-ul"></i>
        </button>
        <button
          onClick={() => runCommand("toggleOrderedList")}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          title="Ordered List"
        >
          <i className="fas fa-list-ol"></i>
        </button>
        <button
          onClick={() => runCommand("toggleBlockquote")}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          title="Blockquote"
        >
          <i className="fas fa-quote-left"></i>
        </button>
        <button
          onClick={() => {
            const url = window.prompt("URL");
            if (url) {
              runCommand("setLink", { href: url });
            }
          }}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          title="Link"
        >
          <i className="fas fa-link"></i>
        </button>
      </div>
      <EditorContent
        editor={editor}
        className="border rounded-md p-3 min-h-[200px] resize-y overflow-auto bg-gray-50"
      />
    </div>
  );
};

export default TextEditor;
