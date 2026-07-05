# getPointerColorSync

## getPointerColorSync

```TypeScript
function getPointerColorSync(): int
```

获取鼠标光标颜色，使用同步方式返回结果。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| int | 鼠标光标颜色。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | SystemAPI permission error. |

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
            let pointerColor = pointer.getPointerColorSync();
            console.info(`Succeeded in getting pointer color sync, pointerColor: ${JSON.stringify(pointerColor)}.`);
          } catch (error) {
            console.error(`Failed to get pointer color sync, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

