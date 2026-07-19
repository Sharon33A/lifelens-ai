export function getUserId() {
  if (typeof window === "undefined") return "anonymous";

  let id = localStorage.getItem("lifelens_user_id");

  if (!id) {
    id =
      "ll-" +
      crypto.randomUUID();

    localStorage.setItem(
      "lifelens_user_id",
      id
    );
  }

  return id;
}