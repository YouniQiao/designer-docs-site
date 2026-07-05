# isMyCard

## isMyCard

```TypeScript
function isMyCard(id: number, callback: AsyncCallback<boolean>): void
```

判断是否为“我的名片”。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.isMyCard(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | 名片对象的id属性。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。成功返回是否为“我的名片”的布尔值。true代表的是“我的名片”，false则代表不是；失败返回具体的错误码信息。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Check whether the contact whose ID is 1 is included in my card.
contact.isMyCard(1, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to isMyCard. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in isMyCard. data->${JSON.stringify(data)}`);
});

```

## isMyCard

```TypeScript
function isMyCard(context: Context, id: number, callback: AsyncCallback<boolean>): void
```

判断是否为“我的名片”。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| id | number | Yes | 名片对象的id属性。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。成功返回是否为“我的名片”的布尔值。true代表的是“我的名片”，false代表不是；失败时则返回错误码。 |

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
  contact.isMyCard(context, 1, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to isMyCard. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in isMyCard. data->${JSON.stringify(data)}`);
  });

```

## isMyCard

```TypeScript
function isMyCard(id: number): Promise<boolean>
```

判断是否为“我的名片”。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.isMyCard(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | 名片对象的id属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示是“我的名片”，返回false代表不是。 |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

// Check whether the contact whose ID is 1 is included in my card.
let promise = contact.isMyCard(1);
promise.then((data) => {
  console.info(`Succeeded in isMyCard. data->${JSON.stringify(data)}`);
});

```

## isMyCard

```TypeScript
function isMyCard(context: Context, id: number): Promise<boolean>
```

判断是否为“我的名片”。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| id | number | Yes | 名片对象的id属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示是“我的名片”，返回false代表不是。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

**Example**

```TypeScript
  import { contact } from '@kit.ContactsKit';
  import { common } from '@kit.AbilityKit';

  // Obtain the context within the component.
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  let promise = contact.isMyCard(context, 1);
  promise.then((data) => {
    console.info(`Succeeded in isMyCard. data->${JSON.stringify(data)}`);
  });

```

