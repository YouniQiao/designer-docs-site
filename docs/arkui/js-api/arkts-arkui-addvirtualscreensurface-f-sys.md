# addVirtualScreenSurface (System API)

## Modules to Import

```TypeScript
import { display } from '@kit.ArkUI';
```

## addVirtualScreenSurface

```TypeScript
function addVirtualScreenSurface(screenId: number, surfaceId: string, surfaceRegion?: Rect): Promise<void>
```

Add surface for the virtual screen.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| screenId | number | Yes | Indicates the screen id of the virtual screen. |
| surfaceId | string | Yes | Indicates the surface id. |
| surfaceRegion | Rect | No | Rectangular area of the virtual screen used to display the surface.Default value: the full region of the virtual screen. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function addVirtualScreenSurfacecan not work correctly due to limited device capabilities. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |
| [1400003](../errorcode-display.md#1400003-abnormal-display-manager-service) | This display manager service works abnormally. |
| [1400004](../errorcode-display.md#1400004-parameter-error) | Parameter error. Possible cause: 1. Invalid parameter range. |

