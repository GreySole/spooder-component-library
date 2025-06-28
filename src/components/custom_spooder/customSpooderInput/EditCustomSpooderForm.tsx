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

  useEffect(() => {
    setCustomSpooder(parts);
  }, [parts]);

  return <Box flexFlow="row wrap">{children}</Box>;
}
