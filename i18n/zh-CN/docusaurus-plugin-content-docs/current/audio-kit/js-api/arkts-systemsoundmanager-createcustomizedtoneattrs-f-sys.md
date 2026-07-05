# createCustomizedToneAttrs

## createCustomizedToneAttrs

```TypeScript
function createCustomizedToneAttrs(): ToneAttrs
```

Create customized tone attributes.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ToneAttrs | Tone attributes created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
let toneAttrs: systemSoundManager.ToneAttrs = systemSoundManager.createCustomizedToneAttrs();

```

