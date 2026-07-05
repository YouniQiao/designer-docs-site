# Usage

```TypeScript
type Usage = 'unknown' | 'alarm' | 'ring' | 'notification' | 'communication' |
  'touch' | 'media' | 'physicalFeedback' | 'simulateReality'
```

Enumerates the vibration scenarios. <!--RP1End-->

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.MiscDevice

| 类型 | 说明 |
| --- | --- |
| 'unknown' | Unknown scenario, with the lowest priority. This parameter has a fixed value of  unknown. |
| 'alarm' | Vibration for alarms. This parameter has a fixed value of alarm. |
| 'ring' | Vibration for ringing. This parameter has a fixed value of ring. |
| 'notification' | Vibration for notification. This parameter has a fixed value of notification. |
| 'communication' | Vibration for communication. This parameter has a fixed value of  communication. |
| 'touch' | Vibration for touch. This parameter has a fixed value of touch. |
| 'media' | Vibration for media. This parameter has a fixed value of media. |
| 'physicalFeedback' | Vibration for physical feedback. This parameter has a fixed value of  physicalFeedback. |
| 'simulateReality' | Vibration for simulated reality. This parameter has a fixed value of  simulateReality. |

