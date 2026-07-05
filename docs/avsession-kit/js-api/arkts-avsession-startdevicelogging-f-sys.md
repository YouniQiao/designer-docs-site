# startDeviceLogging

## startDeviceLogging

```TypeScript
function startDeviceLogging(url: string, maxSize?: int): Promise<void>
```

Begin to write device logs into a file descriptor for the purpose of problem locating. If the logs exceed max file size, no logs will be written and DEVICE_LOG_FULL event will be omitted.

**Since:** 13

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The file descriptor to be written. |
| maxSize | int | No | The max size to be written in kilobyte.  if not set, then written process will exit when there is no space to write. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

**Example**

```TypeScript
import { fileIo } from '@kit.CoreFileKit';

let file = await fileIo.open("filePath");
let url = file.fd.toString();
avSession.startDeviceLogging(url, 2048).then(() => {
  console.info('Succeeded in starting device logging.');
})

```

