import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
};

export const config = {
    dir: {
        input: "content",
        includes: "../_includes", // relative to input I think
        data: "../_data", //relative to input I think
        output: "_site" // probably the default anyway, not sure if relative
    },
};

