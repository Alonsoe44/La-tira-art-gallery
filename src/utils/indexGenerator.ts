const indexGeneratorLoop = (max: number, page: number) =>
  page % max < 0 ? (page % max) * -1 : page % max;
export default indexGeneratorLoop;
