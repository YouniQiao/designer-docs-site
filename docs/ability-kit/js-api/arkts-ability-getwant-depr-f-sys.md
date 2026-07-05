# getWant (System API)

## getWant

```TypeScript
function getWant(agent: WantAgent, callback: AsyncCallback<Want>): void
```

Obtains the {@link Want} of an {@link WantAgent}.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getWant

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | Indicates the {@link WantAgent} whose UID is to be obtained. |
| callback | AsyncCallback&lt;Want&gt; | Yes | Obtain the callback method for Want in WantAgent. |


## getWant

```TypeScript
function getWant(agent: WantAgent): Promise<Want>
```

Obtains the {@link Want} of an {@link WantAgent}.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getWant

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | Indicates the {@link WantAgent} whose UID is to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Want&gt; | Returns the {@link Want} of the {@link WantAgent}. |

