# queryKey

## queryKey

```TypeScript
function queryKey(id: number, callback: AsyncCallback<string>): void
```

根据联系人的id查询联系人的唯一查询键key。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryKey(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | 联系人对象的id属性。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。成功返回查询到的联系人对应的key；失败返回具体的错误码信息。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryKey(1, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Key. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});

```

## queryKey

```TypeScript
function queryKey(context: Context, id: number, callback: AsyncCallback<string>): void
```

根据联系人的id查询联系人的唯一查询键key。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| id | number | Yes | 联系人对象的id属性，是联系人对象在数据库中的唯一标识符。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。成功返回查询到的联系人对应的key；失败返回具体的错误码信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// Obtain the context within the component.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryKey(context, 1, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Key. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});

```

## queryKey

```TypeScript
function queryKey(id: number, holder: Holder, callback: AsyncCallback<string>): void
```

根据联系人的id和holder查询联系人的唯一查询键key。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryKey(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | 联系人对象的id属性。 |
| holder | Holder | Yes | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。成功返回查询到的联系人对应的key；失败返回具体的错误码信息。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryKey(1, {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Key. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});

```

## queryKey

```TypeScript
function queryKey(context: Context, id: number, holder: Holder, callback: AsyncCallback<string>): void
```

根据联系人的id和holder查询联系人的唯一查询键key。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| id | number | Yes | 联系人对象的id属性。 |
| holder | Holder | Yes | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。成功返回查询到的联系人对应的key；失败返回具体的错误码信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// Obtain the context within the component.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryKey(context, 1, {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Key. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});

```

## queryKey

```TypeScript
function queryKey(id: number, holder?: Holder): Promise<string>
```

根据联系人的id和holder查询联系人的唯一查询键key。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryKey(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | 联系人对象的id属性。 |
| holder | Holder | No | 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象。返回查询到的联系人对应的key。 |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

let promise = contact.queryKey(1, {
  holderId: 1,
  bundleName: '',
  displayName: ''
});
promise.then((data) => {
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});

```

## queryKey

```TypeScript
function queryKey(context: Context, id: number, holder?: Holder): Promise<string>
```

根据联系人的id和holder查询联系人的唯一查询键key。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| id | number | Yes | 联系人对象的id属性。 |
| holder | Holder | No | 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象。返回查询到的联系人对应的key。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// Obtain the context within the component.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryKey(context, 1, {
  holderId: 1,
  bundleName: '',
  displayName: ''
});
promise.then((data) => {
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});

```

