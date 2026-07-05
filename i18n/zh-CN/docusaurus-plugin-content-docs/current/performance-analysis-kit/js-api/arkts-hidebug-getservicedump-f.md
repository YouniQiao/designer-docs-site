# getServiceDump

## getServiceDump

```TypeScript
function getServiceDump(serviceid : int, fd : int, args : Array<string>) : void
```

Obtains system service information. It need dump permission. This API can be called only by system application.

**起始版本：** 9

**需要权限：** 

 ohos.permission.DUMP

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| serviceid | int | 是 | Service ID used to obtain system service information. |
| fd | int | 是 | File descriptor to which data is written by the API. |
| args | Array&lt;string> | 是 | Parameter list of the Dump API of the system service. The maximum length of a  string is 254 characters. The excess part will be truncated. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | the parameter check failed, Possible causes:  1.the parameter type error  2.the args parameter is not string array |
| 11400101 | ServiceId invalid. The system ability does not exist. |

**示例：**

```TypeScript
import { fileIo } from '@kit.CoreFileKit';
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

let fileFd = -1;
try {
  // 请在组件内获取context，确保this.getUiContext().getHostContext()返回结果为UIAbilityContext。
  let path: string = this.getUIContext().getHostContext()!.filesDir + "/serviceInfo.txt";
  console.info("output path: " + path);
  fileFd = fileIo.openSync(path, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE).fd;
  let serviceId: number = 10;
  let args: Array<string> = new Array("allInfo");
  hidebug.getServiceDump(serviceId, fileFd, args);
} catch (error) {
  console.error(`error code: ${(error as BusinessError).code}, error msg: ${(error as BusinessError).message}`);
}

if (fileFd >= 0) {
  fileIo.closeSync(fileFd);
}

```

