import { ScrapeCard } from "../components/scrapeCard";
//hi

export function ScrapeCards({ scrapeCards }) {
  const revScrapeCards = scrapeCards.slice().reverse();
  return (
    <div>
      {revScrapeCards.map((a) => (
        <div style={{ padding: 10 }}>
          <ScrapeCard scrapeCard={a} />
        </div>
      ))}
    </div>
  );
}
