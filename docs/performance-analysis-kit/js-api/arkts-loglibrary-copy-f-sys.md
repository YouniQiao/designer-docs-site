# copy

## copy

```TypeScript
function copy(logType: string, logName: string, dest: string): Promise<void>
```

拷贝指定日志类型的指定文件到目标应用目录下。使用Promise回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_HIVIEW_SYSTEM

**System capability:** SystemCapability.HiviewDFX.Hiview.LogLibrary

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| logType | string | Yes | 日志类型字符串，例如“HILOG”, "FAULTLOG", "BETACLUB", "REMOTELOG"等。 |
| logName | string | Yes | 日志文件名称。 |
| dest | string | Yes | 目标目录，需填入相对目录名称。传入dest字串后，日志文件将保存到应用缓存路径下的"hiview/dest"文件夹，即"../cache/hiview/dest"。可填入多  层目录。  如果传入空字串，将保存到根目录下，即应用缓存路径下的hiview文件夹。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise实例，可以在其then()、catch()方法中分别对拷贝成功、拷贝异常的回调进行处理。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Permission denied, non-system app called system api |
| 401 | Invalid argument. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 21300001 | Source file does not exists |

**Example**

```TypeScript
import { logLibrary } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let logObj = logLibrary.list('HILOG');
  if (logObj.length > 0) {
    logLibrary.copy('HILOG', logObj[0].name, ''
    ).then(
      (val) => {
        // do something here.
      }
    ).catch(
      (err: BusinessError) => {
        // do something here.
      }
    )
  }
} catch (error) {
    console.error(`error code: ${error?.code}, error msg: ${error?.message}`);
}

```

## copy

```TypeScript
function copy(logType: string, logName: string, dest: string, callback: AsyncCallback<void>): void
```

拷贝指定日志类型的指定文件到目标应用目录下。使用callback回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_HIVIEW_SYSTEM

**System capability:** SystemCapability.HiviewDFX.Hiview.LogLibrary

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| logType | string | Yes | 日志类型字符串，例如“HILOG”, "FAULTLOG", "BETACLUB", "REMOTELOG"等。 |
| logName | string | Yes | 日志文件名称。 |
| dest | string | Yes | 目标目录，需填入相对目录名称。传入dest字串后，日志文件将保存到应用缓存路径下的"hiview/dest"文件夹，即"../cache/hiview/dest"。可填入多  层目录。  如果传入空字串，将保存到根目录下，即应用缓存路径下的hiview文件夹。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，可以在回调函数中处理接口返回值。0表示拷贝成功，其它值表示拷贝失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Permission denied, non-system app called system api |
| 401 | Invalid argument. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 21300001 | Source file does not exists |

**Example**

```TypeScript
import { logLibrary } from '@kit.PerformanceAnalysisKit';

try {
  let logObj = logLibrary.list('HILOG');
  if (logObj.length > 0) {
    logLibrary.copy('HILOG', logObj[0].name, 'dir1', (error, val) => {
      if (val === undefined) {
        // copy failed.
      } else {
        // copy success.
      }
    });
  }
} catch (error) {
    console.error(`error code: ${error?.code}, error msg: ${error?.message}`);
}

```

