import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const minDistance = 10;

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([100, 500]);

  const handleChange = (
    event: Event,
    newValue: number[],
    activeThumb: number,
  ) => {
    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 2000 - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 250, margin: "10px auto" }}>
      <Slider
        min={100}
        max={5000}
        step={10}
        value={value}
        onChange={handleChange}
        disableSwap
        sx={{
          color: "#FE5F00",
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{value[0]}</span> {/* min */}
        <span>{value[1]}</span> {/* max */}
      </div>
    </Box>
  );
}
