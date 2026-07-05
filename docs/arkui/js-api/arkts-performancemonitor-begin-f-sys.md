# begin

## begin

```TypeScript
function begin(scene: string, startInputType: ActionType, note?: string): void
```

用于标记用户场景开始，用户场景开始时调用此接口。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scene | string | Yes | 用户场景id。字符串长度无限制，建议控制在255个字符以内，格式推荐字母大写且用下划线连接，例如LAUNCHER_APP_LAUNCH_FROM_ICON。 |
| startInputType | ActionType | Yes | 用户场景触发模式。 |
| note | string | No | 用户场景备注信息。字符串长度无限制，建议控制在255个字符以内，可以空缺不填，填写后性能指标上报会携带备注信息，不填无影响。 |

**Example**

```TypeScript
performanceMonitor.begin("LAUNCHER_APP_LAUNCH_FROM_ICON", performanceMonitor.ActionType.LAST_UP, "APP_START_BEGIN");

```

