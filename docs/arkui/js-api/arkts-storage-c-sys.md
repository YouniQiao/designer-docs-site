# Storage

定义存储的基类

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## clear

```TypeScript
clear(): void
```

当数据被清除时调用此方法。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## constructor

```TypeScript
constructor(needCrossThread?: boolean, file?: string)
```

构造函数参数。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| needCrossThread | boolean | No |  |
| file | string | No |  |

## delete

```TypeScript
delete(key: string): void
```

当数据被删除时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes |  |

## get

```TypeScript
get(key: string): string | undefined
```

获取数据时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

## set

```TypeScript
set(key: string, val: any): void
```

设置时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes |  |
| val | any | Yes |  |

