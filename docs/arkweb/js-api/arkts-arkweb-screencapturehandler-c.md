# ScreenCaptureHandler

Implements the **ScreenCaptureHandler** object for accepting or rejecting a screen capture request.For details about the sample code,see [onScreenCaptureRequest](./arkts-basic-components-web-events.md#onscreencapturerequest10).

> **NOTE**  
>  
> - The initial APIs of this component are supported since API version 8.  
> Updates will be marked with a superscript to indicate their earliest API version.  
>  
> - The initial APIs of this class are supported since API version 10.  
>  
> - The sample effect is subject to the actual device.

**Since:** 10

<!--Device-unnamed-declare class ScreenCaptureHandler--><!--Device-unnamed-declare class ScreenCaptureHandler-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Constructs a **ScreenCaptureHandler** object.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScreenCaptureHandler-constructor()--><!--Device-ScreenCaptureHandler-constructor()-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="deny"></a>
## deny

```TypeScript
deny(): void
```

Rejects this screen capture request.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScreenCaptureHandler-deny(): void--><!--Device-ScreenCaptureHandler-deny(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="getorigin"></a>
## getOrigin

```TypeScript
getOrigin(): string
```

Obtains the origin of this web page.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScreenCaptureHandler-getOrigin(): string--><!--Device-ScreenCaptureHandler-getOrigin(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Origin of the web page that requests the permission. |

<a id="grant"></a>
## grant

```TypeScript
grant(config: ScreenCaptureConfig): void
```

Grants the screen capture permission.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScreenCaptureHandler-grant(config: ScreenCaptureConfig): void--><!--Device-ScreenCaptureHandler-grant(config: ScreenCaptureConfig): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [ScreenCaptureConfig](arkts-arkweb-screencaptureconfig-i.md) | Yes | Screen capture configuration. |

