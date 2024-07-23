import { toast, ToastType } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const toastNotification = (
    message: string,
    type: ToastType,
    autoClose: number
) => {
    toast(message, {
        autoClose: autoClose,
        dangerouslyHTMLString: true,
        type: type,
        transition: "slide",
    });
};

export default toastNotification;
