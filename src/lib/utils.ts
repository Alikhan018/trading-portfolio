import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import axios from 'axios';

export const coinMarketCapApi = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com/v1',
  headers: {
    'X-CMC_PRO_API_KEY': '140948d8-6b28-49bf-9cb9-5237f730769b',
    'Accept': 'application/json',
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
