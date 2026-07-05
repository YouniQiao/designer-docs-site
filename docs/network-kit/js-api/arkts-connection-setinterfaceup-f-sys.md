# setInterfaceUp

## setInterfaceUp

```TypeScript
function setInterfaceUp(ifaceName: string): Promise<void>
```

Set a specific interface up.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONNECTIVITY_INTERNAL

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ifaceName | string | Yes | the name of the interface to set up.  Value range:(0,1024]  Name of the actual network adapter to be started  If the network adapter exists, try to up the network adapter.  If the network adapter does not exist or does not meet the up condition, the network adapter fails to be up.  The network adapter exists in the kernel, and the network adapter meets the up condition.  None  None |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 2100003 | System internal error. |

