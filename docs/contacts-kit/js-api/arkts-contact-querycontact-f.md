# queryContact

## queryContact

```TypeScript
function queryContact(key: string, callback: AsyncCallback<Contact>): void
```

根据联系人唯一标识符key查询联系人。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryContact(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]contact.queryKey(context: Context, id: number, callback: AsyncCallback): void获取。 |
| callback | AsyncCallback&lt;Contact> | Yes | 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Query the contact whose key is xxx.
contact.queryContact('xxx', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});

```

## queryContact

```TypeScript
function queryContact(context: Context, key: string, callback: AsyncCallback<Contact>): void
```

根据key查询联系人。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| key | string | Yes | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]contact.queryKey(context: Context, id: number, callback: AsyncCallback): void获取。 |
| callback | AsyncCallback&lt;Contact> | Yes | 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。 |

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
contact.queryContact(context, 'xxx', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});

```

## queryContact

```TypeScript
function queryContact(key: string, holder: Holder, callback: AsyncCallback<Contact>): void
```

根据key和holder查询联系人。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryContact(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]contact.queryKey(context: Context, id: number, callback: AsyncCallback): void获取。 |
| holder | Holder | Yes | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback&lt;Contact> | Yes | 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Query the contact whose key is xxx and holder ID is 1.
contact.queryContact('xxx', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});

```

## queryContact

```TypeScript
function queryContact(context: Context, key: string, holder: Holder, callback: AsyncCallback<Contact>): void
```

根据key和holder查询联系人。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| key | string | Yes | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]contact.queryKey(context: Context, id: number, callback: AsyncCallback): void获取。 |
| holder | Holder | Yes | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback&lt;Contact> | Yes | 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。 |

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
contact.queryContact(context, 'xxx', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});

```

## queryContact

```TypeScript
function queryContact(key: string, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void
```

根据key和指定属性(attrs)查询联系人。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryContact(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]contact.queryKey(context: Context, id: number, callback: AsyncCallback): void获取。 |
| attrs | ContactAttributes | Yes | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback&lt;Contact> | Yes | 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Pass the key whose value is xxx and the list of contact attributes for query.
contact.queryContact('xxx', {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});

```

## queryContact

```TypeScript
function queryContact(context: Context, key: string, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void
```

根据key和attrs查询联系人。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| key | string | Yes | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]contact.queryKey(context: Context, id: number, callback: AsyncCallback): void获取。 |
| attrs | ContactAttributes | Yes | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback&lt;Contact> | Yes | 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。 |

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
contact.queryContact(context, 'xxx', {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});

```

## queryContact

```TypeScript
function queryContact(key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void
```

根据key、holder和attrs查询联系人。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryContact(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]contact.queryKey(context: Context, id: number, callback: AsyncCallback): void获取。 |
| holder | Holder | Yes | 创建联系人的应用信息类，为空则默认使用系统联系人应用查询。 |
| attrs | ContactAttributes | Yes | 联系人的属性列表，当该参数为空时，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback&lt;Contact> | Yes | 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Query the contact whose key, holder and attributes meet the conditions.
contact.queryContact('xxx', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});

```

## queryContact

```TypeScript
function queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void
```

根据key、holder和attrs查询联系人。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| key | string | Yes | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]contact.queryKey(context: Context, id: number, callback: AsyncCallback): void获取。 |
| holder | Holder | Yes | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| attrs | ContactAttributes | Yes | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback&lt;Contact> | Yes | 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。 |

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
  contact.queryContact(context, 'xxx', {
    holderId: 1,
    bundleName: '',
    displayName: ''
  }, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  }, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
  });

```

## queryContact

```TypeScript
function queryContact(key: string, holder?: Holder, attrs?: ContactAttributes): Promise<Contact>
```

根据key、holder和attrs查询联系人。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryContact(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 联系人的唯一查询键key，是新建联系人时自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]contact.queryKey(context: Context, id: number, callback: AsyncCallback): void获取。 |
| holder | Holder | No | 创建联系人的应用信息类，不传该参数则默认使用系统联系人应用查询。 |
| attrs | ContactAttributes | No | 联系人的属性列表，不传默认查询所有联系人属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Contact> | Promise对象。返回查询到的联系人对象。 |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

// Asynchronous callback used to query contacts.
let promise = contact.queryContact('xxx', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});

```

## queryContact

```TypeScript
function queryContact(context: Context, key: string, holder?: Holder, attrs?: ContactAttributes): Promise<Contact>
```

根据key、holder和attrs查询联系人。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| key | string | Yes | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]contact.queryKey(context: Context, id: number, callback: AsyncCallback): void获取。 |
| holder | Holder | No | 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。 |
| attrs | ContactAttributes | No | 联系人的属性列表，不传该参数，则默认查询所有联系人属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Contact> | Promise对象。返回查询到的联系人对象。 |

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
let promise = contact.queryContact(context, 'xxx', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});

```

