# queryContactSyncInfo

## Modules to Import

```TypeScript
import { contact } from '@ohos.contact';
```

## queryContactSyncInfo

```TypeScript
function queryContactSyncInfo(context: Context): Promise<Array<ContactSyncInfo>>
```

Queries information about ongoing contact synchronization for the calling application. If the returned contact synchronization information is empty, the invoking party does not synchronize contacts or the contact synchronization is complete.

**Since:** 26.0.0

**Required permissions:** ohos.permission.READ_CONTACTS

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the context of the application or capability. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ContactSyncInfo&gt;&gt; | Returns the array of contacts synchronization information for thecalling application. Returns null if no contacts are being synchronized. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [16700001](../errorcode-contacts.md#16700001-system-internal-error) | General error. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// Obtain the context within the component.
const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
const syncInfoList: ContactSyncInfo[] = await contact.queryContactSyncInfo(context) as ContactSyncInfo[];
console.info('queryContactSyncInfo syncInfoList '  + JSON.stringify(syncInfoList));

```

