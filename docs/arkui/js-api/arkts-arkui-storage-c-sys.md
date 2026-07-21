# Storage (System API)

Defines the base class of storage.

**Since:** 7

<!--Device-unnamed-declare class Storage--><!--Device-unnamed-declare class Storage-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

<a id="clear"></a>
## clear

```TypeScript
clear(): void
```

Called when data is cleared.

**Since:** 7

<!--Device-Storage-clear(): void--><!--Device-Storage-clear(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

<a id="constructor"></a>
## constructor

```TypeScript
constructor(needCrossThread?: boolean, file?: string)
```

Constructor parameters.

**Since:** 7

<!--Device-Storage-constructor(needCrossThread?: boolean, file?: string)--><!--Device-Storage-constructor(needCrossThread?: boolean, file?: string)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| needCrossThread | boolean | No |  |
| file | string | No |  |

<a id="delete"></a>
## delete

```TypeScript
delete(key: string): void
```

Called when data is deleted.

**Since:** 7

<!--Device-Storage-delete(key: string): void--><!--Device-Storage-delete(key: string): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes |  |

<a id="get"></a>
## get

```TypeScript
get(key: string): string | undefined
```

Called when data is obtained.

**Since:** 7

<!--Device-Storage-get(key: string): string | undefined--><!--Device-Storage-get(key: string): string | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | @syscap SystemCapability.ArkUI.ArkUI.Full@systemapi@FaAndStageModel |

<a id="set"></a>
## set

```TypeScript
set(key: string, val: any): void
```

Called when setting.

**Since:** 7

<!--Device-Storage-set(key: string, val: any): void--><!--Device-Storage-set(key: string, val: any): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes |  |
| val | any | Yes |  |

