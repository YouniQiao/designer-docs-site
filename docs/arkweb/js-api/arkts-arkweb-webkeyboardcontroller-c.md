# WebKeyboardController

Define the controller to interact with a custom keyboard, related to the {@link onInterceptKeyboardAttach} event.

**Since:** 12

<!--Device-unnamed-declare class WebKeyboardController--><!--Device-unnamed-declare class WebKeyboardController-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="close"></a>
## close

```TypeScript
close(): void
```

Closes this custom keyboard.

**Since:** 12

<!--Device-WebKeyboardController-close(): void--><!--Device-WebKeyboardController-close(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Constructs a **WebKeyboardController** API.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebKeyboardController-constructor()--><!--Device-WebKeyboardController-constructor()-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="deletebackward"></a>
## deleteBackward

```TypeScript
deleteBackward(length: number): void
```

Deletes a specified number of characters backward in a **Web** component text box.

**Since:** 12

<!--Device-WebKeyboardController-deleteBackward(length: number): void--><!--Device-WebKeyboardController-deleteBackward(length: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| length | number | Yes | Length of characters to delete backward in a **Web** component text box.<br>Value range:[-2147483648, 2147483647]. If the parameter value exceeds the character length, all characters after the cursor are deleted by default. If the parameter value is a negative number, the deletion is not performed. |

<a id="deleteforward"></a>
## deleteForward

```TypeScript
deleteForward(length: number): void
```

Deletes a specified number of characters forward in a **Web** component text box.

**Since:** 12

<!--Device-WebKeyboardController-deleteForward(length: number): void--><!--Device-WebKeyboardController-deleteForward(length: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| length | number | Yes | Length of characters to delete forward in a **Web** component text box.<br>Value range:[-2147483648, 2147483647]. If the parameter value exceeds the character length, all characters before the cursor are deleted by default. If the parameter value is a negative number, the deletion is not performed. |

<a id="inserttext"></a>
## insertText

```TypeScript
insertText(text: string): void
```

Inserts characters into the **Web** component text box.

**Since:** 12

<!--Device-WebKeyboardController-insertText(text: string): void--><!--Device-WebKeyboardController-insertText(text: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Characters to insert into the **Web** component text box. |

<a id="sendfunctionkey"></a>
## sendFunctionKey

```TypeScript
sendFunctionKey(key: number): void
```

Inserts a function key. Currently, only the Enter key type is supported.For details about the value, see [EnterKeyType](../../apis-ime-kit/arkts-apis/arkts-ime-inputmethod-enterkeytype-e.md).

**Since:** 12

<!--Device-WebKeyboardController-sendFunctionKey(key: number): void--><!--Device-WebKeyboardController-sendFunctionKey(key: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | number | Yes | Function key to insert into the **Web** component text box. Currently, only the Enter key is supported. |

