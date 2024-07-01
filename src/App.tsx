import Button from "keepa-kit/components/core/Button";
import Typography from "keepa-kit/components/core/Typography";
import ThemeProvider from "keepa-kit/theme/ThemeProvider";
import createCustomTheme from "keepa-kit/theme/createCustomTheme";
import React, { useEffect, useRef } from "react";

export {};
function App() {
  const [state, setState] = React.useState(false);

  const buttonRef = useRef(null);

  const theme = createCustomTheme({});

  // const rtlCache = createCache({
  //   key: "muirtl",
  //   stylisPlugins: [prefixer, rtlPlugin],
  // });

  useEffect(() => {
    console.log(buttonRef);
  }, [buttonRef]);

  return (
    // <CacheProvider value={rtlCache}>
    <ThemeProvider theme={theme}>
      <Button
        ref={buttonRef}
        variant="contained"
        onClick={() => setState(!state)}
        sx={{
          bgcolor: (theme) => {
            //
            console.log("dd", theme);

            return "red";
          },
        }}
      >
        sdfdf
      </Button>
      <Typography variant="">sdfds</Typography>
    </ThemeProvider>
    // </CacheProvider>
  );
}

export default App;
