export const booksFetch = (search: string) => {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBY58vOnSO-8FpP4to5YINQeFBey9PtOzU`
  );
};
