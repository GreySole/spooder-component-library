import React, { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FieldValues } from 'react-hook-form';
import { Properties } from 'csstype';

interface ButtonProps {
    className?: string;
    label?: string;
    width?: string;
    height?: string;
    disabled?: boolean;
    icon?: IconProp | string;
    iconSize?: string;
    iconPosition?: 'left' | 'right' | 'top' | 'bottom';
    color?: string;
    colorOnHover?: boolean;
    onClick: () => void;
}
declare function Button(props: ButtonProps): React.JSX.Element;

interface BoolSwitchProps$1 {
    key?: string;
    label?: string;
    value: boolean;
    onChange: (value: boolean) => void;
}
declare function BoolSwitch(props: BoolSwitchProps$1): React.JSX.Element;

interface ColorInputProps {
    label?: string;
    value: string;
    onChange: (color: string) => void;
}
declare function ColorInput(props: ColorInputProps): React.JSX.Element;

interface FileInputProps {
    label?: string;
    fileType: string;
    onChange: (files: FileList) => void;
}
declare function FileInput(props: FileInputProps): React.JSX.Element;

interface NumberInputProps$1 {
    key?: string;
    label?: string;
    precision?: number;
    value: number;
    onInput: (value: number) => void;
}
declare function NumberInput(props: NumberInputProps$1): React.JSX.Element;

interface RangeInputProps {
    label?: string;
    min: number;
    max: number;
    step?: number;
    value: number;
    showValue?: boolean;
    vertical?: boolean;
    onChange: (value: number) => void;
}
declare function RangeInput(props: RangeInputProps): React.JSX.Element;

interface FilterProps {
    label: string;
    icon: any;
    value: string;
}
interface SelectOption {
    label: string;
    value: string | number;
}
interface SpooderPet {
    parts: {
        bigeyeleft: string;
        bigeyeright: string;
        littleeyeleft: string;
        littleeyeright: string;
        fangleft: string;
        fangright: string;
        mouth: string;
        bodyleft: string;
        bodyright: string;
        shortlegleft: string;
        longlegleft: string;
        shortlegright: string;
        longlegright: string;
    };
    colors: {
        bigeyeleft: string;
        bigeyeright: string;
        littleeyeleft: string;
        littleeyeright: string;
        fangleft: string;
        fangright: string;
        mouth: string;
        bodyleft: string;
        bodyright: string;
        shortlegleft: string;
        shortlegright: string;
        longlegleft: string;
        longlegright: string;
    };
}
interface ThemeVariables {
    hue: number;
    saturation: number;
    isDarkTheme: boolean;
}
type StyleSizeType = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

interface SelectDropdownProps$1 {
    label?: string;
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
}
declare function SelectDropdown(props: SelectDropdownProps$1): React.JSX.Element;

interface TextAreaInputProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
}
declare function TextAreaInput(props: TextAreaInputProps): React.JSX.Element;

interface TextInputProps$3 {
    value: string;
    width?: string;
    label?: string;
    placeholder?: string;
    charLimit?: number;
    jsonFriendly?: boolean;
    password?: boolean;
    onInput?: (value: string) => void;
}
declare function TextInput(props: TextInputProps$3): React.JSX.Element;

interface BoolSwitchProps {
    formKey: string;
    label?: string;
}
declare function FormBoolSwitch(props: BoolSwitchProps): React.JSX.Element;

interface TextInputProps$2 {
    formKey: string;
    label?: string;
}
declare function FormCodeInput(props: TextInputProps$2): React.JSX.Element;

interface TextInputProps$1 {
    formKey: string;
    label?: string;
}
declare function FormColorInput(props: TextInputProps$1): React.JSX.Element;

interface NumberInputProps {
    formKey: string;
    label?: string;
    precision?: number;
}
declare function FormNumberInput(props: NumberInputProps): React.JSX.Element;

interface FormRangeInputProps {
    formKey: string;
    label?: string;
    min: number;
    max: number;
    step?: number;
    showValue?: boolean;
}
declare function FormRangeInput(props: FormRangeInputProps): React.JSX.Element;

interface SelectDropdownProps {
    formKey: string;
    label?: string;
    options: SelectOption[];
}
declare function FormSelectDropdown(props: SelectDropdownProps): React.JSX.Element;

interface FormTextAreaInputProps {
    formKey: string;
    label?: string;
}
declare function FormTextAreaInput(props: FormTextAreaInputProps): React.JSX.Element;

interface TextInputProps {
    formKey: string;
    width?: string;
    label?: string;
    placeholder?: string;
    charLimit?: number;
    jsonFriendly?: boolean;
    password?: boolean;
}
declare function FormTextInput(props: TextInputProps): React.JSX.Element;

declare function ResetButton(): React.JSX.Element;

interface SaveButtonProps {
    saveFunction: (form: FieldValues) => void;
}
declare function SaveButton(props: SaveButtonProps): React.JSX.Element;

interface ButtonRowButton {
    icon: any;
    iconSize: string;
    color?: string;
    isLink?: boolean;
    linkName?: string;
    link?: string;
    isActive?: boolean;
    onClick?: () => void;
}
interface ButtonRowProps {
    buttons: ButtonRowButton[];
}
declare function ButtonRow(props: ButtonRowProps): React.JSX.Element;

interface FilterButtonProps {
    options: FilterProps[];
    selectedOptions: string[];
    onChange: (selected: string[]) => void;
}
declare function FilterButton({ options, selectedOptions, onChange }: FilterButtonProps): React.JSX.Element;

interface ImageProps {
    src: string;
    width?: string;
    height?: string;
    alt?: string;
    fallbackIcon?: any;
    clip?: 'circle' | 'square';
}
declare function ImageFile({ src, width, height, alt, fallbackIcon, clip, }: ImageProps): React.JSX.Element;

interface LinkButtonProps {
    width?: string;
    className?: string;
    name?: string;
    label?: string;
    iconSize?: string;
    link: string;
    mode: 'newtab' | 'copy' | 'download';
    iconOnly?: boolean;
}
declare function LinkButton(props: LinkButtonProps): React.JSX.Element;

interface ModalPage {
    title: string;
    content: ReactNode;
}
interface ModalProps {
    title: string;
    pages: ModalPage[];
    footerContent: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}
declare function Modal({ title, pages, isOpen, onClose, footerContent }: ModalProps): React.JSX.Element | null;

interface PaginationProps {
    pageTitles: string[];
    currentPage: number;
    setCurrentPage: (page: number) => void;
    handleNext: () => void;
    handlePrevious: () => void;
    endAction?: () => void;
}
declare function Pagination(props: PaginationProps): React.JSX.Element;

interface SearchBarProps {
    placeholder?: string;
    onSearch: (searchText: string) => void;
}
declare function SearchBar({ placeholder, onSearch }: SearchBarProps): React.JSX.Element;

interface SliderProps {
    value: number;
    orientation: 'horizontal' | 'vertical';
    gradient: string;
    onChange: (value: number) => void;
}
declare const Slider: React.FC<SliderProps>;

interface ToggleGridProps {
    type: string;
    data: string[];
    selected: string[];
    onToggleChange: (type: String, key: String, value: Boolean) => void;
}
declare function ToggleGrid(props: ToggleGridProps): void;

interface BorderProps {
    children: ReactNode;
    borderTop?: boolean;
    borderRight?: boolean;
    borderBottom?: boolean;
    borderLeft?: boolean;
    borderColor?: string;
    borderWidth?: string;
    borderStyle?: string;
}
declare function Border(props: BorderProps): React.JSX.Element;

interface BoxProps {
    children: ReactNode;
    classes?: string[];
    width?: Properties['width'];
    height?: Properties['height'];
    flexFlow?: Properties['flexFlow'];
    alignItems?: Properties['alignItems'];
    justifyContent?: Properties['justifyContent'];
    overflow?: Properties['overflow'];
    padding?: StyleSizeType | string;
    paddingTop?: StyleSizeType | string;
    paddingRight?: StyleSizeType | string;
    paddingBottom?: StyleSizeType | string;
    paddingLeft?: StyleSizeType | string;
    margin?: StyleSizeType | string;
    marginTop?: StyleSizeType | string;
    marginRight?: StyleSizeType | string;
    marginBottom?: StyleSizeType | string;
    marginLeft?: StyleSizeType | string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
declare const _default: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLDivElement>>;

interface ColumnsProps {
    children: ReactNode;
    spacing: StyleSizeType;
    overflow?: Properties['overflow'];
    width?: Properties['width'];
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    padding?: StyleSizeType;
    paddingTop?: StyleSizeType;
    paddingRight?: StyleSizeType;
    paddingBottom?: StyleSizeType;
    paddingLeft?: StyleSizeType;
    margin?: StyleSizeType;
    marginTop?: StyleSizeType;
    marginRight?: StyleSizeType;
    marginBottom?: StyleSizeType;
    marginLeft?: StyleSizeType;
}
declare function Columns(props: ColumnsProps): React.JSX.Element;

interface ExpandableProps {
    label: string;
    children: ReactNode;
    fontSize?: StyleSizeType;
    forceOpen?: boolean;
}
declare function Expandable(props: ExpandableProps): React.JSX.Element;

interface StackProps {
    children: ReactNode;
    spacing: StyleSizeType;
    width?: Properties['width'];
    height?: Properties['height'];
    dividers?: boolean;
    padding?: StyleSizeType;
    paddingTop?: StyleSizeType;
    paddingRight?: StyleSizeType;
    paddingBottom?: StyleSizeType;
    paddingLeft?: StyleSizeType;
    margin?: StyleSizeType;
    marginTop?: StyleSizeType;
    marginRight?: StyleSizeType;
    marginBottom?: StyleSizeType;
    marginLeft?: StyleSizeType;
}
declare function Stack(props: StackProps): React.JSX.Element;

interface TypeFaceProps {
    children: ReactNode;
    color?: Properties['color'];
    fontSize?: StyleSizeType;
    fontWeight?: Properties['fontWeight'];
    textAlign?: Properties['textAlign'];
    fontFamily?: Properties['fontFamily'];
    lineHeight?: Properties['lineHeight'];
    letterSpacing?: Properties['letterSpacing'];
    textTransform?: Properties['textTransform'];
    textDecoration?: Properties['textDecoration'];
    whiteSpace?: Properties['whiteSpace'];
    wordBreak?: Properties['wordBreak'];
    wordSpacing?: Properties['wordSpacing'];
    textShadow?: Properties['textShadow'];
    textOverflow?: Properties['textOverflow'];
    userSelect?: Properties['userSelect'];
}
declare function TypeFace({ children, ...styles }: TypeFaceProps): React.JSX.Element;

declare function CircleLoader(): React.JSX.Element;

interface FormLoaderProps {
    numRows?: number;
    width?: string;
}
declare function FormLoader({ numRows, width }: FormLoaderProps): React.JSX.Element;

interface ThemeProviderProps {
    theme: ThemeVariables;
    spooder: SpooderPet;
    children: ReactNode;
}
declare function ThemeProvider({ theme, spooder, children }: ThemeProviderProps): React.JSX.Element;

export { BoolSwitch, Border, _default as Box, Button, ButtonRow, CircleLoader, ColorInput, Columns, Expandable, FileInput, FilterButton, FormBoolSwitch, FormCodeInput, FormColorInput, FormLoader, FormNumberInput, FormRangeInput, FormSelectDropdown, FormTextAreaInput, FormTextInput, ImageFile, LinkButton, Modal, NumberInput, Pagination, RangeInput, ResetButton, SaveButton, SearchBar, SelectDropdown, Slider, Stack, TextAreaInput, TextInput, ThemeProvider, ToggleGrid, TypeFace };
