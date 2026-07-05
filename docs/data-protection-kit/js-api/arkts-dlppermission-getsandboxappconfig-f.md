# getSandboxAppConfig

## getSandboxAppConfig

```TypeScript
function getSandboxAppConfig(): Promise<string>
```

获取沙箱应用配置信息，使用Promise异步回调。 该接口用于获取沙箱应用的配置信息，便于读取或验证当前的配置状态。

**Since:** 11

**System capability:** SystemCapability.Security.DataLossPrevention

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象。返回沙箱应用配置信息。长度小于4194304字节。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |
| 19100018 | The application is not authorized. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.getSandboxAppConfig().then((configInfo) => { // Obtain the sandbox application configuration.
  console.info('configInfo', configInfo);
}).catch((error: BusinessError)=> {
  console.error(JSON.stringify(error));
});

```

