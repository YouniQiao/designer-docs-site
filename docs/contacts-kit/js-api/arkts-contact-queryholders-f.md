# queryHolders

## queryHolders

```TypeScript
function queryHolders(callback: AsyncCallback<Array<Holder>>): void
```

查询所有创建联系人的应用信息类。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryHolders(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Holder>> | Yes | 回调函数。成功返回查询到的创建联系人应用信息的对象数组；失败返回具体的错误码信息。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryHolders((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Holders. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
});

```

## queryHolders

```TypeScript
function queryHolders(context: Context, callback: AsyncCallback<Array<Holder>>): void
```

查询所有创建联系人的应用信息类。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| callback | AsyncCallback&lt;Array&lt;Holder>> | Yes | 回调函数。成功返回查询到的创建联系人应用信息的对象数组；失败返回具体的错误码信息。 |

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

// Obtain the context within the component.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryHolders(context, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Holders. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
});

```

## queryHolders

```TypeScript
function queryHolders(): Promise<Array<Holder>>
```

查询所有创建联系人的应用信息类。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryHolders(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Holder>> | Promise对象。返回查询到的创建联系人应用信息的对象数组。 |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

let promise = contact.queryHolders();
promise.then((data) => {
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
});

```

## queryHolders

```TypeScript
function queryHolders(context: Context): Promise<Array<Holder>>
```

查询所有创建联系人的应用信息类。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Holder>> | Promise对象。返回查询到的创建联系人应用信息的对象数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// Obtain the context within the component.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryHolders(context);
promise.then((data) => {
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
});

```

