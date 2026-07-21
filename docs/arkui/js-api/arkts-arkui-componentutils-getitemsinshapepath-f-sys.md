# getItemsInShapePath (System API)

## Modules to Import

```TypeScript
import { componentUtils } from '@kit.ArkUI';
```

<a id="getitemsinshapepath"></a>
## getItemsInShapePath

```TypeScript
function getItemsInShapePath(value: GetItemsInShapePathParams): Array<ImageItem>
```

Get the image objects located within the selected area.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-componentUtils-function getItemsInShapePath(value: GetItemsInShapePathParams): Array<ImageItem>--><!--Device-componentUtils-function getItemsInShapePath(value: GetItemsInShapePathParams): Array<ImageItem>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [GetItemsInShapePathParams](arkts-arkui-componentutils-getitemsinshapepathparams-i-sys.md) | Yes | options to get images in shapePath. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;ImageItem&gt; | Returns the image objects located within the selected area. |

