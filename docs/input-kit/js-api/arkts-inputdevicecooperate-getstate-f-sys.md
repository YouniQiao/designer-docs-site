# getState

## getState

```TypeScript
function getState(deviceDescriptor: string, callback: AsyncCallback<{ state: boolean }>): void
```

获取键鼠穿越开关的状态，使用callback异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.getCooperateSwitchState](../../apis-distributed-service-kit/arkts-apis/arkts-cooperate-getcooperateswitchstate-f-sys.md#getCooperateSwitchState-1) > 替代。

**Since:** 9

**Deprecated since:** 23

**Substitute:** ohos.cooperate/cooperate#getCooperateSwitchState

**System capability:** SystemCapability.MultimodalInput.Input.Cooperator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceDescriptor | string | Yes | 键鼠穿越目标设备描述符。 |
| callback | AsyncCallback&lt;{ state: boolean }> | Yes | 回调函数。当获取键鼠穿越开关状态成功，err为undefined，data为键鼠穿越开关状态（true表示打开，false  表示关闭）；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 202 | Permission denied, non-system app called system api. [since 12] |

**Example**

```TypeScript
import { inputDeviceCooperate } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          let deviceDescriptor = "descriptor";
          try {
            inputDeviceCooperate.getState(deviceDescriptor, (error: BusinessError, data: object) => {
              if (error) {
                console.error(`Failed to get status, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in getting status, data: ${JSON.stringify(data)}.`);
            });
          } catch (error) {
            console.error(`Failed to get status, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## getState

```TypeScript
function getState(deviceDescriptor: string): Promise<{ state: boolean }>
```

获取键鼠穿越开关的状态，使用Promise异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.getCooperateSwitchState](../../apis-distributed-service-kit/arkts-apis/arkts-cooperate-getcooperateswitchstate-f-sys.md#getCooperateSwitchState-2)替 > 代。

**Since:** 9

**Deprecated since:** 23

**Substitute:** ohos.cooperate/cooperate#getCooperateSwitchState

**System capability:** SystemCapability.MultimodalInput.Input.Cooperator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceDescriptor | string | Yes | 键鼠穿越目标设备描述符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;{ state: boolean }> | Promise used to return the state of the screen hopping switch. true if  enabled and false if disabled. [since 12] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 202 | Permission denied, non-system app called system api. [since 12] |

**Example**

```TypeScript
import { inputDeviceCooperate } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          let deviceDescriptor = "descriptor";
          inputDeviceCooperate.getState(deviceDescriptor).then((data: object) => {
            console.info(`Succeeded in getting the status, data: ${JSON.stringify(data)}.`);
          }).catch((error: BusinessError) => {
            console.error(`Failed to get the status, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          });
        })
    }
  }
}

```

