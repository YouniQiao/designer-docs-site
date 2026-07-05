# ModalityType

```TypeScript
enum ModalityType
```

子窗口模态类型枚举。

**Since:** 14

**System capability:** SystemCapability.Window.SessionManager

## WINDOW_MODALITY

```TypeScript
WINDOW_MODALITY = 0
```

当仅需要其父级窗口不响应用户操作时，可选此参数。

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## APPLICATION_MODALITY

```TypeScript
APPLICATION_MODALITY = 1
```

除其父级窗口外还需要该应用其他实例的窗口不响应用户操作时，可选此参数。 该枚举在支持并处于[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的设备上可正常调用；在支持但不处于 [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的设备及不支持 [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的设备上调用返回801错误码。

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

