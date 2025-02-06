import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const secretKey = process.env.RECAPTCHA_SECRET_KEY; // 🔒 Use secure env variable

    if (!secretKey) {
      return NextResponse.json(
        {
          error: "reCAPTCHA secret key is missing in the server.",
          success: false,
        },
        { status: 500 }
      );
    }

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${reqBody.token}`;

    const res = await axios.get(url); // ✅ Use GET request

    if (res.data.success) {
      return NextResponse.json({
        message: "Captcha verification successful!",
        success: true,
      });
    }

    return NextResponse.json(
      {
        error: "Captcha verification failed!",
        success: false,
      },
      { status: 400 }
    );
  } catch (error) {
    console.error("reCAPTCHA Verification Error:", error.message);

    return NextResponse.json(
      {
        error: "Captcha verification failed due to server error.",
        success: false,
      },
      { status: 500 }
    );
  }
}
