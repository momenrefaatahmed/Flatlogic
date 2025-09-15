import { SnackbarProvider, useSnackbar } from "notistack";
import { NotificationContext } from "./NotificationContext";

export function NotificationProvider({ children }) {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }} // ✅ فوق يمين
    >
      <NotificationContextProvider>{children}</NotificationContextProvider>
    </SnackbarProvider>
  );
}

function NotificationContextProvider({ children }) {
  const { enqueueSnackbar } = useSnackbar();

  const showNotification = (message, variant = "default") => {
    enqueueSnackbar(message, { variant });
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}
