# MovingPhotoBadgeStateChangedCallback

```TypeScript
export type MovingPhotoBadgeStateChangedCallback = 
  (uri: string, state: photoAccessHelper.MovingPhotoBadgeStateType) => void
```

The callback of onMovingPhotoBadgeStateChanged event

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 |  |
| state | photoAccessHelper.MovingPhotoBadgeStateType | 是 |  |

