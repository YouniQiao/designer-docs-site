# setTime

## setTime

```TypeScript
function setTime(time: long, callback: AsyncCallback<void>): void
```

设置系统时间，使用callback异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.SET_TIME

**系统能力：** SystemCapability.MiscServices.Time

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| time | long | 是 | 目标时间戳(ms)。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 204 | Access denied due to user access control policy. Possible causes:  1. The operation is restricted by the OS-account constraint.  2. The required privilege for the operation has not been granted. [since 24] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// time对应的时间为2021-01-20 02:36:25。
let time: number = 1611081385000;
try {
  systemDateTime.setTime(time, (error: BusinessError) => {
    if (error) {
      console.info(`Failed to set time. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in setting time`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to set time. message: ${error.message}, code: ${error.code}`);
}

```

## setTime

```TypeScript
function setTime(time: long): Promise<void>
```

设置系统时间，使用Promise异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.SET_TIME

**系统能力：** SystemCapability.MiscServices.Time

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| time | long | 是 | 目标时间戳(ms)。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 204 | Access denied due to user access control policy. Possible causes:  1. The operation is restricted by the OS-account constraint.  2. The required privilege for the operation has not been granted. [since 24] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// time对应的时间为2021-01-20 02:36:25。
let time: number = 1611081385000;
try {
  systemDateTime.setTime(time).then(() => {
    console.info(`Succeeded in setting time.`);
  }).catch((error: BusinessError) => {
    console.info(`Failed to set time. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to set time. message: ${error.message}, code: ${error.code}`);
}

```

