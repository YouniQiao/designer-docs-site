# getKeyboardRepeatRate (System API)

## Modules to Import

```TypeScript
import { inputDevice } from '@ohos.multimodalInput.inputDevice';
```

## getKeyboardRepeatRate

```TypeScript
function getKeyboardRepeatRate(callback: AsyncCallback<number>): void
```

Obtains the keyboard repeat rate. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**, and **data** is the keyboard repeat rate. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | SystemAPI permission error. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputDevice } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Obtain Key Repeat Rate
            inputDevice.getKeyboardRepeatRate((error: BusinessError, rate: number) => {
              if (error) {
                console.error(`Failed to get keyboard repeat rate, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in getting keyboard repeat rate.`);
            });
          } catch (error) {
            console.error(`Failed to get keyboard repeat rate, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```


## getKeyboardRepeatRate

```TypeScript
function getKeyboardRepeatRate(): Promise<number>
```

Obtains the keyboard repeat rate. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the keyboard repeat rate. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | SystemAPI permission error. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputDevice } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Obtaining the Keyboard Repeat Rate
            inputDevice.getKeyboardRepeatRate().then((rate: number) => {
              console.info(`Succeeded in getting keyboard repeat rate.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to get keyboard, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to get keyboard repeat rate, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

