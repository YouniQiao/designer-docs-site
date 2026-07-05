# saveToExistingContactViaUI

## saveToExistingContactViaUI

```TypeScript
function saveToExistingContactViaUI(context: Context, contact: Contact): Promise<number>
```

调用保存至已有联系人接口，选择联系人UI界面并完成编辑。使用Promise异步回调。

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.Contacts

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| contact | Contact | Yes | 联系人信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象。返回添加的联系人id。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |
| 801 | The specified SystemCapability name was not found. |
| 16700001 | General error. |
| 16700101 | Failed to get value from contacts data. |
| 16700102 | Failed to set value to contacts data. |
| 16700103 | User cancel. |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// Obtain the context within the component.
let contactInfo: contact.Contact = {
  id: 1,
  name: {
    fullName: 'xxx'
  },
  phoneNumbers: [{
    phoneNumber: '138xxxxxx'
  }]
}
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.saveToExistingContactViaUI(context, contactInfo);
promise.then((data) => {
    console.info(`Succeeded in save to existing Contact via UI.data->${JSON.stringify(data)}`);
  });

```

