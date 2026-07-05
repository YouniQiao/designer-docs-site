# setTimezone

## setTimezone

```TypeScript
function setTimezone(timezone: string, callback: AsyncCallback<void>): void
```

设置系统时区，使用callback异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.SET_TIME_ZONE

**系统能力：** SystemCapability.MiscServices.Time

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timezone | string | 是 | 系统时区。 具体可见  [支持的系统时区](docroot://reference/apis-basic-services-kit/js-apis-system-date-time-sys.md#支持的系统时区) 。 |
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

try {
  systemDateTime.setTimezone('Asia/Shanghai', (error: BusinessError) => {
    if (error) {
      console.info(`Failed to set timezone. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in setting timezone.`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to set timezone. message: ${error.message}, code: ${error.code}`);
}

```

## setTimezone

```TypeScript
function setTimezone(timezone: string): Promise<void>
```

设置系统时区，使用Promise异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.SET_TIME_ZONE

**系统能力：** SystemCapability.MiscServices.Time

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timezone | string | 是 | 系统时区。具体可见  [支持的系统时区](docroot://reference/apis-basic-services-kit/js-apis-system-date-time-sys.md#支持的系统时区) 。 |

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

try {
  systemDateTime.setTimezone('Asia/Shanghai').then(() => {
    console.info(`Succeeded in setting timezone.`);
  }).catch((error: BusinessError) => {
    console.info(`Failed to set timezone. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to set timezone. message: ${error.message}, code: ${error.code}`);
}

```

