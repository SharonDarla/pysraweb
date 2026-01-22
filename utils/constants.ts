let SERVER_URL = "/api";
if (process.env.NEXT_PUBLIC_ENVIRONMENT === "DEV") {
  SERVER_URL = "http://localhost:8000";
}
export { SERVER_URL };
