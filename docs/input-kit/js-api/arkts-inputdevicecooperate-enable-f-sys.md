# enable

## enable

```TypeScript
function enable(enable: boolean, callback: AsyncCallback<void>): void
```

开启、关闭键鼠穿越，使用callback异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.prepareCooperate](../../apis-distributed-service-kit/arkts-apis/arkts-cooperate-preparecooperate-f-sys.md#prepareCooperate-1)、 > [cooperate.unprepareCooperate](../../apis-distributed-service-kit/arkts-apis/arkts-cooperate-unpreparecooperate-f-sys.md#unprepareCooperate-1) > 替代。

**Since:** 9

**Deprecated since:** 23

**Substitute:** ohos.cooperate/cooperate#prepareCooperate

**System capability:** SystemCapability.MultimodalInput.Input.Cooperator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 键鼠穿越使能状态。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当开启键鼠穿越成功，err为undefined，否则为错误对象。 |

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
          try {
           inputDeviceCooperate.enable(true, (error: BusinessError) => {
              if (error) {
                console.error(`Failed to enable keyboard mouse crossing, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in enabling keyboard mouse crossing.`);
            });
          } catch (error) {
            console.error(`Failed to enable keyboard mouse crossing, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## enable

```TypeScript
function enable(enable: boolean): Promise<void>
```

开启、关闭键鼠穿越，使用Promise异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.prepareCooperate](../../apis-distributed-service-kit/arkts-apis/arkts-cooperate-preparecooperate-f-sys.md#prepareCooperate-2)、 > [cooperate.unprepareCooperate](../../apis-distributed-service-kit/arkts-apis/arkts-cooperate-unpreparecooperate-f-sys.md#unprepareCooperate-2)替代。

**Since:** 9

**Deprecated since:** 23

**Substitute:** ohos.cooperate/cooperate#prepareCooperate

**System capability:** SystemCapability.MultimodalInput.Input.Cooperator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 键鼠穿越使能状态。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

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
          inputDeviceCooperate.enable(true).then(() => {
            console.info(`Succeeded in enabling keyboard mouse crossing.`);
          }).catch((error: BusinessError) => {
            console.error(`Failed to enable keyboard mouse crossing, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          });
        })
    }
  }
}

```

