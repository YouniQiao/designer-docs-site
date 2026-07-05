# selectContact

## selectContact

```TypeScript
function selectContact(callback: AsyncCallback<Array<Contact>>): void
```

调用选择联系人接口，打开选择联系人UI界面。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.selectContacts(callback:

**System capability:** SystemCapability.Applications.Contacts

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Contact>> | Yes | 回调函数。成功返回选择的联系人对象数组；失败返回具体的错误码信息。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Open the UI to select a contact.
contact.selectContact((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to select Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in selecting Contact. data->${JSON.stringify(data)}`);
});

```

## selectContact

```TypeScript
function selectContact(): Promise<Array<Contact>>
```

调用选择联系人接口，打开选择联系人UI界面。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.selectContacts()

**System capability:** SystemCapability.Applications.Contacts

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Contact>> | Promise对象。返回选择的联系人数组对象。 |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

// Open the UI to select a contact.
let promise = contact.selectContact();
promise.then((data) => {
  console.info(`Succeeded in selecting Contact. data->${JSON.stringify(data)}`);
});

```

