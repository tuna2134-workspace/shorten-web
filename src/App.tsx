import React from 'react'
import { Button, Box, TextField } from '@mui/material';
import '@fontsource/roboto/400.css';

function App() {
  const [url, setUrl] = React.useState<string>("");
  const [data, setData] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  }
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(url)
    const res = await fetch("https://wakuwaka.quest/", {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();
    setData(`https://wakuwaka.quest/${data.short}`);
  }

  return (
    <>
      <Box sx={{ height: "100vh", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1>短縮URL</h1>
        <Box sx={{ height: "auto", display: "flex", alignItems: "center" }}>
          <TextField sx={{
            width: "25rem"
          }} onChange={onChange} label="Url" variant='standard'></TextField>
          <Button sx={{ marginLeft: "8px" }} onClick={onSubmit} variant="text">短縮する！</Button>
        </Box>
        <p>{data}</p>
      </Box>
    </>
  )
}

export default App
