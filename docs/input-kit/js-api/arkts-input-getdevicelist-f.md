# getDeviceList

## Modules to Import

```TypeScript
import { inputDevice } from '@ohos.multimodalInput.inputDevice';
```

## getDeviceList

```TypeScript
function getDeviceList(callback: AsyncCallback<Array<number>>): void
```

Obtains the IDs of all input devices. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;number&gt;&gt; | Yes | Callback function. If the operation is successful, **err** is**undefined**, and **data** is the ID list of all input devices (the ID is the unique identifier of an inputdevice). Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
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
            // Obtaining the Input Device List
            inputDevice.getDeviceList((error: BusinessError, ids: Array<number>) => {
              if (error) {
                console.error(`Failed to get device id list, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in getting device id list: ${JSON.stringify(ids)}.`);
            });
          } catch (error) {
            console.error(`Failed to get device id list, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```


## getDeviceList

```TypeScript
function getDeviceList(): Promise<Array<number>>
```

Obtains the IDs of all input devices. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;number&gt;&gt; | Promise used to return the IDs of all input devices. The ID is the unique ID of aninput device. |

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
            // Obtaining the Input Device List
            inputDevice.getDeviceList().then((ids: Array<number>) => {
              console.info(`Succeeded in getting device id list: ${JSON.stringify(ids)}.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to get device id list, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            });
          } catch (error) {
            console.error(`Failed to get device id list, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

