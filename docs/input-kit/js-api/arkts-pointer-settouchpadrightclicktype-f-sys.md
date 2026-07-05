# setTouchpadRightClickType

## setTouchpadRightClickType

```TypeScript
function setTouchpadRightClickType(type: RightClickType, callback: AsyncCallback<void>): void
```

设置触控板右键菜单类型，使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | RightClickType | Yes | type代表触控板右键菜单类型。 - TOUCHPAD_RIGHT_BUTTON：按压触控板右键区域。 - TOUCHPAD_LEFT_BUTTON：按  压触控板左键区域。 - TOUCHPAD_TWO_FINGER_TAP：双指轻击或双指按压触控板。 - TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON20+  ：双指轻击或双指按压触控板、或按压触控板右键区域。 - TOUCHPAD_TWO_FINGER_TAP_OR_LEFT_BUTTON20+：双指轻击或双指按压触控板、或按压触控板左键区域。  默认值为TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置触控板右键菜单类型成功，err为undefined，否则为错误对象。 |

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
            // Set the touchpad right-click menu type.
            pointer.setTouchpadRightClickType(pointer.RightClickType.TOUCHPAD_RIGHT_BUTTON , (error: BusinessError) => {
              if (error) {
                console.error(`Failed to set touchpad right click type, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in setting touchpad right click type.`);
            });
          } catch (error) {
            console.error(`Failed to set touchpad right click type, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## setTouchpadRightClickType

```TypeScript
function setTouchpadRightClickType(type: RightClickType): Promise<void>
```

设置触控板右键菜单类型，使用Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | RightClickType | Yes | type代表触控板右键菜单类型。 - TOUCHPAD_RIGHT_BUTTON：按压触控板右键区域。 - TOUCHPAD_LEFT_BUTTON：按  压触控板左键区域。 - TOUCHPAD_TWO_FINGER_TAP：双指轻击或双指按压触控板。 - TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON20+  ：双指轻击或双指按压触控板、或按压触控板右键区域。 - TOUCHPAD_TWO_FINGER_TAP_OR_LEFT_BUTTON20+：双指轻击或双指按压触控板、或按压触控板左键区域。  默认值为TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON。 |

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
            // Set the touchpad right-click menu type.
            pointer.setTouchpadRightClickType(pointer.RightClickType.TOUCHPAD_RIGHT_BUTTON).then(() => {
              console.info(`Succeeded in setting touchpad right click type.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to set touchpad right click type, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to set touchpad right click type, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

