export { default } from "next-auth/middleware";
//matcher: ["/:path*"]

export const config = {
  matcher: ["/profile", "/create-prompt", "/update-prompt"],
};
