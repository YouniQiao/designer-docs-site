# startBlinking (System API)

## Modules to Import

```TypeScript
import { config } from '@kit.AccessibilityKit';
```

## startBlinking

```TypeScript
function startBlinking(mode: BlinkingMode, scenario: BlinkingScenario): BlinkResultCode
```

Enable the flash or screen to blink for flash alert.

**Since:** 26.0.0

**Required permissions:** ohos.permission.WRITE_ACCESSIBILITY_CONFIG

**Model restriction:** This API can be used only in the stage model.

<!--Device-config-function startBlinking(mode: BlinkingMode, scenario: BlinkingScenario): BlinkResultCode--><!--Device-config-function startBlinking(mode: BlinkingMode, scenario: BlinkingScenario): BlinkResultCode-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [BlinkingMode](arkts-accessibility-config-blinkingmode-e-sys.md) | Yes | Indicates the mode of screen flickering or flash light flashing. |
| scenario | [BlinkingScenario](arkts-accessibility-config-blinkingscenario-e-sys.md) | Yes | Indicates the scenario that blinking is triggered. |

**Return value:**

| Type | Description |
| --- | --- |
| [BlinkResultCode](arkts-accessibility-config-blinkresultcode-e-sys.md) | Returns the result code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.<br>The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed.<br>A non-system application calls a system API. |
| [9300000](../errorcode-accessibility.md#9300000-accessibility-service-abnormal) | System abnormality.Possible causes:<br>1.Internal operation failed.<br>2.Failed to obtain the required service or client object (null pointer).<br>3.IPC communication failed.<br>4.Failed to obtain the accessibility service proxy. |

