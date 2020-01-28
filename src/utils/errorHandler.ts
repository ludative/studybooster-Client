export default (err): void => {
  const { graphQLErrors, networkError } = err;
  const isGraphQlError = graphQLErrors && graphQLErrors.length > 0;
  let errorMessage = "";
  /**
   * 1. isGraphQLError
   * 2. isNetworkError
   * 3. isGraphQLError && isNetworkError
   */
  if (isGraphQlError) {
    graphQLErrors.forEach(({ message = "" }, index: number) => {
      errorMessage += `${message}`;
      if (index > 0) errorMessage += `\n${message}`;
    });
  }

  if (networkError?.message) {
    if (errorMessage) errorMessage += `\n${networkError.message}`;
    else errorMessage = networkError.message;
  }

  alert(errorMessage);
};
