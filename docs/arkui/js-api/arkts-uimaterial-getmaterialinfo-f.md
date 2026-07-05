# getMaterialInfo

## getMaterialInfo

```TypeScript
function getMaterialInfo(): MaterialInfo
```

获取当前应用的材质配置信息。返回的配置信息来自应用在[module.json5](docroot://quick-start/module-configuration-file.md)中配置的metadata。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| MaterialInfo | 返回当前应用的材质配置信息，包含材质使能状态和材质类型。 |

