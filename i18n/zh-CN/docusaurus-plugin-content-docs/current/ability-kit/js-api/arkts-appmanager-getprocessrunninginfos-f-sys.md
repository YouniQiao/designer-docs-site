# getProcessRunningInfos

## getProcessRunningInfos

```TypeScript
function getProcessRunningInfos(): Promise<Array<ProcessInformation>>
```

Obtains information about the running processes of the current application. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** appManager#getRunningProcessInformation

**需要权限：** 

- API版本9 - 10： ohos.permission.GET_RUNNING_INFO

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;ProcessInformation>> | Promise used to return the API call result and the process running  information. You can perform error handling or custom processing in this callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed; |

**示例：**

```TypeScript
import appManager from '@ohos.application.appManager';
import { BusinessError } from '@ohos.base';

appManager.getProcessRunningInfos().then((data) => {
  console.info(`The process running infos is: ${JSON.stringify(data)}`);
}).catch((error: BusinessError) => {
  console.error(`error: ${JSON.stringify(error)}`);
});

```

## getProcessRunningInfos

```TypeScript
function getProcessRunningInfos(callback: AsyncCallback<Array<ProcessInformation>>): void
```

Obtains information about the running processes of the current application. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** appManager#getRunningProcessInformation

**需要权限：** 

- API版本9 - 10： ohos.permission.GET_RUNNING_INFO

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;ProcessInformation>> | 是 | Callback used to return the result. If the API call is  successful, err is undefined and data is the information about the running processes. Otherwise, err  is an error object. You can perform error handling or other custom processing. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed; |

**示例：**

```TypeScript
import appManager from '@ohos.application.appManager';

appManager.getProcessRunningInfos((error, data) => {
  if (error && error.code !== 0) {
    console.error(`getProcessRunningInfos fail, error: ${JSON.stringify(error)}`);
  } else {
    console.info(`getProcessRunningInfos success, data: ${JSON.stringify(data)}`);
  }
});

```

