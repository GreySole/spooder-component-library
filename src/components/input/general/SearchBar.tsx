import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTheme } from "../../../context/ThemeContext";

interface SearchBarProps {
  placeholder?: string;
  width?: string;
  value: string;
  onSearch: (searchText: string) => void;
}

export default function SearchBar({
  placeholder,
  width,
  value,
  onSearch,
}: SearchBarProps) {
  const { themeVariables } = useTheme();
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          color: themeVariables.isDarkTheme ? "white" : "black",
          marginTop: "10px",
          marginLeft: "10px",
        }}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
      </div>
      <input
        type="search"
        placeholder={placeholder}
        style={{ paddingLeft: "40px", width: width }}
        value={value}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          onSearch(e.target.value)
        }
      />
    </div>
  );
}
