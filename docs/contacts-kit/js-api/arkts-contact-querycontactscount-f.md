# queryContactsCount

## queryContactsCount

```TypeScript
function queryContactsCount(context: Context): Promise<int>
```

查询所有联系人的数量。使用Promise异步回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象。返回查询到的联系人数量。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 16700001 | General error. |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// Obtain the context within the component.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryContactsCount(context);
promise.then((data) => {
  console.info(`Succeeded in querying ContactsCount. data->${JSON.stringify(data)}`);
});

```

