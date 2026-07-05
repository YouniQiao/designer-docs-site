# queryGroups

## queryGroups

```TypeScript
function queryGroups(callback: AsyncCallback<Array<Group>>): void
```

查询联系人的所有群组。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryGroups(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Group>> | Yes | 回调函数。成功返回查询到的群组对象数组；失败返回具体的错误码信息。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryGroups((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups.. data->${JSON.stringify(data)}`);
});

```

## queryGroups

```TypeScript
function queryGroups(context: Context, callback: AsyncCallback<Array<Group>>): void
```

查询联系人的所有群组。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| callback | AsyncCallback&lt;Array&lt;Group>> | Yes | 回调函数。成功返回查询到的群组对象数组；失败返回具体的错误码信息。 |

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
contact.queryGroups(context, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});

```

## queryGroups

```TypeScript
function queryGroups(holder: Holder, callback: AsyncCallback<Array<Group>>): void
```

根据holder查询联系人的所有群组。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryGroups(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| holder | Holder | Yes | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback&lt;Array&lt;Group>> | Yes | 回调函数。成功返回查询到的群组对象数组；失败返回具体的错误码信息。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryGroups({
  holderId: 1,
  bundleName: '',
  displayName: ''
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});

```

## queryGroups

```TypeScript
function queryGroups(context: Context, holder: Holder, callback: AsyncCallback<Array<Group>>): void
```

根据holder查询联系人的所有群组。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| holder | Holder | Yes | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback&lt;Array&lt;Group>> | Yes | 回调函数。成功返回查询到的群组对象数组；失败返回具体的错误码信息。 |

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
contact.queryGroups(context, {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});

```

## queryGroups

```TypeScript
function queryGroups(holder?: Holder): Promise<Array<Group>>
```

根据holder查询联系人的所有群组。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryGroups(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| holder | Holder | No | 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Group>> | Promise对象。返回查询到的群组对象数组。 |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

let promise = contact.queryGroups({
  holderId: 1,
  bundleName: '',
  displayName: ''
});
promise.then((data) => {
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});

```

## queryGroups

```TypeScript
function queryGroups(context: Context, holder?: Holder): Promise<Array<Group>>
```

根据holder查询联系人的所有群组。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| holder | Holder | No | 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Group>> | Promise对象。返回查询到的群组对象数组。 |

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
let promise = contact.queryGroups(context, {
  holderId: 1,
  bundleName: '',
  displayName: ''
});
promise.then((data) => {
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});

```

