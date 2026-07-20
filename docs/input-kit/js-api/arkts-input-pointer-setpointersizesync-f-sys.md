# setPointerSizeSync (System API)

## Modules to Import

```TypeScript
import { pointer } from '@kit.InputKit';
```

## setPointerSizeSync

```TypeScript
function setPointerSizeSync(size: number): void
```

Sets the pointer size. This API returns the result synchronously.

**Since:** 10

<!--Device-pointer-function setPointerSizeSync(size: int): void--><!--Device-pointer-function setPointerSizeSync(size: int): void-End-->

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Pointer size. The value ranges from **1** to **7**. The default value is **1**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | SystemAPI permission error. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

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
            // Set the mouse pointer size synchronously.
            pointer.setPointerSizeSync(5);
            console.info(`Succeeded in setting pointer size sync.`);
          } catch (error) {
            console.error(`Failed to set pointer size sync, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

