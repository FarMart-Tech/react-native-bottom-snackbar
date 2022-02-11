/* eslint-disable */
import React, { createRef } from 'react';
import {
    SnackbarComponent, SnackbarType,
    ISnackbarComponentProps, SnackbarOption
} from './AlertComponent';

const _snackbarRef = createRef<SnackbarComponent>();

const AlertBottomSnackbar = (props: ISnackbarComponentProps) => (
    <SnackbarComponent ref={_snackbarRef} {...props} />
);

/**
 * @param message The message that you want to show.
 * @param type Type must be any of these: "normal", "error", "success", "info", "warn" DEFAULT: "normal".
 * @param onClose callback will run only if snackbar get closed automatically.
 */
AlertBottomSnackbar.show = (message: string, type: SnackbarType = "normal", onClose?: () => void) => {
    _snackbarRef.current?.show({
        message,
        type,
        onClose
    });
}

/**
 * closes all opened snackbar.
 */
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