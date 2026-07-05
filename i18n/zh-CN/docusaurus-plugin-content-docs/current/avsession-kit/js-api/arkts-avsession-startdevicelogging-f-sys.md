# startDeviceLogging

## startDeviceLogging

```TypeScript
function startDeviceLogging(url: string, maxSize?: int): Promise<void>
```

Begin to write device logs into a file descriptor for the purpose of problem locating. If the logs exceed max file size, no logs will be written and DEVICE_LOG_FULL event will be omitted.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | The file descriptor to be written. |
| maxSize | int | 否 | The max size to be written in kilobyte.  if not set, then written process will exit when there is no space to write. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

**示例：**

```TypeScript
import { fileIo } from '@kit.CoreFileKit';

let file = await fileIo.open("filePath");
let url = file.fd.toString();
avSession.startDeviceLogging(url, 2048).then(() => {
  console.info('Succeeded in starting device logging.');
})

```

