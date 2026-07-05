# startDLPManagerForResult

## startDLPManagerForResult

```TypeScript
function startDLPManagerForResult(context: common.UIAbilityContext, want: Want): Promise<DLPManagerResult>
```

在当前[UIAbility](../../apis-ability-kit/arkts-apis/arkts-uiability-c.md#UIAbility)界面以无边框形式打开DLP权限管理应用。使用Promise异步回调。 该接口用于拉起DLP权限管理应用配置文件权限，并将用户操作结果返回给调用方。 > **说明：** > > 该接口仅支持域账号调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | common.UIAbilityContext | Yes | 当前窗口  [UIAbility](../../apis-ability-kit/arkts-apis/arkts-uiability-c.md#UIAbility) 上下文。 |
| want | Want | Yes | 请求对象，必须包含uri和displayName字段。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DLPManagerResult> | Promise对象。打开DLP权限管理应用并退出后的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |
| 19100016 | The uri field is missing in the want parameter. |
| 19100017 | The displayName field is missing in the want parameter. |

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

