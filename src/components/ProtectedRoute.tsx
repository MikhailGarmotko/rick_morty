import { Props } from "../misc/interfaces/types";
import { useAppDispatch } from "../store";
import { setUser } from "../store/userProfile";

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
    const dispatch = useAppDispatch();
  const user: string | null = localStorage.getItem("user");
  if (user) {
    dispatch(setUser(user));
  }

  return children;
};
