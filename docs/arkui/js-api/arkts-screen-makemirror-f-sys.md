# makeMirror

## makeMirror

```TypeScript
function makeMirror(mainScreen:long, mirrorScreen:Array<long>, callback: AsyncCallback<long>): void
```

将屏幕设置为镜像模式，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mainScreen | long | Yes | 主屏幕ID，该参数仅支持整数输入。 |
| mirrorScreen | Array&lt;long> | Yes | 镜像屏幕ID集合，其中ID应为整数。 |
| callback | AsyncCallback&lt;long> | Yes | 回调函数。返回镜像屏幕的群组id，其中id为整数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400001 | Invalid display or screen. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain the screen ID using getAllScreens().
let mainScreenId: number = 0; // Main screen ID.
let mirrorScreenIds: Array<number> = [1, 2, 3]; // ID array of mirrored screens.
// Set the screen to mirror mode.
screen.makeMirror(mainScreenId, mirrorScreenIds, (err: BusinessError, data: number) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to set screen mirroring. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in setting screen mirroring. Data: ${data}`);
});

```

## makeMirror

```TypeScript
function makeMirror(mainScreen:long, mirrorScreen:Array<long>): Promise<long>
```

将屏幕设置为镜像模式，使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mainScreen | long | Yes | 主屏幕ID，该参数仅支持整数输入。 |
| mirrorScreen | Array&lt;long> | Yes | 镜像屏幕ID集合。其中ID应为整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象。返回镜像屏幕的群组id，其中id为整数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400001 | Invalid display or screen. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain the screen ID using getAllScreens().
let mainScreenId: number = 0; // Main screen ID.
let mirrorScreenIds: Array<number> = [1, 2, 3]; // ID array of mirrored screens.
// Set the screen to mirror mode.
screen.makeMirror(mainScreenId, mirrorScreenIds).then((data: number) => {
  console.info(`Succeeded in setting screen mirroring. Data: ${data}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to set screen mirroring. Code: ${err.code}, message: ${err.message}`);
});

```

