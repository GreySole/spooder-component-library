interface ToggleGridProps {
    type: string;
    data: string[];
    selected: string[];
    onToggleChange: (type: String, key: String, value: Boolean) => void;
}
export default function ToggleGrid(props: ToggleGridProps): void;
export {};
