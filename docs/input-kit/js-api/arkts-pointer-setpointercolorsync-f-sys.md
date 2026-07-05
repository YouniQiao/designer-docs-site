# setPointerColorSync

## setPointerColorSync

```TypeScript
function setPointerColorSync(color: int): void
```

设置鼠标光标颜色，使用同步方式进行设置。 > **说明**： > > 设置和调试时，需连接外部设备，如鼠标、蓝牙等。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | int | Yes | 鼠标光标颜色，默认为黑色：0x000000。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { pointer } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Set the mouse pointer color synchronously.
            pointer.setPointerColorSync(0xF6C800);
            console.info(`Succeeded in setting pointer color sync.`);
          } catch (error) {
            console.error(`Failed to set pointer color sync, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

