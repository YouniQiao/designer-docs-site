# addContacts

## addContacts

```TypeScript
function addContacts(context: Context, contacts: Array<Contact>): Promise<Array<int>>
```

批量添加联系人。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.WRITE_CONTACTS

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| contacts | Array&lt;Contact> | Yes | 联系人信息数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;int>> | Promise对象，返回批量添加的联系人id数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 16700001 | General error. |
| 16700002 | Invalid parameter value. |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

const contactInfo1: contact.Contact = {
  name: { fullName: 'xxx1'},
  phoneNumbers: [{ phoneNumber: '138xxxxxx' }]
};
const contactInfo2: contact.Contact = {
  name: { fullName: 'xxx2'},
  phoneNumbers: [{ phoneNumber: '139xxxxxx' }]
};
// Obtain the context within the component.
const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.addContacts(context, [contactInfo1, contactInfo2]).then((data) => {
  console.info(`Succeeded in addContacts.data->${JSON.stringify(data)}`);
});

```

