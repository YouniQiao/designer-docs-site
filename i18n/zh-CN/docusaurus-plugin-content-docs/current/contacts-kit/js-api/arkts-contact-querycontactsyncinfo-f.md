# queryContactSyncInfo

## queryContactSyncInfo

```TypeScript
function queryContactSyncInfo(context: Context): Promise<Array<ContactSyncInfo>>
```

查询调用应用程序正在进行的联系人同步信息。 如果返回的联系人同步信息为空，则调用方不进行联系人同步或联系人同步已完成。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.READ_CONTACTS

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.ContactsData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;ContactSyncInfo>> | 返回调用应用程序的联系人同步信息数组。如果没有正在同步的联系人，则返回null。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 16700001 | General error. |

**示例：**

```TypeScript
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context
const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
const syncInfoList: ContactSyncInfo[] = await contact.queryContactSyncInfo(context) as ContactSyncInfo[];
console.info('queryContactSyncInfo syncInfoList '  + JSON.stringify(syncInfoList));

```

