# getDLPGatheringPolicy

## getDLPGatheringPolicy

```TypeScript
function getDLPGatheringPolicy(): Promise<GatheringPolicyType>
```

查询DLP沙箱聚合策略。使用Promise异步回调。 应用需要获取当前系统的DLP沙箱聚合策略配置时使用此接口。

**起始版本：** 10

**需要权限：** 

 ohos.permission.ACCESS_DLP_FILE

**系统能力：** SystemCapability.Security.DataLossPrevention

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;GatheringPolicyType> | Promise对象。返回当前DLP沙箱聚合策略。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |

**示例：**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.getDLPGatheringPolicy().then((gatheringPolicy: dlpPermission.GatheringPolicyType) => {
  console.info('gatheringPolicy: ', JSON.stringify(gatheringPolicy));
}).catch((error: BusinessError)=> {
  console.error(error.message);
}); // 获取沙箱聚合策略。

```

## getDLPGatheringPolicy

```TypeScript
function getDLPGatheringPolicy(callback: AsyncCallback<GatheringPolicyType>): void
```

查询DLP沙箱聚合策略。使用callback异步回调。 应用需要获取当前系统的DLP沙箱聚合策略配置时使用此接口。

**起始版本：** 10

**需要权限：** 

 ohos.permission.ACCESS_DLP_FILE

**系统能力：** SystemCapability.Security.DataLossPrevention

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;GatheringPolicyType> | 是 | 回调函数。err为undefined时表示查询成功；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types. |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |

**示例：**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.getDLPGatheringPolicy((err, gatheringPolicy) => {
  if (err !== undefined) {
    console.error('getDLPGatheringPolicy error,', err.code, err.message);
  } else {
    console.info('gatheringPolicy：', JSON.stringify(gatheringPolicy));
  }
}); // 获取沙箱聚合策略。

```

