# getFormIdsByFormLocation

## getFormIdsByFormLocation

```TypeScript
function getFormIdsByFormLocation(location: formInfo.FormLocation): Promise<Array<string>>
```

Obtains the list of widget IDs at a specified location on the device. This API uses a promise to return the result.

**Since:** 24

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| location | formInfo.FormLocation | Yes | Widget location. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise used to return the obtained widget ID list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 16500050 | IPC connection error. |
| 16501016 | The location of the widget is invalid. |

**Example**

```TypeScript
import { formHost, formInfo } from '@kit.FormKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  formHost.getFormIdsByFormLocation(formInfo.FormLocation.DESKTOP).then((formIds: Array<string>) => {
    console.info('formHost getFormIdsByFormLocation success.');
  }).catch((error: BusinessError) => {
    console.error(`error, code: ${error.code}, message: ${error.message}`);
  });
} catch (error) {
  console.error(`catch error, code: ${error.code}, message: ${error.message}`);
}

```

