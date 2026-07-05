# end

## end

```TypeScript
function end(scene: string): void
```

用于标记用户场景结束，用户场景结束时调用此接口。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scene | string | Yes | 用户场景id，与begin配对严格保持一致，否则本次场景监测无效。 |

**Example**

```TypeScript
performanceMonitor.end("LAUNCHER_APP_LAUNCH_FROM_ICON");

```

