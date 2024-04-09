/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Rindo compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLRindoElement, JSXBase } from "@rindo/core/internal";
import { ActionSheetOption } from "./definitions";
export { ActionSheetOption } from "./definitions";
export namespace Components {
    interface PwaActionSheet {
        "cancelable": boolean;
        "header": string;
        "options": ActionSheetOption[];
    }
    interface PwaCamera {
        "facingMode": string;
        "handleNoDeviceError": (e?: any) => void;
        "handlePhoto": (photo: Blob) => void;
        "noDevicesButtonText": string;
        "noDevicesText": string;
    }
    interface PwaCameraModal {
        "dismiss": () => Promise<void>;
        "facingMode": string;
        "present": () => Promise<void>;
    }
    interface PwaCameraModalInstance {
        "facingMode": string;
        "noDevicesButtonText": string;
        "noDevicesText": string;
    }
    interface PwaToast {
        "duration": number;
        "message": string;
    }
}
export interface PwaActionSheetCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPwaActionSheetElement;
}
export interface PwaCameraModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPwaCameraModalElement;
}
export interface PwaCameraModalInstanceCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPwaCameraModalInstanceElement;
}
declare global {
    interface HTMLPwaActionSheetElement extends Components.PwaActionSheet, HTMLRindoElement {
    }
    var HTMLPwaActionSheetElement: {
        prototype: HTMLPwaActionSheetElement;
        new (): HTMLPwaActionSheetElement;
    };
    interface HTMLPwaCameraElement extends Components.PwaCamera, HTMLRindoElement {
    }
    var HTMLPwaCameraElement: {
        prototype: HTMLPwaCameraElement;
        new (): HTMLPwaCameraElement;
    };
    interface HTMLPwaCameraModalElement extends Components.PwaCameraModal, HTMLRindoElement {
    }
    var HTMLPwaCameraModalElement: {
        prototype: HTMLPwaCameraModalElement;
        new (): HTMLPwaCameraModalElement;
    };
    interface HTMLPwaCameraModalInstanceElement extends Components.PwaCameraModalInstance, HTMLRindoElement {
    }
    var HTMLPwaCameraModalInstanceElement: {
        prototype: HTMLPwaCameraModalInstanceElement;
        new (): HTMLPwaCameraModalInstanceElement;
    };
    interface HTMLPwaToastElement extends Components.PwaToast, HTMLRindoElement {
    }
    var HTMLPwaToastElement: {
        prototype: HTMLPwaToastElement;
        new (): HTMLPwaToastElement;
    };
    interface HTMLElementTagNameMap {
        "pwa-action-sheet": HTMLPwaActionSheetElement;
        "pwa-camera": HTMLPwaCameraElement;
        "pwa-camera-modal": HTMLPwaCameraModalElement;
        "pwa-camera-modal-instance": HTMLPwaCameraModalInstanceElement;
        "pwa-toast": HTMLPwaToastElement;
    }
}
declare namespace LocalJSX {
    interface PwaActionSheet {
        "cancelable"?: boolean;
        "header"?: string;
        "onSelection"?: (event: PwaActionSheetCustomEvent<any>) => void;
        "options"?: ActionSheetOption[];
    }
    interface PwaCamera {
        "facingMode"?: string;
        "handleNoDeviceError"?: (e?: any) => void;
        "handlePhoto"?: (photo: Blob) => void;
        "noDevicesButtonText"?: string;
        "noDevicesText"?: string;
    }
    interface PwaCameraModal {
        "facingMode"?: string;
        "onNoDeviceError"?: (event: PwaCameraModalCustomEvent<any>) => void;
        "onPhoto"?: (event: PwaCameraModalCustomEvent<any>) => void;
    }
    interface PwaCameraModalInstance {
        "facingMode"?: string;
        "noDevicesButtonText"?: string;
        "noDevicesText"?: string;
        "onNoDeviceError"?: (event: PwaCameraModalInstanceCustomEvent<any>) => void;
        "onPhoto"?: (event: PwaCameraModalInstanceCustomEvent<any>) => void;
    }
    interface PwaToast {
        "duration"?: number;
        "message"?: string;
    }
    interface IntrinsicElements {
        "pwa-action-sheet": PwaActionSheet;
        "pwa-camera": PwaCamera;
        "pwa-camera-modal": PwaCameraModal;
        "pwa-camera-modal-instance": PwaCameraModalInstance;
        "pwa-toast": PwaToast;
    }
}
export { LocalJSX as JSX };
declare module "@rindo/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pwa-action-sheet": LocalJSX.PwaActionSheet & JSXBase.HTMLAttributes<HTMLPwaActionSheetElement>;
            "pwa-camera": LocalJSX.PwaCamera & JSXBase.HTMLAttributes<HTMLPwaCameraElement>;
            "pwa-camera-modal": LocalJSX.PwaCameraModal & JSXBase.HTMLAttributes<HTMLPwaCameraModalElement>;
            "pwa-camera-modal-instance": LocalJSX.PwaCameraModalInstance & JSXBase.HTMLAttributes<HTMLPwaCameraModalInstanceElement>;
            "pwa-toast": LocalJSX.PwaToast & JSXBase.HTMLAttributes<HTMLPwaToastElement>;
        }
    }
}
