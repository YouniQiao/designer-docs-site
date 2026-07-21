# destroyVirtualScreen

## Modules to Import

```TypeScript
import { display } from '@kit.ArkUI';
```

<a id="destroyvirtualscreen"></a>
## destroyVirtualScreen

```TypeScript
function destroyVirtualScreen(screenId: number): Promise<void>
```

Destroys a virtual screen. This API uses a promise to return the result.

**Since:** 16

**Required permissions:** ohos.permission.ACCESS_VIRTUAL_SCREEN

<!--Device-display-function destroyVirtualScreen(screenId: long): Promise<void>--><!--Device-display-function destroyVirtualScreen(screenId: long): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| screenId | number | Yes | Screen ID, which must match the ID of the virtual screen created by calling the [createVirtualScreen()](arkts-arkui-display-createvirtualscreen-f.md#createvirtualscreen-1) API. This parameter only accepts integer values. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function destroyVirtualScreen can not work correctly due to limited device capabilities. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |
| [1400003](../errorcode-display.md#1400003-abnormal-display-manager-service) | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let screenId: number = 1;
// Destroy the virtual screen.
display.destroyVirtualScreen(screenId).then(() => {
  console.info('Succeeded in destroying the virtual screen.');
}).catch((err: BusinessError) => {
  console.error(`Failed to destroy the virtual screen. Code: ${err.code}, message: ${err.message}`);
});

```

