async function sayJoke(apiUrl, jokeId) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Validate the data shape
    if (!data.jokes || !Array.isArray(data.jokes)) {
      throw new Error(`No jokes at url: ${apiUrl}`);
    }

    // Find the joke by id
    const joke = data.jokes.find((j) => j.id === jokeId);
    if (!joke) {
      throw new Error(`No jokes found id: ${jokeId}`);
    }

    // Return an object with saySetup and sayPunchLine methods
    return {
      saySetup: () => joke.setup,
      sayPunchLine: () => joke.punchLine,
    };
  } catch (error) {
    // Re-throw the error so it can be caught in a promise style
    throw error;
  }
}
sayJoke("http://great.jokes/christmas", 101)
  .then((joke) => {
    console.log(joke.saySetup()); // "Who is Santa's favorite singer?"
    console.log(joke.sayPunchLine()); // "Elf-is Presley!"
  })
  .catch((err) => {
    console.error(err.message);
  });
