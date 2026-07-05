# WebKeyboardOptions

Defines the web keyboard options when onInterceptKeyboardAttach event return.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## useSystemKeyboard

```TypeScript
useSystemKeyboard: boolean
```

Whether the system keyboard is used.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## enterKeyType

```TypeScript
enterKeyType?: number
```

Set the enter key type when the system keyboard is used, the "enter" key related to the {@link inputMethodEngine}.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## customKeyboard

```TypeScript
customKeyboard?: CustomBuilder
```

Set the custom keyboard builder when the custom keyboard is used.

**Type:** CustomBuilder

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

