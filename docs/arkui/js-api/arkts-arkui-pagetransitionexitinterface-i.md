# PageTransitionExitInterface

Provide an interface to set transition style when a page exits.

**Inheritance/Implementation:** PageTransitionExitInterface extends [CommonTransition<PageTransitionExitInterface>](CommonTransition<PageTransitionExitInterface>)

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
(value: PageTransitionOptions): PageTransitionExitInterface
```

Sets the page exit animation.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PageTransitionOptions | Yes | pageTransition options |

**Return value:**

| Type | Description |
| --- | --- |
| PageTransitionExitInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

## onExit

```TypeScript
onExit(event: PageTransitionCallback): PageTransitionExitInterface
```

Invoked on a per-frame basis until the exit animation is complete, with the **progress** parameter changing from 0 to 1.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | PageTransitionCallback | Yes | Callback invoked on a per-frame basis until the exit animation iscomplete, with the **progress** parameter changing from 0 to 1.<br>**Since:** 18 |

**Return value:**

| Type | Description |
| --- | --- |
| PageTransitionExitInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

