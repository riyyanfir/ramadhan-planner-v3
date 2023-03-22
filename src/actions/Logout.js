import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem } from "../helpers";

export const logoutAction = async () => {
  deleteItem({
    key: "userName",
  });
  deleteItem({
    key: "challenge",
  });
  deleteItem({
    key: "dailyAmal",
  });
  deleteItem({
    key: "khatamQuran",
  });

  toast.success("Semua data berhasil dihapus");

  return redirect("/");
};
