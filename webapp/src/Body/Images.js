import React from "react";
import Paper from "@material-ui/core/Paper";

export function Images() {

    const styles = {
        paperContainer: {
            height: 1080,
            backgroundImage: `url(${"https://i.imgur.com/BXphPfC.jpg"})`
        }
    };

    return(
        <Paper style={styles.paperContainer}>
        </Paper>
    )
}