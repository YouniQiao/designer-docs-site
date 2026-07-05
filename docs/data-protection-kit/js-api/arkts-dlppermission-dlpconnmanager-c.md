# DlpConnManager

用于调用registerPlugin和unregisterPlugin接口，在SA（System Ability）中注册或注销回调能力。 > **说明：** > > registerPlugin接口将回调能力注册进SA（System Ability），而unregisterPlugin接口将回调能力从SA（System Ability）中注销。

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## constructor

```TypeScript
constructor()
```

[DlpConnManager]dlpPermission.DlpConnManager 实例化时的构造函数。

**Since:** 21

**Required permissions:** 

- API version21  to  24: ohos.permission.ENTERPRISE_ACCESS_DLP_FILE

- API version26.0.0 and later: ohos.permission.ENTERPRISE_ACCESS_DLP_FILE or ohos.permission.ACCESS_DLP_SERVICE

**System capability:** SystemCapability.Security.DataLossPrevention

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

let dlpConnManager: dlpPermission.DlpConnManager = new dlpPermission.DlpConnManager();

```

## registerPlugin

```TypeScript
static registerPlugin(plugin: DlpConnPlugin): number
```

该接口提供将回调注册到SA（System Ability）侧的功能。 > **说明：** > > registerPlugin将plugin注册到SA（System Ability）侧，待SA（System Ability）调用。

**Since:** 21

**Required permissions:** 

- API version21  to  24: ohos.permission.ENTERPRISE_ACCESS_DLP_FILE

- API version26.0.0 and later: ohos.permission.ENTERPRISE_ACCESS_DLP_FILE or ohos.permission.ACCESS_DLP_SERVICE

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| plugin | DlpConnPlugin | Yes | 回调插件对象，用于注册回调能力到SA（System Ability）侧。需要继承DlpConnPlugin接口并实现connectServer方法，以  便SA侧调用时能够通过回调返回处理结果。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 注册结果，返回该回调的唯一标识ID。取值范围为[0, 264-1]。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 19100001 | Invalid parameter value. |
| 19100002 | Credential service busy due to too many tasks or duplicate tasks. |
| 19100003 | Credential task time out. |
| 19100004 | Credential service error. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { Callback } from '@kit.BasicServicesKit';

export default class DataCapsulePlugin implements dlpPermission.DlpConnPlugin {
  private accountId: string;
  private accountName: string;
  constructor() {
    this.accountId = 'accountId'; // Initialize account information.
    this.accountName = 'accountName';
  }

  connectServer(requestId: string, requestData: string, callback: Callback<string>): void {
    let callbackJson = JSON.stringify({
      'requestId': requestId,
    });
    callback(callbackJson);
  }
}
  
let pluginId: number = dlpPermission.DlpConnManager.registerPlugin(new DataCapsulePlugin());

```

## unregisterPlugin

```TypeScript
static unregisterPlugin(): void
```

提供将回调从SA（System Ability）侧注销的能力。 该接口可用于应用退出时注销回调释放资源，确保回调能力正确释放。 > **说明：** > > unregisterPlugin将plugin从SA（System Ability）侧注销。

**Since:** 21

**Required permissions:** 

- API version21  to  24: ohos.permission.ENTERPRISE_ACCESS_DLP_FILE

- API version26.0.0 and later: ohos.permission.ENTERPRISE_ACCESS_DLP_FILE or ohos.permission.ACCESS_DLP_SERVICE

**System capability:** SystemCapability.Security.DataLossPrevention

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 19100001 | Invalid parameter value. |
| 19100002 | Credential service busy due to too many tasks or duplicate tasks. |
| 19100003 | Credential task time out. |
| 19100004 | Credential service error. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.DlpConnManager.unregisterPlugin();

```

