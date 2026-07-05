# hasMatchedCallLog

## hasMatchedCallLog

```TypeScript
function hasMatchedCallLog(context: Context, phoneNumber: string, minDuration: int): Promise<boolean>
```

检查是否有符合条件的通话记录，默认查询6小时以内的通话记录，仅针对运营商通话。使用Promise异步回调。

**Since:** 24

**Required permissions:** 

 ohos.permission.CHECK_CALL_LOG

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| phoneNumber | string | Yes | 联系人的电话号码。 |
| minDuration | int | Yes | 最短通话时长，单位为秒，取值范围大于0。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回是否有符合条件的通话记录，true代表有符合条件的，false代表没有。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 16700001 | General error. |
| 16700002 | Invalid parameter value. |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// Obtain the context within the component.
const context = this.getUIContext().getHostContext() as common.UIAbilityContext;

const phoneNumber = '138xxxxxxxx';
const minDuration = 60;
// Call the API to query call records. By default, call records within the last 6 hours are queried.
contact.hasMatchedCallLog(context, phoneNumber, minDuration).then((hasMatch:boolean) => {
  console.info(`Has matched call log: ${hasMatch}`);
});

```

## hasMatchedCallLog

```TypeScript
function hasMatchedCallLog(context: Context, phoneNumber: string, minDuration: int, withinTime: int): Promise<boolean>
```

检查是否有符合条件的通话记录，仅针对运营商通话。使用Promise异步回调。

**Since:** 24

**Required permissions:** 

 ohos.permission.CHECK_CALL_LOG

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| phoneNumber | string | Yes | 联系人的电话号码。 |
| minDuration | int | Yes | 最短通话时长，单位为秒，取值范围大于0。 |
| withinTime | int | Yes | 表示从当前时间开始计算，通话的起始时间和结束时间应在此时间范围内，单位为秒。最多可设置6小时，超过6小时的默认以6小时查询。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回是否有符合条件的通话记录，true代表有符合条件的，false代表没有。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 16700001 | General error. |
| 16700002 | Invalid parameter value. |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// Obtain the context within the component.
const context = this.getUIContext().getHostContext() as common.UIAbilityContext;

const phoneNumber = '138xxxxxxxx';
const minDuration = 60;
const withinTime = 2 * 60 *60;

// Call the API.
contact.hasMatchedCallLog(context, phoneNumber, minDuration, withinTime).then((hasMatch:boolean) => {
  console.info(`Has matched call log: ${hasMatch}`);
});

```

