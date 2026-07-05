# createBleScanner

## createBleScanner

```TypeScript
function createBleScanner(): BleScanner
```

Create a ble scanner instance. Each ble scanner instance can be independently started or stopped.

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| BleScanner | Returns the promise object. |

**示例：**

```TypeScript
import { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';
import { ble } from '@kit.ConnectivityKit';
let bleScanner: ble.BleScanner = ble.createBleScanner();
console.info('create bleScanner success');

```

