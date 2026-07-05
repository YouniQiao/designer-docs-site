# WakeupManager

Implements wakeup management.

**起始版本：** 12

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { intelligentVoice } from '@kit.BasicServicesKit';
```

## clearUserData

```TypeScript
clearUserData(): Promise<void>
```

Clears user data.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 22700107 | System error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupManager != null) {
  (wakeupManager as intelligentVoice.WakeupManager).clearUserData().then(() => {
    console.info(`Succeeded in clearing user data.`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to clear user data, Code:${err.code}, message:${err.message}`);
  });
}

```

## enrollWithWakeupFilesForResult

```TypeScript
enrollWithWakeupFilesForResult(wakeupFiles: Array<WakeupSourceFile>, wakeupInfo: string): Promise<EnrollResult>
```

Enrolls with wakeup files for result. This method uses a promise to return the enroll result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wakeupFiles | Array&lt;WakeupSourceFile> | 是 | the wakeup source files needed. |
| wakeupInfo | string | 是 | wakeup information. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;EnrollResult> | the promise used to return the enroll result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 22700101 | No memory. |
| 22700102 | Invalid parameter. |
| 22700107 | System error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let filesInfo: Array<intelligentVoice.WakeupSourceFile> = [];
filesInfo[0] = {filePath: "", fileContent: new ArrayBuffer(100)};
let wakeupInfo: string = "version: 123"

if (wakeupManager != null) {
  (wakeupManager as intelligentVoice.WakeupManager).enrollWithWakeupFilesForResult(
    filesInfo, wakeupInfo).then(
    (data: intelligentVoice.EnrollResult) => {
      let param: intelligentVoice.EnrollResult = data;
      console.info(`Succeeded in enrolling with wakeup files for result, param:${param}`);
    }).catch((err: BusinessError) => {
    console.error(`Failed to enroll with wakeup files for result, Code:${err.code}, message:${err.message}`);
  });
}

```

## getParameter

```TypeScript
getParameter(key: string): Promise<string>
```

Obtains the value of an intelligent voice parameter. This method uses a promise to return the query result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | the key of the intelligent voice parameter whose value is to be obtained. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | the promise used to return the value of the intelligent voice parameter. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 22700102 | Invalid parameter. |
| 22700107 | System error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupManager != null) {
  (wakeupManager as intelligentVoice.WakeupManager).getParameter('isEnrolled').then((data: string) => {
    let param: string = data;
    console.info(`Succeeded in getting parameter, param:${param}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to get parameter, Code:${err.code}, message:${err.message}`);
  });
}

```

## getUploadFiles

```TypeScript
getUploadFiles (maxCount: int): Promise<Array<UploadFile>>
```

Obtains files needed to upload. This method uses a promise to return the files needed to upload.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| maxCount | int | 是 | the maximum count of upload files. The maxCount should be greater than 0 and smaller than 101 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;UploadFile>> | the promise used to return the upload files. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed. |
| 22700101 | No memory. |
| 22700102 | Invalid parameter. |
| 22700107 | System error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupManager != null) {
  (wakeupManager as intelligentVoice.WakeupManager).getUploadFiles(2).then((data: Array<intelligentVoice.UploadFile>) => {
    let param: Array<intelligentVoice.UploadFile> = data;
    console.info(`Succeeded in getting upload files, param:${param}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to get upload files, Code:${err.code}, message:${err.message}`);
  });
}

```

## getWakeupSourceFiles

```TypeScript
getWakeupSourceFiles(): Promise<Array<WakeupSourceFile>>
```

Obtains wakeup source files. This method uses a promise to return the wakeup source files.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;WakeupSourceFile>> | the promise used to return the wakeup source files. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 22700101 | No memory. |
| 22700107 | System error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupManager != null) {
  (wakeupManager as intelligentVoice.WakeupManager).getWakeupSourceFiles().then(
    (data: Array<intelligentVoice.WakeupSourceFile>) => {
    let param: Array<intelligentVoice.WakeupSourceFile> = data;
    console.info(`Succeeded in getting wakeup source files, param:${param}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to get wakeup source files, Code:${err.code}, message:${err.message}`);
  });
}

```

## setParameter

```TypeScript
setParameter(key: string, value: string): Promise<void>
```

Sets an intelligent voice parameter. This method uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | the key of the intelligent voice parameter to set. |
| value | string | 是 | the value of the intelligent voice parameter to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 22700102 | Invalid parameter. |
| 22700107 | System error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupManager != null) {
  (wakeupManager as intelligentVoice.WakeupManager).setParameter('wakeup_phrase', 'xiaohuaxiaohua').then(() => {
    console.info(`Succeeded in setting parameter`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to set parameter, Code:${err.code}, message:${err.message}`);
  });
}

```

