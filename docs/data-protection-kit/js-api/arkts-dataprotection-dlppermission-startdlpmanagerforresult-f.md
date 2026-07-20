# startDLPManagerForResult

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## startDLPManagerForResult

```TypeScript
function startDLPManagerForResult(context: common.UIAbilityContext, want: Want): Promise<DLPManagerResult>
```

Starts the DLP manager application on the current [UIAbility](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-uiability-uiability-c.md) page in borderless mode. This API uses a promise to return the result.

This API starts the DLP manager application to configure file permissions and return the user operation result to the caller.

> **NOTE**  
>  
> This API can be called only by domain accounts.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-dlpPermission-function startDLPManagerForResult(context: common.UIAbilityContext, want: Want): Promise<DLPManagerResult>--><!--Device-dlpPermission-function startDLPManagerForResult(context: common.UIAbilityContext, want: Want): Promise<DLPManagerResult>-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | common.UIAbilityContext | Yes | [UIAbility](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-uiability-uiability-c.md) context. |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Request object, which must contain the **uri** and **displayName** fields. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<DLPManagerResult> | Promise used to return the **DLPManagerResult** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |
| [19100016](../errorcode-dlp.md#19100016-uri-missing-in-want) | The uri field is missing in the want parameter. |
| [19100017](../errorcode-dlp.md#19100017-displayname-missing-in-want) | The displayName field is missing in the want parameter. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { common, Want } from '@kit.AbilityKit';
import { UIContext } from '@kit.ArkUI';

let context = new UIContext().getHostContext() as common.UIAbilityContext; // Obtain the current UIAbilityContext.
if (context !== undefined) {
    let want: Want = {
        "uri": "file://docs/storage/Users/currentUser/Desktop/1.txt",
        "parameters": {
        "displayName": "1.txt"
        }
    }; // Construct request parameters, which must include uri and displayName.
    dlpPermission.startDLPManagerForResult(context, want).then((res) => {
        console.info('res.resultCode', res.resultCode);
        console.info('res.want', JSON.stringify(res.want));
    }); // Start the DLP manager application.
}

```

