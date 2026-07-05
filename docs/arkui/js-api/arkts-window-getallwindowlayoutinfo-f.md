# getAllWindowLayoutInfo

## getAllWindowLayoutInfo

```TypeScript
function getAllWindowLayoutInfo(displayId: long): Promise<Array<WindowLayoutInfo>>
```

获取指定屏幕上可见的窗口布局信息数组，其中返回的每个Rect的宽、高是已经过缩放计算后的值，按当前窗口层级排列，层级最高的对应数组index为0，使用Promise异步回调。

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | long | Yes | 需要获取窗口布局信息的displayId，该参数应为整数，且为当前实际存在屏幕的displayId，可以通过窗口属性  [WindowProperties](arkts-window-windowproperties-i.md#WindowProperties)获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;WindowLayoutInfo>> | Promise对象。返回获取到的窗口布局信息对象数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported.  Function getAllWindowLayoutInfo can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. [since 15 - 18] |
| 1300003 | This window manager service works abnormally.  Possible cause: Internal task error. |

## getAllWindowLayoutInfo

```TypeScript
function getAllWindowLayoutInfo(displayId: long, option?: WindowInfoOptions): Promise<Array<WindowLayoutInfo>>
```

根据option指定的过滤条件获取指定屏幕上可见的窗口布局信息数组，其中返回的每个Rect的宽、高是已经过缩放计算后的值，按当前窗口层级排列，层级最高的对应数组index为0，使用Promise异步回调。当未传入option或其中 的字段都为默认值时，当前接口与[getAllWindowLayoutInfo]window.getAllWindowLayoutInfo(displayId: long)等价。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | long | Yes | 需要获取窗口布局信息的displayId，该参数应为整数，且为当前实际存在屏幕的displayId，可以通过窗口属性  [WindowProperties](arkts-window-windowproperties-i.md#WindowProperties)获取。 |
| option | WindowInfoOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;WindowLayoutInfo>> | Promise对象。返回获取到的窗口布局信息对象数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Function getAllWindowLayoutInfo can not work correctly due to limited device capabilities. |
| 1300003 | This window manager service works abnormally.  Possible cause: Internal task error. |
| 1300016 | Parameter error. Possible cause: 1. Invalid parameter range. |

