# react-native-bottom-snackbar

## A bottom snackbar to display messages on android / ios devices

### install
``npm install react-native-bottom-snackbar``
or
``yarn add react-native-bottom-snackbar``

#### How to use

import `AlertBottomSnackbar` component from `react-native-bottom-snackbar` and render it at the root level of the app.

open `App.js` or `App.tsx` (incase of typescript).

```jsx
import React from "react";
import { View } from "react-native";
import { AlertBottomSnackbar } from "react-native-bottom-snackbar";

const App = () => (
  <View style={{ flex: 1 }}>
    ----------
    ----------
    ----------
    <AlertBottomSnackbar />
  </View>
);

export default App;
```

That's it. Now you're ready to display snackbar from anywhere within your app.

```js
import { AlertBottomSnackbar } from "react-native-bottom-snackbar";

const someFunction = () => {
    // perform some operation
    --------------
    --------------
    --------------
    --------------
    AlertBottomSnackbar.show("this is test message", "info", () => {
        console.log("snackbar closed.");
    });
}
```
![demo screenshot](/screenshot/info-img.jpeg)

#### AlertBottomSnackbar Props
```jsx
style: ViewStyle (optional),
labelStyle: TextStyle (optional),
colorError:  string (default #B4161B),
colorNormal: string (default #242B2E),
colorSuccess: string (default #1FAA59),
colorInfo: string (default #1B98F5),
colorWarn: string (default #E07C24),
duration: number (default 3000 ms),
numberOfLines: number (default 2)
```

#### AlertBottomSnackbar Methods
```js
// to show the snackbar call show method.
const message = "this is test snackbar.";
const type = "error"; // "normal" | "error" | "success" | "info" | "warn" (default "normal")
const onClose = () => {
    -------
    -------
    -------
};
AlertBottomSnackbar.show(message, type, onClose);

// you can close the snackbar as well by just calling the close method.
AlertBottomSnackbar.close();
```
