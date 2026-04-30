import { createIconResponse } from "../../icon-kit";

export async function GET() {
  return createIconResponse(512, { maskable: true });
}
