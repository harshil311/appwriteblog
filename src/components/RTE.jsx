// import React from "react";
// import { Editor } from "@tinymce/tinymce-react";
// import { Controller } from "react-hook-form";
// import { useRef } from "react";
// // Import TinyMCE core and necessary plugins
// // import "tinymce/tinymce";
// // import "tinymce/themes/silver";
// // import "tinymce/icons/default";
// // import "tinymce/plugins/image";
// // import "tinymce/plugins/advlist";
// // import "tinymce/plugins/autolink";
// // import "tinymce/plugins/lists";
// // import "tinymce/plugins/link";
// // import "tinymce/plugins/charmap";
// // import "tinymce/plugins/preview";
// // import "tinymce/plugins/searchreplace";
// // import "tinymce/plugins/visualblocks";
// // import "tinymce/plugins/code";
// // import "tinymce/plugins/fullscreen";
// // import "tinymce/plugins/insertdatetime";
// // import "tinymce/plugins/media";
// // import "tinymce/plugins/table";
// // import "tinymce/plugins/wordcount";

// export default function RTE({ name, control, label, defaultValue = "" }) {
  
//   const editorRef = useRef(null);
//   const log = () => {
//     if (editorRef.current) {
//       console.log(editorRef.current.getContent());
//     }
//   };

//   return (
//     <div className="w-full">
//       {label && <label className="inline-block mb-1 pl-1">{label}</label>}

//       <Controller
//         name={name || "content"}
//         control={control}
//         render={({ field: { onChange } }) => (
//           <Editor
//           apikey="2vybjfpdmgikcirz8jp4vtw9fzw9hz425mv7ifv312gnpvny"
//           onInit={(_evt, editor) => editorRef.current = editor}
//             init={{
//               models: {dom: false},
//               selector: "textarea",
//               initialValue: defaultValue,
//               height: 500,
//               menubar: true,
//               plugins: [
//                 "advlist",
//                 "autolink",
//                 "lists",
//                 "link",
//                 "image",
//                 "charmap",
//                 "preview",
//                 "searchreplace",
//                 "visualblocks",
//                 "code",
//                 "fullscreen",
//                 "insertdatetime",
//                 "media",
//                 "table",
//                 "wordcount",
//               ],
//               toolbar:
//                 "undo redo | blocks | bold italic forecolor | " +
//                 "alignleft aligncenter alignright alignjustify | " +
//                 "bullist numlist outdent indent | removeformat | help",
//               content_style:
//                 "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//             }}
//             onEditorChange={onChange}
//           />
//         )}
//       />
//     </div>
//   );
// }
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {
  return (
    <Editor
      apiKey='2vybjfpdmgikcirz8jp4vtw9fzw9hz425mv7ifv312gnpvny'
      init={{
        plugins: [
          // Core editing features
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          // Your account includes a free trial of TinyMCE premium features
          // Try the most popular premium features until Feb 22, 2025:
          'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
      }}
      initialValue="Welcome to TinyMCE!"
    />
  );
}