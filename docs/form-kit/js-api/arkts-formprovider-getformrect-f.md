# getFormRect

## getFormRect

```TypeScript
function getFormRect(formId: string): Promise<formInfo.Rect>
```

Obtains the position and dimension of a widget. This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Widget ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;formInfo.Rect> | Promise used to return the position and dimension of the widget relative to the  upper-left corner of the screen, in vp. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function getFormRect cannot work correctly  due to limited device capabilities. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |
| 16501001 | The ID of the form to be operated does not exist. |
| 16501003 | The form cannot be operated by the current application. |

**Example**

```TypeScript
import { formInfo, formProvider } from '@kit.FormKit';
import { BusinessError } from '@kit.BasicServicesKit';

let formId: string = '12400633174999288'; // formId of the widget. Use the actual form ID.

try {
  formProvider.getFormRect(formId).then((data: formInfo.Rect) => {
    console.info(`getFormRect succeed, data: ${JSON.stringify(data)}`);
  });
} catch (error) {
  console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message})`);
}

```

