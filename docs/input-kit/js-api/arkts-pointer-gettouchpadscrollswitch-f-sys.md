# getTouchpadScrollSwitch

## getTouchpadScrollSwitch

```TypeScript
function getTouchpadScrollSwitch(callback: AsyncCallback<boolean>): void
```

获取触控板滚轴能力开启状态，使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。当获取触控板滚轴能力开启状态成功，err为undefined，state是true代表开启，false代表关闭，默认开启；否则为错  误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { pointer } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Obtain the touchpad scroll switch state.
            pointer.getTouchpadScrollSwitch((error: BusinessError, state: boolean) => {
              if (error) {
                console.error(`Failed to get touchpad scroll switch, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
              } else {
                console.info(`Succeeded in getting touchpad scroll switch, state: ${JSON.stringify(state)}.`);
              }
            });
          } catch (error) {
            console.error(`Failed to get touchpad scroll switch, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## getTouchpadScrollSwitch

```TypeScript
function getTouchpadScrollSwitch(): Promise<boolean>
```

获取触控板滚轴能力开启状态，使用Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示触控板滚轴能力开启；返回false表示触控板滚轴能力关闭。默认为开启。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { pointer } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Obtain the touchpad scroll switch state.
            pointer.getTouchpadScrollSwitch().then((state) => {
              console.info(`Succeeded in getting touchpad scroll switch, state: ${JSON.stringify(state)}.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to get touchpad scroll switch, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to get touchpad scroll switch, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

