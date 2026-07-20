# getState (System API)

## Modules to Import

```TypeScript
import { inputDeviceCooperate } from '@kit.InputKit';
```

## getState

```TypeScript
function getState(deviceDescriptor: string, callback: AsyncCallback<{ state: boolean }>): void
```

Obtains the state of the screen hopping switch. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 23

**Substitutes:** getCooperateSwitchState

<!--Device-inputDeviceCooperate-function getState(deviceDescriptor: string, callback: AsyncCallback<{ state: boolean }>): void--><!--Device-inputDeviceCooperate-function getState(deviceDescriptor: string, callback: AsyncCallback<{ state: boolean }>): void-End-->

**System capability:** SystemCapability.MultimodalInput.Input.Cooperator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceDescriptor | string | Yes | Descriptor of the target device for screen hopping. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<{ state: boolean }> | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api.<br>**Applicable version:** 12 and later |

**Example**

```TypeScript
import { inputDeviceCooperate } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          let deviceDescriptor = "descriptor";
          try {
            inputDeviceCooperate.getState(deviceDescriptor, (error: BusinessError, data: object) => {
              if (error) {
                console.error(`Failed to get status, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in getting status, data: ${JSON.stringify(data)}.`);
            });
          } catch (error) {
            console.error(`Failed to get status, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```


## getState

```TypeScript
function getState(deviceDescriptor: string): Promise<{ state: boolean }>
```

Checks whether screen hopping is enabled. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 23

**Substitutes:** getCooperateSwitchState

<!--Device-inputDeviceCooperate-function getState(deviceDescriptor: string): Promise<{ state: boolean }>--><!--Device-inputDeviceCooperate-function getState(deviceDescriptor: string): Promise<{ state: boolean }>-End-->

**System capability:** SystemCapability.MultimodalInput.Input.Cooperator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceDescriptor | string | Yes | Descriptor of the target device for screen hopping. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<{ state: boolean }> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api.<br>**Applicable version:** 12 and later |

**Example**

```TypeScript
import { inputDeviceCooperate } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          let deviceDescriptor = "descriptor";
          inputDeviceCooperate.getState(deviceDescriptor).then((data: object) => {
            console.info(`Succeeded in getting the status, data: ${JSON.stringify(data)}.`);
          }).catch((error: BusinessError) => {
            console.error(`Failed to get the status, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          });
        })
    }
  }
}

```

