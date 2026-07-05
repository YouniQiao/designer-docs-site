# getCurrentTime

## getCurrentTime

```TypeScript
function getCurrentTime(isNano: boolean, callback: AsyncCallback<number>): void
```

获取自Unix纪元以来经过的时间，使用callback异步回调。

**起始版本：** 9

**废弃版本：** 12

**替代接口：** systemDateTime.getTime

**系统能力：** SystemCapability.MiscServices.Time

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isNano | boolean | 是 | 返回结果是否为纳秒数。 - true：表示返回结果为纳秒数（ns）。 - false：表示返回结果为毫秒数（ms）。 |
| callback | AsyncCallback&lt;number> | 是 | 回调函数，返回自Unix纪元以来经过的时间戳。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Incorrect parameter types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemDateTime.getCurrentTime(true, (error: BusinessError, time: number) => {
    if (error) {
      console.error(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting currentTime : ${time}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
}

```

## getCurrentTime

```TypeScript
function getCurrentTime(callback: AsyncCallback<number>): void
```

获取自Unix纪元以来经过的时间，使用callback异步回调。

**起始版本：** 9

**废弃版本：** 12

**替代接口：** systemDateTime.getTime

**系统能力：** SystemCapability.MiscServices.Time

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number> | 是 | 回调函数，返回自Unix纪元以来经过的时间戳（ms）。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Incorrect parameter types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemDateTime.getCurrentTime((error: BusinessError, time: number) => {
    if (error) {
      console.error(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting currentTime : ${time}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
}

```

## getCurrentTime

```TypeScript
function getCurrentTime(isNano?: boolean): Promise<number>
```

获取自Unix纪元以来经过的时间，使用Promise异步回调。

**起始版本：** 9

**废弃版本：** 12

**替代接口：** systemDateTime.getTime

**系统能力：** SystemCapability.MiscServices.Time

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isNano | boolean | 否 | 返回结果是否为纳秒数,默认值为false。 - true：表示返回结果为纳秒数（ns）。 - false：表示返回结果为毫秒数（ms）。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise对象，返回自Unix纪元以来经过的时间戳。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Incorrect parameter types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemDateTime.getCurrentTime().then((time: number) => {
    console.info(`Succeeded in getting currentTime : ${time}`);
  }).catch((error: BusinessError) => {
    console.error(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
}

```

