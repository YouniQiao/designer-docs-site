# AutoStartupCallback

应用设置为开机自启动时的回调函数。

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## onAutoStartupOff

```TypeScript
onAutoStartupOff(info: AutoStartupInfo): void
```

取消应用开机自启动时调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | AutoStartupInfo | Yes | 取消开机自启动的应用组件信息。 |

## onAutoStartupOn

```TypeScript
onAutoStartupOn(info: AutoStartupInfo): void
```

应用设置为开机自启动时调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | AutoStartupInfo | Yes | 设置为开机自启动的应用组件信息。 |

