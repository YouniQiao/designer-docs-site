# setAppDragSwitchState

## setAppDragSwitchState

```TypeScript
function setAppDragSwitchState(enabled: boolean, bundleName: string): void
```

控制统一拖拽适配应用开关。

**Since:** 18

**System capability:** SystemCapability.Msdp.DeviceStatus.Drag

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | 设置开关状态。 false：关闭，true：开启。 |
| bundleName | string | Yes | 设置指定应用包名。长度取值范围（0, 128]。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2.Incorrect parameter types.3.Parameter verification failed. |

