# getNetAccessPolicy

## getNetAccessPolicy

```TypeScript
function getNetAccessPolicy(): Promise<NetAccessPolicy>
```

Query the network access policy of the calling application.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;NetAccessPolicy> | Returns the network access policy of the application.  For details, see {@link NetAccessPolicy}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error, such as nullptr。 |

**示例：**

```TypeScript
import { policy } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

policy.getNetAccessPolicy().then((policyInfo: policy.NetAccessPolicy) => {
  console.info(`getNetAccessPolicy success. WiFi: ${policyInfo.allowWiFi}, Cellular: ${policyInfo.allowCellular}`);
}).catch((err: BusinessError) => {
  console.error(`getNetAccessPolicy fail. error info: ${err.code} - ${err.message}`);
});

```

