# requestFocus

## requestFocus

```TypeScript
function requestFocus(value: string): boolean
```

方法语句中可使用的全局接口，调用此接口可以主动让焦点在下一帧渲染时转移至参数指定的组件上。 如果需要指定组件立刻获焦，推荐使用FocusController中的焦点同步转移接口[requestFocus](arkts-focuscontroller-c.md#requestFocus)。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | 目标组件使用接口key(value: string)或id(value: string)绑定的字符串。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回值表示是否成功给目标组件申请到焦点。若参数指向的目标组件存在且已挂载组件树，并具备获焦能力，则返回true，否则返回false。 |

