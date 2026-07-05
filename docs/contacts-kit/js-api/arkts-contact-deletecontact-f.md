# deleteContact

## deleteContact

```TypeScript
function deleteContact(key: string, callback: AsyncCallback<void>): void
```

删除联系人。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.deleteContact(context:

**Required permissions:** 

 ohos.permission.WRITE_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 联系人的唯一查询键key，一个联系人对应一个key，可以通过[queryKey]contact.queryKey(context: Context, id: number, callback: AsyncCallback): void获取。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。成功返回删除的联系人id；失败返回具体的错误码信息。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Select a contact via selectContacts.
contact.selectContacts().then((data) => {
  // Obtain the context within the component.
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  // Pass the key of the selected contact as the first parameter.
  contact.deleteContact(data[0].key, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to delete Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in deleting Contact.');
  });
});

```

## deleteContact

```TypeScript
function deleteContact(context: Context, key: string, callback: AsyncCallback<void>): void
```

删除联系人。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.WRITE_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| key | string | Yes | 联系人的唯一查询键key，一个联系人对应一个key，可以通过[queryKey]contact.queryKey(context: Context, id: number, callback: AsyncCallback): void获取。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。成功返回删除的联系人id；失败返回具体的错误码信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

```TypeScript
  import { BusinessError } from '@kit.BasicServicesKit';
  import { contact } from '@kit.ContactsKit';
  import { common } from '@kit.AbilityKit';

 // Select a contact via selectContacts.
  contact.selectContacts().then((data) => {
    // Obtain the context within the component.
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    // Pass the key of the selected contact as the second parameter.
    contact.deleteContact(context, data[0].key, (err: BusinessError) => {
      if (err) {
        console.error(`Failed to delete Contact. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('Succeeded in deleting Contact.');
    });
  });

```

## deleteContact

```TypeScript
function deleteContact(key: string): Promise<void>
```

删除联系人。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.deleteContact(context:

**Required permissions:** 

 ohos.permission.WRITE_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 联系人的唯一查询键key，一个联系人对应一个key，可以通过[queryKey]contact.queryKey(context: Context, id: number, callback: AsyncCallback): void获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

// Select a contact via selectContacts.
contact.selectContacts().then((data) => {
  // Pass the key of the selected contact as the first parameter.
  let promise = contact.deleteContact(data[0].key);
  promise.then(() => {
    console.info(`Succeeded in deleting Contact.`);
  });
});

```

## deleteContact

```TypeScript
function deleteContact(context: Context, key: string): Promise<void>
```

删除联系人。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.WRITE_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| key | string | Yes | 联系人的唯一查询键key，一个联系人对应一个key，可以通过[queryKey]contact.queryKey(context: Context, id: number, callback: AsyncCallback): void获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// Select a contact via selectContacts.
contact.selectContacts().then((data) => {
  // Obtain the context within the component.
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  // Pass the key of the selected contact as the second parameter.
  let promise = contact.deleteContact(context, data[0].key);
  promise.then(() => {
    console.info(`Succeeded in deleting Contact.`);
  });
});

```

