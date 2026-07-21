# getPointerStyleSync

## Modules to Import

```TypeScript
import { pointer } from '@kit.InputKit';
```

<a id="getpointerstylesync"></a>
## getPointerStyleSync

```TypeScript
function getPointerStyleSync(windowId: number): PointerStyle
```

Queries the mouse pointer style type of a specified window, such as east arrow, west arrow, south arrow, and north arrow. This API can obtain only the mouse pointer style type of windows within the current application process.

**Since:** 10

<!--Device-pointer-function getPointerStyleSync(windowId: int): PointerStyle--><!--Device-pointer-function getPointerStyleSync(windowId: int): PointerStyle-End-->

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowId | number | Yes | Window ID. The value is an integer greater than or equal to **-1**. The value **-1** indicates the global window.<br>If the window ID is valid and the corresponding window exists, the mouse pointer style of the window is returned.<br>If the window ID is valid but the window does not exist, the global mouse pointer style is returned by default.<br>If the mouse pointer style is set for a non-existent window through [setPointerStyleSync](arkts-input-pointer-setpointerstylesync-f.md#setpointerstylesync-1), this API can obtain the mouse pointer style properly. |

**Return value:**

| Type | Description |
| --- | --- |
| [PointerStyle](../../apis-arkui/arkts-apis/arkts-arkui-pointerstyle-t.md) | Mouse pointer style. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
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
          let windowId = -1;
          try {
            let style: pointer.PointerStyle = pointer.getPointerStyleSync(windowId);
            console.info(`Succeeded in getting pointer style, style: ${JSON.stringify(style)}.`);
          } catch (error) {
            console.error(`Failed to get pointer style, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

