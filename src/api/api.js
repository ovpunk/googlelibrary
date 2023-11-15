export const booksFetch = (search) => {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBY58vOnSO-8FpP4to5YINQeFBey9PtOzU`
  );
};

//https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyBY58vOnSO-8FpP4to5YINQeFBey9PtOzU
