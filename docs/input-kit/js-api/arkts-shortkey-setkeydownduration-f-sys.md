# setKeyDownDuration

## setKeyDownDuration

```TypeScript
function setKeyDownDuration(businessKey: string, delay: int, callback: AsyncCallback<void>): void
```

设置快捷键拉起Ability的延迟时间，使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.ShortKey

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| businessKey | string | Yes | 业务在多模侧注册的唯一标识，与ability_launch_config.json中的businessId对应。调用接口前自行查询。 |
| delay | int | Yes | 按下快捷键多长时间后拉起Ability，单位：ms，仅支持快捷键按下触发。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置快捷键拉起Ability的延迟时间成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { shortKey } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Set the delayed launch time to 500 ms
            shortKey.setKeyDownDuration("businessId", 500, (error: BusinessError) => {
              if (error) {
                console.error(`Failed to set key down duration, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in setting key down duration.`);
            });
          } catch (error) {
            console.error(`Failed to set key down duration, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## setKeyDownDuration

```TypeScript
function setKeyDownDuration(businessKey: string, delay: int): Promise<void>
```

设置快捷键拉起Ability的延迟时间，使用Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.ShortKey

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| businessKey | string | Yes | 业务在多模侧注册的唯一标识，与ability_launch_config.json中的businessId对应。调用接口前自行查询。 |
| delay | int | Yes | 按下快捷键多长时间后拉起Ability，单位：ms，仅支持快捷键按下触发。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns the result through a promise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { shortKey } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Set the delayed launch time to 500 ms
            shortKey.setKeyDownDuration("businessId", 500).then(() => {
              console.info(`Succeeded in setting key down duration.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to set key down, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to set key down duration, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

