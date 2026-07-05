# addVirtualScreenSurface

## addVirtualScreenSurface

```TypeScript
function addVirtualScreenSurface(screenId: long, surfaceId: string, surfaceRegion?: Rect): Promise<void>
```

为虚拟屏幕添加surface。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| screenId | long | Yes | 虚拟屏幕的屏幕ID。 |
| surfaceId | string | Yes | surface的id。 |
| surfaceRegion | Rect | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 不返回任何值的Promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported.function addVirtualScreenSurface  can not work correctly due to limited device capabilities. |
| 1400001 | Invalid display or screen. |
| 1400003 | This display manager service works abnormally. |
| 1400004 | Parameter error. Possible cause: 1. Invalid parameter range. |

