# JsGeolocation

Defines the js geolocation request.

**Since:** 8

<!--Device-unnamed-declare class JsGeolocation--><!--Device-unnamed-declare class JsGeolocation-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-JsGeolocation-constructor()--><!--Device-JsGeolocation-constructor()-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="invoke"></a>
## invoke

```TypeScript
invoke(origin: string, allow: boolean, retain: boolean): void
```

Sets the geolocation permission status of a web page.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-JsGeolocation-invoke(origin: string, allow: boolean, retain: boolean): void--><!--Device-JsGeolocation-invoke(origin: string, allow: boolean, retain: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| origin | string | Yes | Index of the origin. |
| allow | boolean | Yes | Geolocation permission status. {@code true} means to allow geolocation permission;{@code false} means to disallow geolocation permission. |
| retain | boolean | Yes | Whether the geolocation permission status can be saved to the system.{@code true} means to allow the geolocation permission status to be saved to the system; {@code false} means to disallow the geolocation permission status to be saved to the system. You can manage the geolocation permissions saved to the system through {@link GeolocationPermissions}. |

