# TTS

Provides methods for setting information about text-to-speech (TTS) conversion, including the pitch, speech rate, engine, and plug-ins.

**起始版本：** 7

**系统能力：** SystemCapability.Applications.Settings.Core

## 导入模块

```TypeScript
import { settings } from '@kit.BasicServicesKit';
```

## 汇总

### 常量

| 名称 | 描述 |
| --- | --- |
| [DEFAULT_TTS_PITCH](arkts-tts-con.md#DEFAULT_TTS_PITCH) | Indicates the default pitch of the text-to-speech (TTS) engine. <p>100 = 1x. If the value is set to {@code 200}, the frequency is twice the normal sound frequency. |
| [DEFAULT_TTS_RATE](arkts-tts-con.md#DEFAULT_TTS_RATE) | Indicates the default speech rate of the TTS engine. 100 = 1x. |
| [DEFAULT_TTS_SYNTH](arkts-tts-con.md#DEFAULT_TTS_SYNTH) | Indicates the default TTS engine. |
| [ENABLED_TTS_PLUGINS](arkts-tts-con.md#ENABLED_TTS_PLUGINS) | Indicates the list of activated plug-in packages used for TTS. Multiple plug-in packages are separated by spaces. |

