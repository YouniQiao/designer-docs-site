# stopMirror

## stopMirror

```TypeScript
function stopMirror(mirrorScreen:Array<long>, callback: AsyncCallback<void>): void
```

停止屏幕的镜像模式，使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mirrorScreen | Array&lt;long> | Yes | 镜像屏幕ID集合，其中ID应为整数。 mirrorScreen数组大小不应超过1000。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当停止屏幕镜像模式成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1400001 | Invalid display or screen. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain the screen ID using getAllScreens().
let mirrorScreenIds: Array<number> = [1, 2, 3]; // ID array of mirrored screens.
// Stop the mirror mode.
screen.stopMirror(mirrorScreenIds, (err: BusinessError) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to stop mirror screens. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in stopping mirror screens.');
});

```

## stopMirror

```TypeScript
function stopMirror(mirrorScreen:Array<long>): Promise<void>
```

停止屏幕的镜像模式，使用Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mirrorScreen | Array&lt;long> | Yes | 镜像屏幕ID集合，其中ID应为整数。mirrorScreen数组大小不应超过1000。 |

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

// Obtain the screen ID using getAllScreens().
let mirrorScreenIds: Array<number> = [1, 2, 3]; // ID array of mirrored screens.
// Stop the mirror mode.
screen.stopMirror(mirrorScreenIds).then(() => {
  console.info('Succeeded in stopping mirror screens.');
}).catch((err: BusinessError) => {
  console.error(`Failed to stop mirror screens. Code: ${err.code}, message: ${err.message}`);
});

```

