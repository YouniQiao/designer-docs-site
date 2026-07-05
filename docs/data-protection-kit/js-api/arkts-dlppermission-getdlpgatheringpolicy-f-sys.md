# getDLPGatheringPolicy

## getDLPGatheringPolicy

```TypeScript
function getDLPGatheringPolicy(): Promise<GatheringPolicyType>
```

查询DLP沙箱聚合策略。使用Promise异步回调。 应用需要获取当前系统的DLP沙箱聚合策略配置时使用此接口。

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_DLP_FILE

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;GatheringPolicyType> | Promise对象。返回当前DLP沙箱聚合策略。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.getDLPGatheringPolicy().then((gatheringPolicy: dlpPermission.GatheringPolicyType) => {
  console.info('gatheringPolicy: ', JSON.stringify(gatheringPolicy));
}).catch((error: BusinessError)=> {
  console.error(error.message);
}); // Obtain the sandbox gathering policy.

```

## getDLPGatheringPolicy

```TypeScript
function getDLPGatheringPolicy(callback: AsyncCallback<GatheringPolicyType>): void
```

查询DLP沙箱聚合策略。使用callback异步回调。 应用需要获取当前系统的DLP沙箱聚合策略配置时使用此接口。

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_DLP_FILE

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;GatheringPolicyType> | Yes | 回调函数。err为undefined时表示查询成功；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types. |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.getDLPGatheringPolicy((err, gatheringPolicy) => {
  if (err !== undefined) {
    console.error('getDLPGatheringPolicy error,', err.code, err.message);
  } else {
    console.info('gatheringPolicy: ', JSON.stringify(gatheringPolicy));
  }
}); // Obtain the sandbox gathering policy.

```

