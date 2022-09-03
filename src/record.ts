export {};

// Record<K, T>

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: 'Tokyo', confirmed_cases: 1000 },
  Chiba: { kanji_name: 'Chiba', confirmed_cases: 200 },
  Tottori: { kanji_name: 'Tottori', confirmed_cases: 50 },
};
