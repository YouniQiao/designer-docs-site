# isBatteryConfigSupported

## isBatteryConfigSupported

```TypeScript
function isBatteryConfigSupported(sceneName: string): boolean
```

检查是否按场景名称启用电池配置。

**Since:** 11

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sceneName | string | Yes | 设置场景名称；该参数必须为字符串类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果设备支持充电场景，则返回true，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types; |
| 5100101 | Failed to connect to the service. |

**Example**

```TypeScript
import {batteryInfo} from '@kit.BasicServicesKit';

let sceneName = 'xxx';
let result = batteryInfo.isBatteryConfigSupported(sceneName);

console.info("The result is: " + result);

```

