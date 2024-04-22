import { defineConfig } from 'csvgtocss';

export default defineConfig({
  src: 'public/svgIcon', // svg path
  dist: 'public/svgtocss', // output path
  prefix: 't4font', // font name,
  exportJson: true, // export json file
});
