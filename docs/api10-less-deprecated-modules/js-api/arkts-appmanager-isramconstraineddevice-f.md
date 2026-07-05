# isRamConstrainedDevice

## isRamConstrainedDevice

```TypeScript
function isRamConstrainedDevice(): Promise<boolean>
```

查询当前设备是否为RAM受限设备（内存资源严重受限的设备）。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.appManager/appManager#isRamConstrainedDevice

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | 以Promise方式返回接口运行结果及当前设备是否为RAM受限设备，可进行错误处理或其他自定义处理。true：当前设备为RAM受限设备，false：当前设备为非RAM受限设备。 |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';
import { BusinessError } from '@ohos.base';

appManager.isRamConstrainedDevice().then((data) => {
  console.info(`The result of isRamConstrainedDevice is: ${JSON.stringify(data)}`);
}).catch((error: BusinessError) => {
  console.error(`error: ${JSON.stringify(error)}`);
});

```

## isRamConstrainedDevice

```TypeScript
function isRamConstrainedDevice(callback: AsyncCallback<boolean>): void
```

查询当前设备是否为RAM受限设备（内存资源严重受限的设备）。使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.appManager/appManager#isRamConstrainedDevice

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 以回调方式返回接口运行结果及当前设备是否为RAM受限设备，可进行错误处理或其他自定义处理。true：当前设备为RAM受限设备，false：当前设备为非  RAM受限设备。 |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';

appManager.isRamConstrainedDevice((error, data) => {
  if (error && error.code !== 0) {
    console.error(`isRamConstrainedDevice fail, error: ${JSON.stringify(error)}`);
  } else {
    console.info(`The result of isRamConstrainedDevice is: ${JSON.stringify(data)}`);
  }
});

```

