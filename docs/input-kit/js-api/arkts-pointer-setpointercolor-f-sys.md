# setPointerColor

## setPointerColor

```TypeScript
function setPointerColor(color: int, callback: AsyncCallback<void>): void
```

设置鼠标光标颜色，使用callback异步回调。 > **说明**： > > 设置和调试时，需连接外部设备，如鼠标、蓝牙等。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | int | Yes | 鼠标光标颜色，默认为黑色：0x000000。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置成功，err为undefined，否则为错误对象。 |

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
            // Set the mouse pointer color.
            pointer.setPointerColor(0xF6C800, (error: BusinessError) => {
              if (error) {
                console.error(`Failed to set pointer color, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in setting pointer color.`);
            });
          } catch (error) {
            console.error(`Failed to set pointer color, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## setPointerColor

```TypeScript
function setPointerColor(color: int): Promise<void>
```

设置鼠标光标颜色，使用Promise异步回调。 > **说明**： > > 设置和调试时，需连接外部设备，如鼠标、蓝牙等。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | int | Yes | 鼠标光标颜色，默认为黑色：0x000000。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

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
            // Set the mouse pointer color.
            pointer.setPointerColor(0xF6C800).then(() => {
              console.info(`Succeeded in setting pointer color.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to set pointer color, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to set pointer color, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

