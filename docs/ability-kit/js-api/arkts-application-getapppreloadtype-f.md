# getAppPreloadType

## getAppPreloadType

```TypeScript
export function getAppPreloadType(): AppPreloadType
```

获取应用当前进程的预加载类型。 > **说明：** > > - 只有在进程首次执行[AbilityStage.onCreate](arkts-abilitystage-c.md#onCreate)完成之前调用该接口，才可以返回真实的预 > 加载类型。 > > - AbilityStage创建完成后，应用的预加载数据将被清除，调用该接口将返回UNSPECIFIED，无法获取到真实的预加载类型。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| AppPreloadType | 应用当前进程的预加载类型。 |

