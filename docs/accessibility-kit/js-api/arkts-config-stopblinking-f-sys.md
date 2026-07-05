# stopBlinking

## stopBlinking

```TypeScript
function stopBlinking(mode: BlinkingMode, scenario: BlinkingScenario): BlinkResultCode
```

Stop the flash or screen to blink for flash alert.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.WRITE_ACCESSIBILITY_CONFIG

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | BlinkingMode | Yes | Indicates the mode of screen flickering or flash light flashing. |
| scenario | BlinkingScenario | Yes | Indicates the scenario that blinking is triggered. |

**Return value:**

| Type | Description |
| --- | --- |
| BlinkResultCode | Returns the result code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed.  A non-system application calls a system API. |
| 9300000 | System abnormality.Possible causes:  1.Internal operation failed.  2.Failed to obtain the required service or client object (null pointer).  3.IPC communication failed.  4.Failed to obtain the accessibility service proxy. |

