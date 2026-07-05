# getBatteryConfig

## getBatteryConfig

```TypeScript
function getBatteryConfig(sceneName: string): string
```

按场景名称查询电池配置。

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
| string | 返回电池充电配置，否则返回""。 |

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
let result = batteryInfo.getBatteryConfig(sceneName);

console.info("The result is: " + result);

```

