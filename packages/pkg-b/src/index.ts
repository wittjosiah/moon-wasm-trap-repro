import { greet } from '@repro/pkg-a';

export const welcome = (name: string): string => {
  return `${greet(name)} Welcome to the app!`;
};
