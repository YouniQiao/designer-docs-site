# isBatteryConfigSupported (System API)

## Modules to Import

```TypeScript
import { batteryInfo } from '@ohos.batteryInfo';
```

## isBatteryConfigSupported

```TypeScript
function isBatteryConfigSupported(sceneName: string): boolean
```

Checks whether the battery configuration is enabled based on the specified scenario.

**Since:** 11

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sceneName | string | Yes | Scenario name. The value must be a string. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Operation result. The value **true** indicates that the charging scenario is supported, andthe value **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types; |
| [5100101](../../apis-basic-services-kit/errorcode-battery-info.md#5100101-service-connection-failure) | Failed to connect to the service. |

**Example**

```TypeScript
import {batteryInfo} from '@kit.BasicServicesKit';

let sceneName = 'xxx';
let result = batteryInfo.isBatteryConfigSupported(sceneName);

console.info("The result is: " + result);

```

