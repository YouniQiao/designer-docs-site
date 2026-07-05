# getSetting

## getSetting

```TypeScript
function getSetting(): InputMethodSetting
```

Input method setting

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| InputMethodSetting | the object of InputMethodSetting. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800007 | input method setter error. Possible cause:  create InputMethodSetting object failed. |

**Example**

```TypeScript
let inputMethodSetting: inputMethod.InputMethodSetting = inputMethod.getSetting();

```

