import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Quote from "@editorjs/quote";
import Raw from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";

export const EDITOR_JS_TOOLS = {
    header: Header,
    embed: Embed,
    table: Table,
    list: List,
    warning: Warning,
    code: Code,
    linkTool: LinkTool,
    raw: Raw,
    quote: Quote,
    marker: Marker,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage,
};

export const DEFAULT_VALUE = {
    time: 1668244620566,
    blocks: [
        {
            id: "uXe7oo_AOF",
            type: "header",
            data: {
                text: "Editor.js",
                level: 2,
            },
        },
        {
            id: "G-VNcAEcVL",
            type: "paragraph",
            data: {
                text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
            },
        },
        {
            id: "UFURC7PnZc",
            type: "header",
            data: {
                text: "Key features",
                level: 3,
            },
        },
        {
            id: "Cew3AC6_0V",
            type: "list",
            data: {
                style: "unordered",
                items: ["It is a block-styled editor", "It returns clean data output in JSON", "Designed to be extendable and pluggable with a simple API"],
            },
        },
        {
            id: "H0wFHvvDyR",
            type: "header",
            data: {
                text: "What does it mean «block-styled editor»",
                level: 3,
            },
        },
        {
            id: "Qg8PskTfzP",
            type: "paragraph",
            data: {
                text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
            },
        },
        {
            id: "bJ0nRsuKDt",
            type: "paragraph",
            data: {
                text: 'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.',
            },
        },
        {
            id: "gi3r5KXLV8",
            type: "header",
            data: {
                text: "What does it mean clean data output",
                level: 3,
            },
        },
        {
            id: "DAz2IcQ2qx",
            type: "paragraph",
            data: {
                text: "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below",
            },
        },
        {
            id: "fjzLLCrlv7",
            type: "paragraph",
            data: {
                text: 'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.',
            },
        },
        {
            id: "GhcHUnmuAG",
            type: "paragraph",
            data: {
                text: "Clean data is useful to sanitize, validate and process on the backend.",
            },
        },
        {
            id: "9qnBXcV3go",
            type: "delimiter",
            data: {},
        },
        {
            id: "pz8ZDHW6yr",
            type: "paragraph",
            data: {
                text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
            },
        },
        {
            id: "tKLTIV1T16",
            type: "image",
            data: {
                file: {
                    url: "https://codex.so/public/app/img/external/codex2x.png",
                },
                caption: "",
                withBorder: false,
                stretched: false,
                withBackground: false,
            },
        },
    ],
    version: "2.24.3",
};
