# setCloudStrategy

## Modules to Import

```TypeScript
import { cloudData } from '@ohos.data.cloudData';
```

## setCloudStrategy

```TypeScript
function setCloudStrategy(strategy: StrategyType, param?: Array<commonType.ValueType>): Promise<void>
```

Sets the cloud sync strategy of an application. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | StrategyType | Yes | Type of the strategy to set. |
| param | Array&lt;commonType.ValueType&gt; | No | Strategy parameters to set.Currently, only network strategies can be set. By default, Wi-Fi and cellular network are supported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types;3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

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

