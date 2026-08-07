# setBatteryConfig (System API)

## setBatteryConfig

```TypeScript
function setBatteryConfig(sceneName: string, sceneValue: string): int
```

Sets the battery configuration based on the specified scenario.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-batteryInfo-function setBatteryConfig(sceneName: string, sceneValue: string): int--><!--Device-batteryInfo-function setBatteryConfig(sceneName: string, sceneValue: string): int-End-->

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sceneName | string | Yes | Scenario name. The value must be a string. |
| sceneValue | string | Yes | Scenario value. The value must be a string. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Operation result. The value **0** indicates that the operation is successful, and a non-zero value indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [5100101](../../apis-basic-services-kit/errorcode-battery-info.md#5100101-service-connection-failure) | Failed to connect to the service. |

