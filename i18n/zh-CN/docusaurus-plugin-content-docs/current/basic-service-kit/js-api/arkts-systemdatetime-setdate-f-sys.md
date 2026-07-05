# setDate

## setDate

```TypeScript
function setDate(date: Date, callback: AsyncCallback<void>): void
```

设置系统日期，使用callback异步回调。

**起始版本：** 9

**废弃版本：** 10

**替代接口：** systemDateTime.setTime(time:

**需要权限：** 

 ohos.permission.SET_TIME

**系统能力：** SystemCapability.MiscServices.Time

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| date | Date | 是 | 目标日期，且必须>0。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed; |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let date = new Date();
try {
  systemDateTime.setDate(date, (error: BusinessError) => {
    if (error) {
      console.info(`Failed to set date. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in setting date.`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to set date. message: ${error.message}, code: ${error.code}`);
}

```

## setDate

```TypeScript
function setDate(date: Date): Promise<void>
```

设置系统日期，使用Promise异步回调。

**起始版本：** 9

**废弃版本：** 10

**替代接口：** systemDateTime.setTime(time:

**需要权限：** 

 ohos.permission.SET_TIME

**系统能力：** SystemCapability.MiscServices.Time

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| date | Date | 是 | 目标日期，且必须>0。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed; |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let date = new Date(); 
try {
  systemDateTime.setDate(date).then(() => {
    console.info(`Succeeded in setting date.`);
  }).catch((error: BusinessError) => {
    console.info(`Failed to set date. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to set date. message: ${error.message}, code: ${error.code}`);
}

```

