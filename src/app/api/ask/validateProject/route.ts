import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const mockResponse = {
    choices: [
      {
        message: {
          role: "assistant",
          content: "JavaScript is like a dance, variables and functions in a trance, making the web so enhanced.",
        },
      },
    ],
  };

  return NextResponse.json({ status: "success", data: mockResponse.choices[0] });
}

export async function POST(req: NextRequest) {
  const { title, description } = await req.json();

  // Simple mock logic to "validate" the title and description
  let status = "accepted";
  let suggestion = "";

  if (!title || !description) {
    status = "rejected";
    suggestion = "Title and description cannot be empty.";
  } else if (description.length < 20) {
    status = "rejected";
    suggestion = "The description should be more detailed.";
  }

  const mockResponse = {
    choices: [
      {
        message: {
          role: "assistant",
          content: JSON.stringify({ status, suggestion }),
        },
      },
    ],
  };

  return NextResponse.json({ status: "success", data: mockResponse.choices[0] });
}
