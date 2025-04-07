import React, { ReactNode, useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import Box from "../../layout/Box";
import { useTheme } from "../../../context/ThemeContext";

interface EditCustomSpooderFormProps {
  children: ReactNode;
}

export default function EditCustomSpooderForm({
  children,
}: EditCustomSpooderFormProps) {
  const { control } = useFormContext();
  const { setCustomSpooder } = useTheme();
  const parts = useWatch({ control, name: "parts" });
  const colors = useWatch({ control, name: "colors" });

  useEffect(() => {
    setCustomSpooder(parts, colors);
  }, [parts, colors]);

  return <Box flexFlow="row wrap">{children}</Box>;
}
