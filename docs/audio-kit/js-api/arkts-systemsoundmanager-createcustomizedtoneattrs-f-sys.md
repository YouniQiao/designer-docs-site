# createCustomizedToneAttrs

## createCustomizedToneAttrs

```TypeScript
function createCustomizedToneAttrs(): ToneAttrs
```

Create customized tone attributes.

**Since:** 12

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| ToneAttrs | Tone attributes created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |

**Example**

```TypeScript
let toneAttrs: systemSoundManager.ToneAttrs = systemSoundManager.createCustomizedToneAttrs();

```

