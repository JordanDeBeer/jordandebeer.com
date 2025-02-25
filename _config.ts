import lume from "lume/mod.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";

import highlight from "lume/plugins/code_highlight.ts";



const site = lume();
site.use(nunjucks());
site.use(tailwindcss({
    options: {
        plugins: [typography],
    },
}));
site.use(postcss());
site.use(highlight({
    theme: [
        {
            name: "github-dark-dimmed",
            path: "/code.dark.css"
        },
        {
            name: "github",
            path: "/code.light.css"
        }
    ]
}));

export default site;
