export default function Games() {
  const currentlyPlaying = [
    { title: "Forza Horizon 5", platform: "PC" },
    { title: "The Last of Us Part I", platform: "PC" },
  ];

  const completedGames = [
    { title: "Need for Speed Most Wanted", platform: "PC" },
    { title: "Grand Theft Auto: San Andreas", platform: "PC" },
    { title: "Grand Theft Auto: 5", platform: "PC" },
  ];

  const whatsNext = [
    { title: "Alan Wake 2", platform: "PC" },
    { title: "Cyberpunk 2077", platform: "PC" },
  ];

  return (
    <div>
      <h1>games</h1>

      <section>
        <h2>currently playing</h2>
        {currentlyPlaying.length > 0 ? (
          currentlyPlaying.map((game, index) => (
            <div key={index} className="terminal-card">
              <h3>{game.title}</h3>
              <p>
                <strong>Platform:</strong>{" "}
                <span className="code">{game.platform}</span>
              </p>
            </div>
          ))
        ) : (
          <div className="terminal-card">
            <p>
              No games currently being played. Add your current games to the
              array above.
            </p>
          </div>
        )}
      </section>

      <section>
        <h2>completed</h2>
        {completedGames.length > 0 ? (
          completedGames.map((game, index) => (
            <div key={index} className="terminal-card">
              <h3>{game.title}</h3>
              <p>
                <strong>Platform:</strong>{" "}
                <span className="code">{game.platform}</span>
              </p>
            </div>
          ))
        ) : (
          <div className="terminal-card">
            <p>
              No completed games yet. Add your completed games to the array
              above.
            </p>
          </div>
        )}
      </section>

      <section>
        <h2>what&apos;s next</h2>
        {whatsNext.length > 0 ? (
          whatsNext.map((game, index) => (
            <div key={index} className="terminal-card">
              <h3>{game.title}</h3>
              <p>
                <strong>Platform:</strong>{" "}
                <span className="code">{game.platform}</span>
              </p>
            </div>
          ))
        ) : (
          <div className="terminal-card">
            <p>
              No upcoming games planned. Add your next games to the array above.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
