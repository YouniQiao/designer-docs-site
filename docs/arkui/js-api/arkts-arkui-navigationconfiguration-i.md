# NavigationConfiguration

Navigation configuration options.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stackSizeLimit

```TypeScript
stackSizeLimit?: number
```

Navigation page stack size limit.

Description:
- Limits to maximum number of active page nodes in Navigation page stack.
- When limit is exceeded, oldest page nodes are automatically destroyed
in FIFO (First-In-First-Out) order.
- NavPathInfo of pages is completely retained, supporting page recreation.
- value <=0 No limit on page stack size (default value).
- value >0 Limit stack size to specified value.

**Type:** number

**Default:** 0 (nolimit)

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

