# setFunctionKeyEnabled

## setFunctionKeyEnabled

```TypeScript
function setFunctionKeyEnabled(functionKey: FunctionKey, enabled: boolean): Promise<void>
```

Specifies whether to enable a function key (for example, **CapsLock**). This API uses a promise to return the result.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn since version 15; ArkTS-Sta since version 23.

**Required permissions:** ohos.permission.INPUT_KEYBOARD_CONTROLLER

<!--Device-inputDevice-function setFunctionKeyEnabled(functionKey: FunctionKey, enabled: boolean): Promise<void>--><!--Device-inputDevice-function setFunctionKeyEnabled(functionKey: FunctionKey, enabled: boolean): Promise<void>-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| functionKey | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Type of the function key. |
| enabled | boolean | Yes | Status of the function key. The value **true** indicates that the function key is enabled, and the value **false** indicates the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_2. Incorrect parameter types; 3. Parameter verification failed. |
| [3900002](../errorcode-inputdevice.md#3900002-keyboard-not-connected) | There is currently no keyboard device connected. |
| [3900003](../errorcode-inputdevice.md#3900003-api-call-failed-for-a-noninput-application) | It is prohibited for non-input applications. |

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
            inputDevice.setFunctionKeyEnabled(inputDevice.FunctionKey.CAPS_LOCK, true).then(() => {
              console.info(`Set capslock state success`);
            }).catch((error: BusinessError) => {
              console.error(`Set capslock state failed, error=${JSON.stringify(error)}`);
            });
          } catch (error) {
            console.error(`Set capslock enable error`);
          }
        })
    }
  }
}
```

