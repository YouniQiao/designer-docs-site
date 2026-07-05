# getWindowsByCoordinate

## getWindowsByCoordinate

```TypeScript
function getWindowsByCoordinate(displayId: long, windowNumber?: int, x?: int, y?: int):
      Promise<Array<Window>>
```

查询本应用指定坐标下的可见窗口数组，按当前窗口层级排列，层级最高的窗口对应数组下标为0，使用Promise异步回调。

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | long | Yes | 查询窗口所在的displayId，该参数应为整数，传入非整数会忽略掉小数部分，可以在窗口属性  [WindowProperties](arkts-window-windowproperties-i.md#WindowProperties)中获取。 |
| windowNumber | int | No |  |
| x | int | No |  |
| y | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Window>> | Promise对象。返回获取到的窗口对象数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300003 | This window manager service works abnormally.  Possible cause: Internal task error. |

