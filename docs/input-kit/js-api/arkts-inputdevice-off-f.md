# off

## off('change')

```TypeScript
function off(type: 'change', listener?: Callback<DeviceListener>): void
```

取消监听输入设备的热插拔事件。在应用退出前调用，取消监听。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'change' | Yes | 输入设备的事件类型，固定值为'change'。 |
| listener | Callback&lt;DeviceListener> | No | 取消监听的回调函数，缺省时取消所有输入设备热插拔事件的监听。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

