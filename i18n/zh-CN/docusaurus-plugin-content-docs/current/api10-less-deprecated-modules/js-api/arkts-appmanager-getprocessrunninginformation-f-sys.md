# getProcessRunningInformation

## getProcessRunningInformation

```TypeScript
function getProcessRunningInformation(): Promise<Array<ProcessRunningInfo>>
```

Obtains information about the running processes. This API uses a promise to return the result. > This API is deprecated since API version 9. You are advised to use > [appManager.getRunningProcessInformation](../../apis-ability-kit/arkts-apis/arkts-appmanager-getrunningprocessinformation-f.md#getRunningProcessInformation-1) > instead.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.app.ability.appManager:appManager#getRunningProcessInformation

**需要权限：** 

- API版本8 - 10： ohos.permission.GET_RUNNING_INFO

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;ProcessRunningInfo>> | Promise used to return the information about the running processes. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000050 | Internal error. Possible causes: 1. Failed to connect to the system service; |

**示例：**

```TypeScript
import appManager from '@ohos.application.appManager';
import { BusinessError } from '@ohos.base';

appManager.getProcessRunningInformation().then((data) => {
  console.info(`The process running infos is: ${JSON.stringify(data)}`);
}).catch((error: BusinessError) => {
  console.error(`error: ${JSON.stringify(error)}`);
});

```

## getProcessRunningInformation

```TypeScript
function getProcessRunningInformation(callback: AsyncCallback<Array<ProcessRunningInfo>>): void
```

Obtains information about the running processes. This API uses an asynchronous callback to return the result. > This API is deprecated since API version 9. You are advised to use > [appManager.getRunningProcessInformation]{ > @link @ohos.app.ability.appManager:appManager.getRunningProcessInformation()} instead.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.app.ability.appManager:appManager#getRunningProcessInformation

**需要权限：** 

- API版本8 - 10： ohos.permission.GET_RUNNING_INFO

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;ProcessRunningInfo>> | 是 | Callback used to return the result. If the API call  is successful, err is undefined and data is the information about the running processes. Otherwise,  err is an error object. You can perform error handling or other custom processing. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. Possible causes: 1. Failed to connect to the system service; |

**示例：**

```TypeScript
import appManager from '@ohos.application.appManager';

appManager.getProcessRunningInformation((error, data) => {
  if (error && error.code !== 0) {
    console.error(`getProcessRunningInformation fail, error: ${JSON.stringify(error)}`);
  } else {
    console.info(`getProcessRunningInformation success, data: ${JSON.stringify(data)}`);
  }
});

```

