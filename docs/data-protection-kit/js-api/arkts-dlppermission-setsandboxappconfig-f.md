# setSandboxAppConfig

## setSandboxAppConfig

```TypeScript
function setSandboxAppConfig(configInfo: string): Promise<void>
```

设置沙箱应用配置信息，配置信息为JSON字符串格式，具体内容由应用自行设置。调用成功后，沙箱应用将按照配置信息运行。使用Promise异步回调。 该接口用于设置沙箱应用的配置信息，以便应用按需传递自定义参数。

**Since:** 11

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configInfo | string | Yes | 沙箱应用配置信息。长度不超过222-1字节，超出此范围抛出错误码19100001。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 19100001 | Invalid parameter value. |
| 19100007 | No permission to call this API,  which is available only for non-DLP sandbox applications. |
| 19100011 | The system ability works abnormally. |
| 19100018 | The application is not authorized. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.setSandboxAppConfig('configInfo').then((configInfo) => { // Set sandbox application configuration.
  console.info('configInfo: ', configInfo);
}).catch((error: BusinessError)=> {
  console.error(JSON.stringify(error));
});

```

