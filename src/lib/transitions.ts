import { cubicInOut } from 'svelte/easing';

export const slideIn = (node: HTMLElement, { duration = 300, delay = 0 }) => ({
	duration,
	delay,
	css: (t: number) => `
    transform: translateY(${(1 - t) * 20}px);
    opacity: ${t};
  `,
	easing: cubicInOut
});

export const fadeScale = (node: HTMLElement, { duration = 200 }) => ({
	duration,
	css: (t: number) => `
    transform: scale(${0.9 + t * 0.1});
    opacity: ${t};
  `
});
