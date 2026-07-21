# IMonitor

Define IMonitor interface

**Since:** 23

<!--Device-unnamed-declare interface IMonitor--><!--Device-unnamed-declare interface IMonitor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="value"></a>
## value

```TypeScript
value<T>(path?: string): IMonitorValue<T> | undefined
```

Return the pair of the value before the most recent change and current value for given path.If path does not exist, return undefined; If path is not specified, return the value pair corresponding to the first path in dirty.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-IMonitor-value<T>(path?: string): IMonitorValue<T> | undefined--><!--Device-IMonitor-value<T>(path?: string): IMonitorValue<T> | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [IMonitorValue](arkts-arkui-imonitorvalue-i.md)&lt;T&gt; | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

## dirty

```TypeScript
dirty: Array<string>
```

Array of changed paths(keys)

**Type:** Array&lt;string&gt;

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-IMonitor-dirty: Array<string>--><!--Device-IMonitor-dirty: Array<string>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

