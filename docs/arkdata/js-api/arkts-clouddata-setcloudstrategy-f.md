# setCloudStrategy

## setCloudStrategy

```TypeScript
function setCloudStrategy(strategy: StrategyType, param?: Array<commonType.ValueType>): Promise<void>
```

设置应用自身的云同步策略，使用Promise异步回调。

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | StrategyType | Yes | 配置的策略类型。 |
| param | Array&lt;commonType.ValueType> | No | 策略参数，类型为Array，实际传入值为  [NetWorkStrategy]cloudData.NetWorkStrategy枚举值，取值范围为WIFI和CELLULAR，默认支持WIFI和蜂窝网络策略。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Sync data over Wi-Fi only.
cloudData.setCloudStrategy(cloudData.StrategyType.NETWORK, [cloudData.NetWorkStrategy.WIFI]).then(() => {
    console.info('Succeeded in setting the cloud strategy');
}).catch((err: BusinessError) => {
    console.error(`Failed to set cloud strategy. Code: ${err.code}, message: ${err.message}`);
});


```

