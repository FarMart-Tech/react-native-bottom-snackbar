/* eslint-disable */
import React, { createRef } from 'react';
import { SnackbarComponent, SnackbarType, ISnackbarComponentProps, SnackbarOption } from './AlertComponent';

const _snackbarRef = createRef<SnackbarComponent>();

/**
 * @param colorError set color for error message
 */
const AlertBottomSnackbar = (props: ISnackbarComponentProps) => (
    <SnackbarComponent ref={_snackbarRef} {...props} />
);

/**
 * @param message The message that you want to show.
 * @param onClose callback will run only if snackbar get closed automatically.
 * @param type Type must be any of these: "normal", "error", "success", "info", "warn" DEFAULT: "normal".
 */
AlertBottomSnackbar.show = (message: string, type: SnackbarType = "normal", onClose?: () => void) => {
    _snackbarRef.current?.show({
        message,
        type,
        onClose
    });
}

AlertBottomSnackbar.close = () => {
    _snackbarRef.current?.close();
}

export type {
    SnackbarType,
    ISnackbarComponentProps,
    SnackbarOption
};

export {
    AlertBottomSnackbar
};