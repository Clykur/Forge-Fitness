export const WA_NUMBER = "918179299096";

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  "Hi! I'm interested in joining Forge Fitness. Can you tell me more about memberships and the next available batch?"
);
