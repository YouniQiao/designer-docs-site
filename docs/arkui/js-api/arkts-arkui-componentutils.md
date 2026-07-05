# @ohos.arkui.componentUtils

提供获取组件绘制区域坐标和大小的能力。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { componentUtils } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[getItemsInShapePath](arkts-componentutils-getitemsinshapepath-f-sys.md#getItemsInShapePath-1) | 获取位于选定区域内的图像对象。 |
| [getRectangleById](arkts-componentutils-getrectanglebyid-f.md#getRectangleById-1) | 根据组件ID获取组件实例对象，通过组件实例对象将获取的坐标位置和大小同步返回给开发者。 > **说明：** > > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的 > [getComponentUtils]{@link @ohos.arkui.UIContext:UIContext#getComponentUtils}方法获取当前UI上下 > 文关联的[ComponentUtils]{@link @ohos.arkui.UIContext:ComponentUtils}对象。在目标组件布局完成后，通过该接口能够获取组件坐标和尺寸信息。建议在 > [布局回调]{@link @ohos.arkui.inspector:inspector}中使用该接口。如果组件动态创建但未挂载组件树，则无法通过该接口获取正常的组件信息。因为组件在未挂载组件树的情况下，一般未经过UI框架正常 > 的测量与布局，此时请确保组件正常挂载组件树后再尝试获取组件信息。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ComponentInfo](arkts-componentutils-componentinfo-i.md) | 组件大小、位置、平移缩放旋转及仿射矩阵属性信息。 |
| <!--DelRow-->[GetItemsInShapePathParams](arkts-componentutils-getitemsinshapepathparams-i-sys.md) | 需要获取图像对象时设置的图像选项。 |
| <!--DelRow-->[ImageItem](arkts-componentutils-imageitem-i-sys.md) | 带有布局信息的图像对象。 |
| [Offset](arkts-componentutils-offset-i.md) | 定义坐标属性。 |
| [RotateResult](arkts-componentutils-rotateresult-i.md) | 旋转信息。 |
| <!--DelRow-->[Rotation2D](arkts-componentutils-rotation2d-i-sys.md) | 描述二维空间中的旋转，可以通过旋转角度和旋转中心来定义。 |
| [ScaleResult](arkts-componentutils-scaleresult-i.md) | 缩放信息。 |
| [Size](arkts-componentutils-size-i.md) | 定义尺寸属性。 |
| [TranslateResult](arkts-componentutils-translateresult-i.md) | 平移信息。 |

### Types

| Name | Description |
| --- | --- |
| [Matrix4Result](arkts-componentutils-matrix4result-t.md) | 列优先四阶矩阵。 |

