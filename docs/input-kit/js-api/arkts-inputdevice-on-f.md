# on

## on('change')

```TypeScript
function on(type: 'change', listener: Callback<DeviceListener>): void
```

注册监听输入设备的热插拔事件，使用时需连接鼠标、键盘、触摸屏等外部设备。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'change' | Yes | 输入设备的事件类型，固定值为'change'。 |
| listener | Callback&lt;DeviceListener> | Yes | 回调函数，返回输入设备热插拔事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

