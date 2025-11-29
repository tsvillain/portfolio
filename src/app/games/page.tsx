import Section from "../components/Section";

export default function Games() {
  const currentlyPlaying = [
    { title: "Forza Horizon 5", platform: "PC" },
    { title: "The Last of Us Part I", platform: "PC" },
  ];

  const completedGames = [
    { title: "Need for Speed Most Wanted", platform: "PC" },
    { title: "Grand Theft Auto: San Andreas", platform: "PC" },
    { title: "Grand Theft Auto: V", platform: "PC" },
  ];

  const whatsNext = [
    { title: "Alan Wake 2", platform: "PC" },
    { title: "Cyberpunk 2077", platform: "PC" },
  ];

  const GameCard = ({ title, platform }: { title: string, platform: string }) => (
    <div className="card p-4 flex justify-between items-center">
      <h3 className="font-semibold text-lg m-0">{title}</h3>
      <span className="tag">{platform}</span>
    </div>
  );

  return (
    <div className="pt-24 pb-12">
      <Section 
        title="Games" 
        subtitle="When I'm not coding, I enjoy exploring virtual worlds."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Currently Playing</h2>
            <div className="space-y-4">
              {currentlyPlaying.length > 0 ? (
                currentlyPlaying.map((game, index) => (
                  <GameCard key={index} {...game} />
                ))
              ) : (
                <p>No games currently being played.</p>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-stone-700">What's Next</h2>
            <div className="space-y-4">
              {whatsNext.length > 0 ? (
                whatsNext.map((game, index) => (
                  <GameCard key={index} {...game} />
                ))
              ) : (
                <p>No upcoming games planned.</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-stone-700">Completed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {completedGames.length > 0 ? (
              completedGames.map((game, index) => (
                <GameCard key={index} {...game} />
              ))
            ) : (
              <p>No completed games yet.</p>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
