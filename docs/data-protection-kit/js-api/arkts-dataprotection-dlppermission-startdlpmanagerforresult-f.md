# startDLPManagerForResult

## startDLPManagerForResult

```TypeScript
function startDLPManagerForResult(context: common.UIAbilityContext, want: Want): Promise<DLPManagerResult>
```

Starts the DLP manager application on the current  
[UIAbility]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ page in borderless mode. This API uses a promise to return the result.

This API starts the DLP manager application to configure file permissions and return the user operation result to the caller.
    **NOTE**  
    
    This API can be called only by domain accounts.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn only, since version 11.

**Model restriction:** This API can be used only in the stage model.

<!--Device-dlpPermission-function startDLPManagerForResult(context: common.UIAbilityContext, want: Want): Promise<DLPManagerResult>--><!--Device-dlpPermission-function startDLPManagerForResult(context: common.UIAbilityContext, want: Want): Promise<DLPManagerResult>-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | common.UIAbilityContext | Yes | [UIAbility]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ context. |
| want | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Request object, which must contain the **uri** and **displayName** fields. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DLPManagerResult&gt; | Promise used to return the **DLPManagerResult** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |
| [19100016](../errorcode-dlp.md#19100016-uri-missing-in-want) | The uri field is missing in the want parameter. |
| [19100017](../errorcode-dlp.md#19100017-displayname-missing-in-parameters-of-want) | The displayName field is missing in the want parameter. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { common, Want } from '@kit.AbilityKit';
import { UIContext } from '@kit.ArkUI';

try {
  let context = new UIContext().getHostContext() as common.UIAbilityContext; // Obtain the current UIAbilityContext.
  let want: Want = {
    "uri": "file://docs/storage/Users/currentUser/Desktop/1.txt",
    "parameters": {
      "displayName": "1.txt"
    }
  }; // Request parameters.
  dlpPermission.startDLPManagerForResult(context, want).then((res) => {
    console.info('res.resultCode', res.resultCode);
    console.info('res.want', JSON.stringify(res.want));
  }); // Start the DLP manager application.
} catch (err) {
  console.error('error', err.code, err.message); // Throw an error if the operation fails.
}
```

