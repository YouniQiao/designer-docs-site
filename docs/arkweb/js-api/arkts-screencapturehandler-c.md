# ScreenCaptureHandler

Defines the onScreenCapture callback, related to {@link onScreenCapture} method.

**Since:** 10

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## deny

```TypeScript
deny(): void
```

Reject the request.

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## getOrigin

```TypeScript
getOrigin(): string
```

Gets the source of the webpage that attempted to access the restricted resource.

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

## grant

```TypeScript
grant(config: ScreenCaptureConfig): void
```

Grant origin access to a given resource.

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | ScreenCaptureConfig | Yes | The screen capture configuration. |

