import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const theme = createTheme({
  typography: {
    color: "color:var(--color-base)",
    fontSize: 15,
  },
});

const slotProps = {
  leftArrowIcon: { fontSize: "large" },
  rightArrowIcon: { fontSize: "large" },
  previousIconButton: {
    size: "medium",
  },
  nextIconButton: {
    size: "medium",
  },
};

export default function DateTimePickerComponent({ setDateTime }) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack
          spacing={2}
          sx={{ width: "100%" }}
          alignItems="flex-end"
          justifyContent={"space-between"}
        >
          <DateCalendar
            autoFocus={true}
            sx={{
              width: "100%",
              "& .MuiDayCalendar-weekContainer": {
                marginTop: "8px",
                marginBottom: "8px",
                justifyContent: "space-evenly",

                fontSize: 23,
              },
              "& .MuiTypography-caption": {
                color: "color:var(--color-base)",
              },
              "& .MuiButtonBase-root": {
                color: "color:var(--color-base)",
                fontSize: 15,
              },
              "& .MuiDayCalendar-header": {
                color: "color:var(--color-base)",
                justifyContent: "space-evenly",
              },
              "& .css-fl2mo3-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)":
                {
                  border: "2px solid #ffc107", // Set the border color
                },
              // "& .Mui-selected,.Mui-selected:hover": {
              //   backgroundColor: "gold",
              // },
            }}
            slotProps={slotProps}
            disableFuture={false} //o anki günden sonrakileri kapatır
            disableHighlightToday={false} //o anki günü belli eder çerçeveyle
            disablePast={true} //geçmiş günleri disabled yapar güzel özellik
            loading={false} // adı üstünde bir süre sonra false çekilebilir
            onChange={(value) => {
              setDateTime(value.$d);
            }}
            reduceAnimations={false}
            yearsPerRow={3}
          />
        </Stack>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

DateTimePickerComponent.propTypes = {
  setDateTime: PropTypes.func,
};
