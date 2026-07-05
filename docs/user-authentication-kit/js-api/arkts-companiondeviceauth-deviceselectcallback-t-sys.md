# DeviceSelectCallback

```TypeScript
type DeviceSelectCallback = (selectPurpose: int) => DeviceSelectResult
```

伴随设备选择回调函数类型。当系统需要用户选择伴随设备时（如添加模板或执行认证），会调用此回调，应用需返回用户选择的设备信息。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectPurpose | int | Yes | 选择目的。用于标识当前设备选择的意图，取值参见[SelectPurpose]companionDeviceAuth.SelectPurpose。  SELECT_ADD_DEVICE(1)表示选择添加模板的设备，SELECT_AUTH_DEVICE(2)表示选择认证设备。厂商可自定义扩展值（大于等于10000）。应用应根据选择目的返回相应的设备列表。 |

**Return value:**

| Type | Description |
| --- | --- |
| DeviceSelectResult | 设备选择结果。包含用户选择的设备信息列表（deviceKeys）和可选的扩展上下文（selectionContext）。 |

