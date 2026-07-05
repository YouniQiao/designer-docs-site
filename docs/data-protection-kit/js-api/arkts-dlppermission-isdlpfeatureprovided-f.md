# isDLPFeatureProvided

## isDLPFeatureProvided

```TypeScript
function isDLPFeatureProvided(): Promise<boolean>
```

查询当前系统是否提供加密保护特性，仅支持企业设备且需[MDM（Mobile Device Management，移动设备管理）](docroot://mdm/mdm-kit-intro.md)配置使能。调用成功后返回查询结果， 用于判断系统是否支持DLP加密功能。使用Promise异步回调。 该接口用于判断当前系统是否支持DLP加密功能，以便在不支持的设备上做兼容处理或功能降级。 > **说明：** > > 该接口由[MDM](docroot://mdm/mdm-kit-intro.md)配置使能，且使能场景为企业设备。其他设备（如消费者终端设备）无需关注该接口，如若调用该接口，则返回值为false。

**Since:** 12

**System capability:** SystemCapability.Security.DataLossPrevention

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Pomise对象。返回true表示当前系统提供加密保护特性，返回false表示不提供加密保护特性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.isDLPFeatureProvided().then((isFeatureProvided) => { // Check whether the current system provides the encryption protection feature.
  console.info('isFeatureProvided', JSON.stringify(isFeatureProvided));
}).catch((err: BusinessError) => {
  console.error('error', (err as BusinessError).code, (err as BusinessError).message); // Throw an error if the operation fails.
});

```

