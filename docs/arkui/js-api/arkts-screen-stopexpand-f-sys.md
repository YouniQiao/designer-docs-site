# stopExpand

## stopExpand

```TypeScript
function stopExpand(expandScreen:Array<long>, callback: AsyncCallback<void>): void
```

停止屏幕的扩展模式，使用callback异步回调。

**Since:** 10

**Deprecated since:** 20

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| expandScreen | Array&lt;long> | Yes | 扩展屏幕ID集合，其中ID为整数。 expandScreen数组大小不应超过1000。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当停止屏幕扩展模式成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1400001 | Invalid display or screen. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let expandScreenIds: Array<number> = [1, 2, 3]; // ID array of extended screens.
// Stop the extend mode.
screen.stopExpand(expandScreenIds, (err: BusinessError) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to stop expand screens. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in stopping expand screens.');
});

```

## stopExpand

```TypeScript
function stopExpand(expandScreen:Array<long>): Promise<void>
```

停止屏幕的扩展模式，使用Promise异步回调。

**Since:** 10

**Deprecated since:** 20

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| expandScreen | Array&lt;long> | Yes | 扩展屏幕ID集合，其中ID为整数。expandScreen数组大小不应超过1000。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1400001 | Invalid display or screen. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let expandScreenIds: Array<number> = [1, 2, 3]; // ID array of extended screens.
// Stop the extend mode.
screen.stopExpand(expandScreenIds).then(() => {
  console.info('Succeeded in stopping expand screens.');
}).catch((err: BusinessError) => {
  console.error(`Failed to stop expand screens. Code: ${err.code}, message: ${err.message}`);
});

```

