# startDLPManagerForResult

## startDLPManagerForResult

```TypeScript
function startDLPManagerForResult(context: common.UIAbilityContext, want: Want): Promise<DLPManagerResult>
```

在当前[UIAbility](../../apis-ability-kit/arkts-apis/arkts-uiability-c.md#UIAbility)界面以无边框形式打开DLP权限管理应用。使用Promise异步回调。 该接口用于拉起DLP权限管理应用配置文件权限，并将用户操作结果返回给调用方。 > **说明：** > > 该接口仅支持域账号调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Security.DataLossPrevention

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | common.UIAbilityContext | 是 | 当前窗口  [UIAbility](../../apis-ability-kit/arkts-apis/arkts-uiability-c.md#UIAbility) 上下文。 |
| want | Want | 是 | 请求对象，必须包含uri和displayName字段。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DLPManagerResult> | Promise对象。打开DLP权限管理应用并退出后的结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |
| 19100016 | The uri field is missing in the want parameter. |
| 19100017 | The displayName field is missing in the want parameter. |

**示例：**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { common, Want } from '@kit.AbilityKit';
import { UIContext } from '@kit.ArkUI';

let context = new UIContext().getHostContext() as common.UIAbilityContext; // 获取当前UIAbilityContext。
if (context !== undefined) {
    let want: Want = {
        "uri": "file://docs/storage/Users/currentUser/Desktop/1.txt",
        "parameters": {
        "displayName": "1.txt"
        }
    }; // 构造请求参数，必须包含文件uri和displayName。
    dlpPermission.startDLPManagerForResult(context, want).then((res) => {
        console.info('res.resultCode', res.resultCode);
        console.info('res.want', JSON.stringify(res.want));
    }); // 打开DLP权限管理应用。
}

```

