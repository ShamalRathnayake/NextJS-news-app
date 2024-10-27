"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import TextAlign from "@tiptap/extension-text-align";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Typography from "@tiptap/extension-typography";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";

const TextEditor = ({ editorContent, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
      Image,
      Underline,
      Highlight,
      TaskList,
      TaskItem,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Subscript,
      Superscript,
      Typography,
      Color,
      TextStyle,
    ],
    content: editorContent,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: " mx-auto focus:outline-none min-h-[110px] prose ",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className=" mx-auto mt-8">
      <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-100 border-b border-gray-300">
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <button
            key={level}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level }).run()
            }
            className="p-2"
            type="button"
          >
            <i
              className={`fa fa-heading ${
                editor.isActive("heading", { level })
                  ? "text-blue-500"
                  : "text-gray-600"
              }`}
            />
            {level}
          </button>
        ))}

        {["left", "center", "right", "justify"].map((alignment) => (
          <button
            key={alignment}
            onClick={() => editor.chain().focus().setTextAlign(alignment).run()}
            className="p-2"
            type="button"
          >
            <i
              className={`fa fa-align-${alignment} ${
                editor.isActive("textAlign", { align: alignment })
                  ? "text-blue-500"
                  : "text-gray-600"
              }`}
            />
          </button>
        ))}

        <input
          type="color"
          onChange={(event) => {
            const color = event.target.value;
            editor.chain().focus().setColor(color).run();
          }}
          value={editor.getAttributes("textStyle").color || "#000000"}
          className={`p-0.5 border border-gray-300 rounded shadow ${
            editor.isActive("color", {
              color: editor.getAttributes("textStyle").color,
            })
              ? "text-blue-500"
              : "text-gray-600"
          }`}
        />

        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="p-2"
          type="button"
        >
          <i
            className={`fa fa-bold ${
              editor.isActive("bold") ? "text-blue-500" : "text-gray-600"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="p-2"
          type="button"
        >
          <i
            className={`fa fa-italic ${
              editor.isActive("italic") ? "text-blue-500" : "text-gray-600"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className="p-2"
          type="button"
        >
          <i
            className={`fa fa-underline ${
              editor.isActive("underline") ? "text-blue-500" : "text-gray-600"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className="p-2"
          type="button"
        >
          <i
            className={`fa fa-strikethrough ${
              editor.isActive("strike") ? "text-blue-500" : "text-gray-600"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className="p-2"
          type="button"
        >
          <i
            className={`fa fa-highlighter ${
              editor.isActive("highlight") ? "text-blue-500" : "text-gray-600"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="p-2"
          type="button"
        >
          <i
            className={`fa fa-list-ul ${
              editor.isActive("bulletList") ? "text-blue-500" : "text-gray-600"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className="p-2"
          type="button"
        >
          <i
            className={`fa fa-list-ol ${
              editor.isActive("orderedList") ? "text-blue-500" : "text-gray-600"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          className="p-2"
          type="button"
        >
          <i
            className={`fa fa-tasks ${
              editor.isActive("taskList") ? "text-blue-500" : "text-gray-600"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className="p-2"
          type="button"
        >
          <i
            className={`fa fa-quote-right ${
              editor.isActive("blockquote") ? "text-blue-500" : "text-gray-600"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="p-2"
          type="button"
        >
          <i className="fa fa-minus text-gray-600" />
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          className="p-2"
          type="button"
        >
          <i className="fa fa-undo text-gray-600" />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          className="p-2"
          type="button"
        >
          <i className="fa fa-redo text-gray-600" />
        </button>
        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .setImage({ src: "https://placekitten.com/200/200" })
              .run()
          }
          className="p-2"
          type="button"
        >
          <i className="fa fa-image text-gray-600" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          className="p-2"
          type="button"
        >
          <i
            className={`fa fa-subscript ${
              editor.isActive("subscript") ? "text-blue-500" : "text-gray-600"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          className="p-2"
          type="button"
        >
          <i
            className={`fa fa-superscript ${
              editor.isActive("superscript") ? "text-blue-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>

      <EditorContent
        editor={editor}
        className="border border-gray-300 rounded p-4 mt-4"
      />
    </div>
  );
};

export default TextEditor;
