import { SERVICES } from "@/data/data";

export function getServcies(start = 0, end = SERVICES.length) {
  return SERVICES.slice(start, end) || [];
}
