import { createIconResponse } from "../../icon-kit";

export async function GET() {
  return createIconResponse(192);
}
