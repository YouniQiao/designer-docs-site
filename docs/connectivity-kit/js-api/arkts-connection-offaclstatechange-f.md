# offAclStateChange

## offAclStateChange

```TypeScript
function offAclStateChange(callback?: Callback<AclStateResult>): void
```

Unsubscribe the event of acl state changed from a remote device. If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and * ohos.permission.GET_BLUETOOTH_PEERS_MAC)

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AclStateResult> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported.  Failed to call the API when the short-range chip is not inserted on 2in1 device. |
| 2900099 | Internal system error. For example, IPC error.  Detailed error messages can be used to assist in locating the problem. |

**Example**

```TypeScript
function AclStateChangeEvent(aclStateResult: connection.AclStateResult) {
    console.info('acl state changed:'+ JSON.stringify(aclStateResult));
}
try {
    connection.offAclStateChange(AclStateChangeEvent);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

