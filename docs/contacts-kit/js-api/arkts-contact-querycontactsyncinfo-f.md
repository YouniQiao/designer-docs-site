# queryContactSyncInfo

## queryContactSyncInfo

```TypeScript
function queryContactSyncInfo(context: Context): Promise<Array<ContactSyncInfo>>
```

查询调用应用程序正在进行的联系人同步信息。 如果返回的联系人同步信息为空，则调用方不进行联系人同步或联系人同步已完成。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ContactSyncInfo>> | 返回调用应用程序的联系人同步信息数组。如果没有正在同步的联系人，则返回null。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 16700001 | General error. |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// Obtain the context within the component.
const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
const syncInfoList: ContactSyncInfo[] = await contact.queryContactSyncInfo(context) as ContactSyncInfo[];
console.info('queryContactSyncInfo syncInfoList '  + JSON.stringify(syncInfoList));

```

