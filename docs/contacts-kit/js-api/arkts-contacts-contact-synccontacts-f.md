# syncContacts

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

## syncContacts

```TypeScript
function syncContacts(context: Context, mode: ContactSyncMode, progress: ContactSyncProgress, contacts: Array<Contact>): Promise<Array<number>>
```

Sync multiple contacts in batches into contacts database.

A maximum of 400 contacts can be synchronized in batches. The invoking party must be in the foreground.

**Since:** 26.0.0

**Required permissions:** ohos.permission.WRITE_CONTACTS

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-contact-function syncContacts(context: Context, mode: ContactSyncMode, progress: ContactSyncProgress, contacts: Array<Contact>): Promise<Array<int>>--><!--Device-contact-function syncContacts(context: Context, mode: ContactSyncMode, progress: ContactSyncProgress, contacts: Array<Contact>): Promise<Array<int>>-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of the application or capability. |
| mode | [ContactSyncMode](arkts-contacts-contact-contactsyncmode-e.md) | Yes | Indicates the type of contact synchronization mode. |
| progress | [ContactSyncProgress](arkts-contacts-contact-contactsyncprogress-i.md) | Yes | Indicates the information about the contact synchronization progress. |
| contacts | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<Contact> | Yes | Indicates the array of contact information to be synchronized into the database. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<number>> | Returns the array of contacts creation results. Valid contact ID (which can be obtained by {@link Contact#getId()}) indicates that the creation was successful.{@link Contact#INVALID_CONTACT_ID} indicates the creation failed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [16700001](../errorcode-contacts.md#16700001-system-internal-error) | General error. |
| [16700002](../errorcode-contacts.md#16700002-parameter-check-failed) | Invalid parameter value. |
| 16700003 | Background usage is prohibited. |
| 16700004 | The number of contacts exceeds the limit. |
| [16700103](../errorcode-contacts.md#16700103-operation-canceled) | User cancel. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

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

