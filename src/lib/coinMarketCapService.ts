import { coinMarketCapApi } from './utils';

export interface CurrencyQuote {
  price: number;
  percent_change_24h: number;
  market_cap: number;
}

export interface CurrencyData {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: CurrencyQuote;
  };
}

export class CoinMarketCapService {
  static async getTopCryptos(limit: number = 10): Promise<CurrencyData[]> {
    try {
      const response = await coinMarketCapApi.get('/cryptocurrency/listings/latest', {
        params: {
          start: 1,
          limit,
          convert: 'USD',
        },
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      return [];
    }
  }
}
