export interface Product {
  id: string;
  title: string;
  category: string;
  price?: number;
  instagramUrl: string;
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum ChatState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR'
}