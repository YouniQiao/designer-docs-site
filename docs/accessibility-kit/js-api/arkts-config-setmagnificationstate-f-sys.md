# setMagnificationState

## setMagnificationState

```TypeScript
function setMagnificationState(state: boolean): void
```

Sets the magnification state. Ensure that magnification is enabled before calling this API.

**Since:** 20

**Required permissions:** 

 ohos.permission.WRITE_ACCESSIBILITY_CONFIG

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | boolean | Yes | Whether to trigger or disable the magnification feature. - true: to trigger the  magnification feature. - false: to disable the magnification feature. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 9300007 | Trigger magnification failed. |

