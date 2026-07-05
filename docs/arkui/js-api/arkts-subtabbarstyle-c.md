# SubTabBarStyle

��ҳǩ��ʽ���򿪺����л�ҳǩʱ�Ქ����ת������

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## board

```TypeScript
board(value: BoardStyle): SubTabBarStyle
```

����ѡ����ҳǩ�ı�������ҳǩ�ı��������ˮƽģʽ����Ч��

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BoardStyle | Yes | ѡ����ҳǩ�ı�������� |

**Return value:**

| Type | Description |
| --- | --- |
| SubTabBarStyle | ����SubTabBarStyle�������� |

## constructor

```TypeScript
constructor(content: ResourceStr)
```

SubTabBarStyle�Ĺ��캯����

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | ResourceStr | Yes | ҳǩ�ڵ��������ݡ� |

## constructor

```TypeScript
constructor(content: ResourceStr | ComponentContent)
```

SubTabBarStyle�Ĺ��캯����֧��ComponentContent�����Զ������ݡ�

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | ResourceStr \| ComponentContent | Yes | ҳǩ�ڵ����ݡ� ˵���� 1.�Զ������ݲ�֧��labelStyle���ԡ� 2.�Զ������ݳ�  ��ҳǩ��Χ������ʾ�������֡� 3.�Զ�������С��ҳǩ��Χ�������ж��롣 4.�Զ��������쳣���޿�����ʾ���������ʾ�հס� |

## id

```TypeScript
id(value: string): SubTabBarStyle
```

������ҳǩ��id��

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | ��ҳǩ��id�� |

**Return value:**

| Type | Description |
| --- | --- |
| SubTabBarStyle | ����SubTabBarStyle�������� |

## indicator

```TypeScript
indicator(value: IndicatorStyle): SubTabBarStyle
```

����ѡ����ҳǩ���»��߷����ҳǩ���»��߷�����ˮƽģʽ����Ч��

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | IndicatorStyle | Yes | ѡ����ҳǩ���»��߷����� |

**Return value:**

| Type | Description |
| --- | --- |
| SubTabBarStyle | ����SubTabBarStyle�������� |

## indicator

```TypeScript
indicator(value: IndicatorStyle | DrawableTabBarIndicator): SubTabBarStyle
```

����ѡ����ҳǩ���»��߷����[indicator](arkts-subtabbarstyle-c.md#indicator)��ȣ�������ͼƬ��ʽ���»��߷��ͼƬ����ʾЧ������ [ImageFit.Cover]ImageFit����ҳǩ���»��߷�����ˮƽģʽ����Ч��

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | IndicatorStyle \| DrawableTabBarIndicator | Yes | ѡ����ҳǩ���»��߷����� IndicatorStyle��һ����ʽ���»�����ʽ��  DrawableTabBarIndicator��ͼƬ��ʽ���»�����ʽ�� |

**Return value:**

| Type | Description |
| --- | --- |
| SubTabBarStyle | ����SubTabBarStyle�������� |

## labelStyle

```TypeScript
labelStyle(value: LabelStyle): SubTabBarStyle
```

������ҳǩ��label�ı����������ʽ��

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LabelStyle | Yes | ��ҳǩ��label�ı����������ʽ���� |

**Return value:**

| Type | Description |
| --- | --- |
| SubTabBarStyle | ����SubTabBarStyle�������� |

## of

```TypeScript
static of(content: ResourceStr): SubTabBarStyle
```

SubTabBarStyle�ľ�̬���캯����

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | ResourceStr | Yes | ҳǩ�ڵ��������ݡ� |

**Return value:**

| Type | Description |
| --- | --- |
| SubTabBarStyle | ���ش�����SubTabBarStyle���� |

## of

```TypeScript
static of(content: ResourceStr | ComponentContent): SubTabBarStyle
```

SubTabBarStyle�ľ�̬���캯����֧��ComponentContent�����Զ������ݡ�

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | ResourceStr \| ComponentContent | Yes | ҳǩ�ڵ����ݡ�֧��ComponentContent�����Զ������ݡ� ˵���� 1.�Զ������ݲ�֧��  labelStyle���ԡ� 2.�Զ������ݳ���ҳǩ��Χ������ʾ�������֡� 3.�Զ�������С��ҳǩ��Χ�������ж��롣 4.�Զ��������쳣���޿�����ʾ���������ʾ�հס� |

**Return value:**

| Type | Description |
| --- | --- |
| SubTabBarStyle | ���ش�����SubTabBarStyle���� |

## padding

```TypeScript
padding(value: Padding | Dimension): SubTabBarStyle
```

������ҳǩ���ڱ߾����ԣ���֧�ְٷֱ����ã���ʹ��Dimensionʱ���ĸ������ڱ߾�ͬʱ��Ч��

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Padding \| Dimension | Yes | ��ҳǩ���ڱ߾����ԡ� ȡֵ��Χ��[0, +��] �쳣ֵʱȡĬ��ֵ�� Ĭ��ֵ��{left:8.0vp,right:8.0vp,  top:17.0vp,bottom:18.0vp} |

**Return value:**

| Type | Description |
| --- | --- |
| SubTabBarStyle | ����SubTabBarStyle�������� |

## padding

```TypeScript
padding(padding: LocalizedPadding): SubTabBarStyle
```

������ҳǩ���ڱ߾����ԣ�֧�־�����������֧�ְٷֱ����ã���

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| padding | LocalizedPadding | Yes | ��ҳǩ���ڱ߾����ԡ� �쳣ֵʱȡĬ��ֵ�� ȡֵ��Χ��[0, +��] �쳣ֵʱȡĬ��ֵ�� Ĭ��ֵ��{start:  LengthMetrics.vp(8),end:LengthMetrics.vp(8), top:LengthMetrics.vp(17),bottom:LengthMetrics.vp(18)} |

**Return value:**

| Type | Description |
| --- | --- |
| SubTabBarStyle | ����SubTabBarStyle�������� |

## selectedMode

```TypeScript
selectedMode(value: SelectedMode): SubTabBarStyle
```

����ѡ����ҳǩ����ʾ��ʽ����ҳǩ����ʾ��ʽ����ˮƽģʽ����Ч��

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SelectedMode | Yes | ѡ����ҳǩ����ʾ��ʽ�� Ĭ��ֵ��SelectedMode.INDICATOR |

**Return value:**

| Type | Description |
| --- | --- |
| SubTabBarStyle | ����SubTabBarStyle�������� |

