# ScreenCaptureHandler

Implements the **ScreenCaptureHandler** object for accepting or rejecting a screen capture request. For details about the sample code, see [onScreenCaptureRequest](./arkts-basic-components-web-events.md#onscreencapturerequest10). > **NOTE** > > - The initial APIs of this component are supported since API version 8. > Updates will be marked with a superscript to indicate their earliest API version. > > - The initial APIs of this class are supported since API version 10. > > - The sample effect is subject to the actual device.

**Since:** 10

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor()
```

Constructs a **ScreenCaptureHandler** object.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## deny

```TypeScript
deny(): void
```

Rejects this screen capture request.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## getOrigin

```TypeScript
getOrigin(): string
```

Obtains the origin of this web page.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Origin of the web page that requests the permission. |

## grant

```TypeScript
grant(config: ScreenCaptureConfig): void
```

Grants the screen capture permission.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | ScreenCaptureConfig | Yes | Screen capture configuration. |

