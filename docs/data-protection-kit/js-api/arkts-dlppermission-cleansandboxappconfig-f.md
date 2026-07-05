# cleanSandboxAppConfig

## cleanSandboxAppConfig

```TypeScript
function cleanSandboxAppConfig(): Promise<void>
```

清理沙箱应用配置信息。调用成功后，沙箱应用配置将被清除，恢复默认状态。使用Promise异步回调。 该接口用于清理沙箱应用的配置信息，恢复默认状态以防止配置残留影响后续使用。

**Since:** 11

**System capability:** SystemCapability.Security.DataLossPrevention

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19100001 | Invalid parameter value. |
| 19100007 | No permission to call this API,  which is available only for non-DLP sandbox applications. |
| 19100011 | The system ability works abnormally. |
| 19100018 | The application is not authorized. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.cleanSandboxAppConfig().then((configInfo) => { // Clear sandbox application configuration.
  console.info('configInfo: ', configInfo);
}).catch((error: BusinessError)=> {
  console.error(JSON.stringify(error));
});

```

