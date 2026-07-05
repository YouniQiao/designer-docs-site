# addContact

## addContact

```TypeScript
function addContact(contact: Contact, callback: AsyncCallback<number>): void
```

添加联系人。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.addContact(context:

**Required permissions:** 

 ohos.permission.WRITE_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| contact | Contact | Yes | 联系人信息。 |
| callback | AsyncCallback&lt;number> | Yes | 回调函数。成功返回添加的联系人id；失败返回具体的错误码信息。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// Obtain the context within the component.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.addContact(context, {
  name: {
    fullName: 'xxx'
  },
  phoneNumbers: [{
    phoneNumber: '138xxxxxxxx'
  }]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to add Contact. Code:${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
});

```

## addContact

```TypeScript
function addContact(context: Context, contact: Contact, callback: AsyncCallback<number>): void
```

添加联系人。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.WRITE_CONTACTS

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| contact | Contact | Yes | 联系人信息。 |
| callback | AsyncCallback&lt;number> | Yes | 回调函数。成功返回添加的联系人id；失败返回具体的错误码信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

```TypeScript
  import { BusinessError } from '@kit.BasicServicesKit';
  import { common } from '@kit.AbilityKit';
  import { contact } from '@kit.ContactsKit';

  // Obtain the context within the component.
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.addContact(context, {
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to add Contact. Code:${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
  });

```

## addContact

```TypeScript
function addContact(contact: Contact): Promise<number>
```

添加联系人。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.addContact(context:

**Required permissions:** 

 ohos.permission.WRITE_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| contact | Contact | Yes | 联系人信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，返回添加的联系人id。 |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

// Promise used to return the added data.
let promise = contact.addContact({
  name: {
    fullName: 'xxx'
  },
  phoneNumbers: [{
    phoneNumber: '138xxxxxxxx'
  }]
});
// Promise used to return resolve if the execution is successful.
promise.then((data) => {
  console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
});

```

## addContact

```TypeScript
function addContact(context: Context, contact: Contact): Promise<number>
```

添加联系人。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.WRITE_CONTACTS

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| contact | Contact | Yes | 联系人信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，返回添加的联系人id。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

```TypeScript
  import { contact } from '@kit.ContactsKit';
  import { common } from '@kit.AbilityKit';

  // Obtain the context within the component.
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  let promise = contact.addContact(context, {
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  });
  promise.then((data) => {
    console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
  });

```

