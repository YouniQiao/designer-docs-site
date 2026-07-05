# off

## off('interfaceStateChange')

```TypeScript
function off(type: 'interfaceStateChange', callback?: Callback<InterfaceStateInfo>): void
```

Unregister a callback from the ethernet interface active state change.

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'interfaceStateChange' | Yes | Indicates Event name. |
| callback | Callback&lt;InterfaceStateInfo> | No | Including iface Indicates the ethernet interface,  and active Indicates whether the interface is active. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |

**Example**

```TypeScript
import { ethernet } from '@kit.NetworkKit';

ethernet.off('interfaceStateChange');

```

