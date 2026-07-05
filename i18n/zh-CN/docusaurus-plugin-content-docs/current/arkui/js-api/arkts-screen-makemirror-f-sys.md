# makeMirror

## makeMirror

```TypeScript
function makeMirror(mainScreen:long, mirrorScreen:Array<long>, callback: AsyncCallback<long>): void
```

将屏幕设置为镜像模式，使用callback异步回调。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mainScreen | long | 是 | 主屏幕ID，该参数仅支持整数输入。 |
| mirrorScreen | Array&lt;long> | 是 | 镜像屏幕ID集合，其中ID应为整数。 |
| callback | AsyncCallback&lt;long> | 是 | 回调函数。返回镜像屏幕的群组id，其中id为整数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400001 | Invalid display or screen. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 屏幕ID需通过getAllScreens()获取
let mainScreenId: number = 0; // 主屏ID
let mirrorScreenIds: Array<number> = [1, 2, 3]; // 镜像屏ID集合
// 设置屏幕为镜像模式
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

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mainScreen | long | 是 | 主屏幕ID，该参数仅支持整数输入。 |
| mirrorScreen | Array&lt;long> | 是 | 镜像屏幕ID集合。其中ID应为整数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise对象。返回镜像屏幕的群组id，其中id为整数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400001 | Invalid display or screen. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 屏幕ID需通过getAllScreens()获取
let mainScreenId: number = 0; // 主屏ID
let mirrorScreenIds: Array<number> = [1, 2, 3]; // 镜像屏ID集合
// 设置屏幕为镜像模式
screen.makeMirror(mainScreenId, mirrorScreenIds).then((data: number) => {
  console.info(`Succeeded in setting screen mirroring. Data: ${data}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to set screen mirroring. Code: ${err.code}, message: ${err.message}`);
});

```

