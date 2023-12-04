/**
 * Title: Write a program using JavaScript on ViaChat
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 04, December 2023
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const viaChatApi = createApi({
  reducerPath: "viaChatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
  }),
  tagTypes: ["User", "Chat"],
  endpoints: () => ({}),
});
