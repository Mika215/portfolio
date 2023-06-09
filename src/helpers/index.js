/**
 * @param {Array}
 * @returns
 */
export const intersecObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  }
  // {
  //   threshold: 1,
  // }
);
