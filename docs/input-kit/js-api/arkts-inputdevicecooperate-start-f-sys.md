# start

## start

```TypeScript
function start(sinkDeviceDescriptor: string, srcInputDeviceId: number, callback: AsyncCallback<void>): void
```

启动键鼠穿越，使用callback异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.activateCooperate](../../apis-distributed-service-kit/arkts-apis/arkts-cooperate-activatecooperate-f-sys.md#activateCooperate-1) > 替代。

**Since:** 9

**Deprecated since:** 23

**Substitute:** ohos.cooperate/cooperate#activateCooperate

**System capability:** SystemCapability.MultimodalInput.Input.Cooperator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sinkDeviceDescriptor | string | Yes | 键鼠穿越目标设备描述符。 |
| srcInputDeviceId | number | Yes | 键鼠穿越待穿越外设标识符。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当启动键鼠穿越成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 4400001 | Incorrect descriptor for the target device. |
| 4400002 | Screen hop failed. |
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
          const sinkDeviceDescriptor = "descriptor";
          let srcInputDeviceId = 0;
          try {
            inputDeviceCooperate.start(sinkDeviceDescriptor, srcInputDeviceId, (error: BusinessError) => {
              if (error) {
                console.error(`Failed to start keyboard mouse crossing, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in starting keyboard mouse crossing.`);
            });
          } catch (error) {
            console.error(`Failed to start keyboard mouse crossing, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## start

```TypeScript
function start(sinkDeviceDescriptor: string, srcInputDeviceId: number): Promise<void>
```

启动键鼠穿越，使用Promise异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.activateCooperate](../../apis-distributed-service-kit/arkts-apis/arkts-cooperate-activatecooperate-f-sys.md#activateCooperate-2) > 替代。

**Since:** 9

**Deprecated since:** 23

**Substitute:** ohos.cooperate/cooperate#activateCooperate

**System capability:** SystemCapability.MultimodalInput.Input.Cooperator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sinkDeviceDescriptor | string | Yes | 键鼠穿越目标设备描述符。 |
| srcInputDeviceId | number | Yes | 键鼠穿越待穿越外设标识符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 4400001 | Incorrect descriptor for the target device. |
| 4400002 | Screen hop failed. |
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
          const sinkDeviceDescriptor = "descriptor";
          const srcInputDeviceId = 0;
          inputDeviceCooperate.start(sinkDeviceDescriptor, srcInputDeviceId).then(() => {
            console.info(`Succeeded in starting keyboard mouse crossing.`);
          }).catch((error: BusinessError) => {
            console.error(`Failed to start keyboard mouse crossing, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          });
        })
    }
  }
}

```

