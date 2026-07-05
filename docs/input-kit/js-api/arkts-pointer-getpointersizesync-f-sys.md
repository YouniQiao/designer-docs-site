# getPointerSizeSync

## getPointerSizeSync

```TypeScript
function getPointerSizeSync(): int
```

获取鼠标光标大小，使用同步方式返回结果。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| int | 鼠标光标大小，范围为[1-7]。 |

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
            let pointerSize = pointer.getPointerSizeSync();
            console.info(`Succeeded in getting pointer size sync, pointerSize: ${JSON.stringify(pointerSize)}.`);
          } catch (error) {
            console.error(`Failed to get pointer size sync, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

