# setMousePrimaryButton

## setMousePrimaryButton

```TypeScript
function setMousePrimaryButton(primary: PrimaryButton, callback: AsyncCallback<void>): void
```

设置鼠标主键，使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| primary | PrimaryButton | Yes | 鼠标主键类型。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置鼠标主键成功，err为undefined，否则为错误对象。 |

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
            // Set the primary mouse button.
            pointer.setMousePrimaryButton(pointer.PrimaryButton.RIGHT, (error: BusinessError) => {
              if (error) {
                console.error(`Failed to set mouse primary button, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in setting mouse primary button.`);
            });
          } catch (error) {
            console.error(`Failed to set mouse primary button, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## setMousePrimaryButton

```TypeScript
function setMousePrimaryButton(primary: PrimaryButton): Promise<void>
```

设置鼠标主键，使用Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| primary | PrimaryButton | Yes | 鼠标主键类型。 |

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
            // Set the primary mouse button.
            pointer.setMousePrimaryButton(pointer.PrimaryButton.RIGHT).then(() => {
              console.info(`Succeeded in setting mouse primary button.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to set mouse primary button, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to set mouse primary button, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

