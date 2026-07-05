# importContactsViaUI

## importContactsViaUI

```TypeScript
function importContactsViaUI(context: Context, contacts: Array<Contact>): Promise<Array<int>>
```

通过UI交互批量导入多个联系人。 每次最多可导入100个联系人。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.Contacts

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| contacts | Array&lt;Contact> | Yes | 表示待导入数据库的联系人信息数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;int>> | 返回联系人创建结果的数组。返回的联系人id有效（可通过[getId]Contact#getId()获取）表示创建成功。  返回值为-1[INVALID_CONTACT_ID](arkts-contact-contact-c.md#INVALID_CONTACT_ID) 表示创建失败。-2表示用户未选择该联系人。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | The specified SystemCapability name was not found. |
| 16700001 | General error. |
| 16700002 | Invalid parameter value. |
| 16700004 | The number of contacts exceeds the limit. |
| 16700103 | User cancel. |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// Obtain the context within the component.
const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let contactList: contact.Contact[] = [];
let contactInfo: contact.Contact = {
  name: {
    fullName: 'xxx'
  },
  phoneNumbers: [{
    phoneNumber: '138xxxxxx'
  }]
}
contactList.push(contactInfo);
let promise = contact.importContactsViaUI(context, contactList);
promise.then((data) => {
  console.info(`Succeeded in importing Contact via UI: data -> ${JSON.stringify(data)}`);
});

```

