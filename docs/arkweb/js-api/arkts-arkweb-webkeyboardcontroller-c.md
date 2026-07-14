# WebKeyboardController

Define the controller to interact with a custom keyboard, related to the {@link onInterceptKeyboardAttach} event.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## close

```TypeScript
close(): void
```

Closes this custom keyboard.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor()
```

Constructs a **WebKeyboardController** API.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## deleteBackward

```TypeScript
deleteBackward(length: number): void
```

Deletes a specified number of characters backward in a **Web** component text box.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| length | number | Yes | Length of characters to delete backward in a **Web** component text box.<br>Value range:[-2147483648, 2147483647]. If the parameter value exceeds the character length, all characters after the cursor aredeleted by default. If the parameter value is a negative number, the deletion is not performed. |

## deleteForward

```TypeScript
deleteForward(length: number): void
```

Deletes a specified number of characters forward in a **Web** component text box.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| length | number | Yes | Length of characters to delete forward in a **Web** component text box.<br>Value range:[-2147483648, 2147483647]. If the parameter value exceeds the character length, all characters before the cursor aredeleted by default. If the parameter value is a negative number, the deletion is not performed. |

## insertText

```TypeScript
insertText(text: string): void
```

Inserts characters into the **Web** component text box.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Characters to insert into the **Web** component text box. |

## sendFunctionKey

```TypeScript
sendFunctionKey(key: number): void
```

Inserts a function key. Currently, only the Enter key type is supported. For details about the value, see [EnterKeyType](../../apis-ime-kit/arkts-apis/arkts-ime-enterkeytype-e.md).

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | number | Yes | Function key to insert into the **Web** component text box. Currently, only the Enterkey is supported. |

