# getWant

## getWant

```TypeScript
function getWant(agent: WantAgent, callback: AsyncCallback<Want>): void
```

获取WantAgent中的Want(callback形式)。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent#getWant

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | Indicates the {@link WantAgent} WantAgent信息。 |
| callback | AsyncCallback&lt;Want> | Yes | 获取WantAgent中的Want的回调方法。 |

## getWant

```TypeScript
function getWant(agent: WantAgent): Promise<Want>
```

获取WantAgent中的Want(Promise形式)。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent#getWant

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | WantAgent信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Want> | 以Promise形式返回Want。 |

