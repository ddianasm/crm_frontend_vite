export const authReducer = (
  state: boolean,
  action: { type: "isAuth" | "noAuth" }
) => {
  switch (action.type) {
    case "isAuth":
      return true;
    case "noAuth":
      return false;
    default:
      return state;
  }
};
