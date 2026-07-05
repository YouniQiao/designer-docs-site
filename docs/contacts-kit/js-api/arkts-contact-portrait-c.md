# Portrait

联系人的头像类。 > **说明：** > > 从API version 22开始，支持通过uri和[PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)格式设置联系人头像资源(暂不支持通过 > [addContactViaUI]contact.addContactViaUI、 > [saveToExistingContactViaUI]contact.saveToExistingContactViaUI接口设置)。 > > uri为可访问的联系人头像文件地址，[PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)为通过联系人头像资源生成的 > [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)对象。 > > 从API version 22开始，支持通过uri格式读取联系人头像资源，该格式仅支持以 > [fs.open](../../apis-core-file-kit/arkts-apis/arkts-file-fs-open-f.md#open-1)方式打开，无法直接在Image组件内显示，需读取后转换为 > [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)格式显示。

**Since:** 7

**System capability:** SystemCapability.Applications.ContactsData

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

## photo

```TypeScript
photo?: image.PixelMap
```

PixelMap格式的联系人头像。

**Type:** image.PixelMap

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## uri

```TypeScript
uri: string
```

uri格式联系人头像。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

