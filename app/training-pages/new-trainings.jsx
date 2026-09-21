import { useState } from "react";
import { Button } from "@mui/material";

export const NewTrainings = ({setPage}) => {

    return(
        <div>Future New Trainings creation
            <Button onClick = {() => setPage("Home")} variant="outlined">Home</Button>
        </div>
    )
}