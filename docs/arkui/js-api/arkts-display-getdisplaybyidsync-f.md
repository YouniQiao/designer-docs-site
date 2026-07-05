# getDisplayByIdSync

## getDisplayByIdSync

```TypeScript
function getDisplayByIdSync(displayId: long): Display
```

根据displayId获取对应的Display对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | long | Yes | 屏幕ID。该参数仅支持整数输入，该参数大于等于0。需要确保displayId准确才能成功获取到对应结果。可以通过  [WindowProperties](arkts-window-windowproperties-i.md#WindowProperties)的displayId属性获取到准确的displayId作为入参。 |

**Return value:**

| Type | Description |
| --- | --- |
| Display | 返回displayId对应的Display对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 1400003 | This display manager service works abnormally. Possible causes:  Display is null, display id corresponding display does not exist. |

**Example**

```TypeScript
let displayClass: display.Display | null = null;

try {
  // Use the value of the displayId property in WindowProperties as the input parameter.
  let displayId = 0; 
  displayClass = display.getDisplayByIdSync(displayId);
} catch (exception) {
  console.error(`Failed to get display. Code: ${exception.code}, message: ${exception.message}`);
}

```

