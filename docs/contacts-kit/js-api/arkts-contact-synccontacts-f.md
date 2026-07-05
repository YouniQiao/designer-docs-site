# syncContacts

## syncContacts

```TypeScript
function syncContacts(context: Context, mode: ContactSyncMode, progress: ContactSyncProgress, contacts: Array<Contact>): Promise<Array<int>>
```

批量同步多个联系人至联系人数据库。 最多可批量同步400个联系人。调用方必须处于前台。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.WRITE_CONTACTS

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| mode | ContactSyncMode | Yes | 表示联系人同步模式的类型。 |
| progress | ContactSyncProgress | Yes | 表示联系人同步进度的相关信息。 |
| contacts | Array&lt;Contact> | Yes | 表示需要同步至数据库的联系人信息数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;int>> | 返回联系人创建结果的数组。有效的联系人ID (可为通过 {@link Contact#getId()})  获得的值表示创建成功。  {@link Contact#INVALID_CONTACT_ID} 表示创建失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 16700001 | General error. |
| 16700002 | Invalid parameter value. |
| 16700003 | Background usage is prohibited. |
| 16700004 | The number of contacts exceeds the limit. |
| 16700103 | User cancel. |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// Obtain the context within the component.
const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let mode = contact.ContactSyncMode.MODE_INCREMENTAL;
const totalBatches: number = 3;
const syncId: number = Date.now() / 1000;
const totalCount = 300;
const batchSize = 100;
for (let batch: number = 1; batch <= totalBatches; batch++) {
  try {
    const remaining: number = totalCount - (batch - 1) * batchSize;
    const currentBatchSize: number = Math.min(batchSize, remaining);
    const contacts: contact.Contact[] = [];
    for (let i: number = 0; i < currentBatchSize; i++) {
      const contactData: contact.Contact = {
        name: {
          fullName: `Synchronizing contacts ${i + 1}_${batch} batch`
          },
        phoneNumbers: [{
          phoneNumber: `1380000${String(i + 1).padStart(4, '0')}`,
          labelName: 'Mobile Phone'
        }],
        emails: [{
          email: `contact${i + 1}@example.com`,
          labelName: 'Work'
          }]
        };
      contacts.push(contactData);
    }
    const progress: ContactSyncProgress = {
      syncId: syncId,
      currentBatch: batch,
      totalBatches: totalBatches
    };
    console.info(`Synchronizing batch ${batch}/${totalBatches}, number of contacts: ${currentBatchSize}`);
    let result = await contact.syncContacts(context, mode, progress, contacts);
    console.info(`Batch ${batch} synchronized successfully, result: `  + JSON.stringify(result));
  }
  catch (err) {
    const e = err as BusinessError;
    console.error(`syncContacts failed: code=${e.code}, message=${e.message}`);
  }
}

```

