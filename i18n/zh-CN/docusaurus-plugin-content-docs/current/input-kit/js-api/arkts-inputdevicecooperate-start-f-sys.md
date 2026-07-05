# start

## start

```TypeScript
function start(sinkDeviceDescriptor: string, srcInputDeviceId: number, callback: AsyncCallback<void>): void
```

启动键鼠穿越，使用callback异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.activateCooperate](../../apis-distributed-service-kit/arkts-apis/arkts-cooperate-activatecooperate-f-sys.md#activateCooperate-1) > 替代。

**起始版本：** 9

**废弃版本：** 23

**替代接口：** ohos.cooperate/cooperate#activateCooperate

**系统能力：** SystemCapability.MultimodalInput.Input.Cooperator

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sinkDeviceDescriptor | string | 是 | 键鼠穿越目标设备描述符。 |
| srcInputDeviceId | number | 是 | 键鼠穿越待穿越外设标识符。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当启动键鼠穿越成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 4400001 | Incorrect descriptor for the target device. |
| 4400002 | Screen hop failed. |
| 202 | Permission denied, non-system app called system api. [since 12] |

**示例：**

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

**起始版本：** 9

**废弃版本：** 23

**替代接口：** ohos.cooperate/cooperate#activateCooperate

**系统能力：** SystemCapability.MultimodalInput.Input.Cooperator

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sinkDeviceDescriptor | string | 是 | 键鼠穿越目标设备描述符。 |
| srcInputDeviceId | number | 是 | 键鼠穿越待穿越外设标识符。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 4400001 | Incorrect descriptor for the target device. |
| 4400002 | Screen hop failed. |
| 202 | Permission denied, non-system app called system api. [since 12] |

**示例：**

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

